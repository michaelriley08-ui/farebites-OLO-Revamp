#!/usr/bin/env python3
"""
sync_past_sessions.py

One-time script to scrape all past Antigravity IDE conversation brain folders
and compile them into readable session files under docs/sessions/.

Run from the workspace root:
    python3 docs/sessions/sync_past_sessions.py

Requirements: Python 3.6+, no external dependencies.
"""

import os
import json
import re
import shutil
from pathlib import Path
from datetime import datetime, timezone

# ── Configuration ──────────────────────────────────────────────────────────────

BRAIN_DIR = Path.home() / ".gemini" / "antigravity-ide" / "brain"
SESSIONS_DIR = Path(__file__).parent  # docs/sessions/

# Conversations already backfilled manually — skip these
SKIP_CONVERSATION_IDS = {
    "ae440a8a-aaf5-4399-b898-bacd0202a97e",  # Current conversation (already backfilled)
}

# ── Helpers ────────────────────────────────────────────────────────────────────

def read_file_safe(path: Path) -> str:
    """Read a file, returning empty string on any error."""
    try:
        return path.read_text(encoding="utf-8").strip()
    except Exception:
        return ""


def extract_title_from_plan(content: str) -> str:
    """
    Pull the first H1 heading from an implementation plan as the task title.
    Falls back to 'Unknown Task' if no H1 is found.
    """
    for line in content.splitlines():
        line = line.strip()
        if line.startswith("# "):
            return line[2:].strip()
    return "Unknown Task"


def infer_date_from_conversation(conv_dir: Path) -> str:
    """
    Best-effort date extraction from the conversation directory.
    Tries (in order):
      1. Read transcript.jsonl first line for a timestamp
      2. Fall back to the directory's modification time
    """
    # Try reading the transcript for a timestamp
    logs_dir = conv_dir / ".system_generated" / "logs"
    transcript = logs_dir / "transcript.jsonl"
    if transcript.exists():
        try:
            with transcript.open(encoding="utf-8") as f:
                first_line = f.readline()
                if first_line:
                    data = json.loads(first_line)
                    # Look for any ISO timestamp field
                    for key in ("created_at", "timestamp", "start_time"):
                        if key in data:
                            ts = data[key]
                            dt = datetime.fromisoformat(ts.replace("Z", "+00:00"))
                            return dt.strftime("%Y-%m-%d")
        except Exception:
            pass

    # Fall back to directory modification time
    try:
        mtime = conv_dir.stat().st_mtime
        dt = datetime.fromtimestamp(mtime, tz=timezone.utc)
        return dt.strftime("%Y-%m-%d")
    except Exception:
        return "unknown-date"


def slugify(title: str) -> str:
    """Convert a title string to a URL-safe lowercase slug."""
    slug = title.lower()
    slug = re.sub(r"[^a-z0-9\s-]", "", slug)
    slug = re.sub(r"\s+", "-", slug.strip())
    slug = re.sub(r"-+", "-", slug)
    return slug[:60]  # Cap at 60 chars


def build_session_file(
    conv_id: str,
    date: str,
    title: str,
    plan_content: str,
    walkthrough_content: str,
    task_content: str,
) -> str:
    """Assemble the unified session file content."""
    sections = []

    sections.append(f"# {title}")
    sections.append(f"\n**Date:** {date}  \n**Conversation ID:** `{conv_id}`\n")

    if plan_content:
        # Strip the H1 title from the plan since we already have it above
        plan_body = re.sub(r"^#\s+.+\n", "", plan_content, count=1).strip()
        sections.append(f"## Implementation Plan\n\n{plan_body}")

    if task_content:
        task_body = re.sub(r"^#\s+.+\n", "", task_content, count=1).strip()
        sections.append(f"## Task Checklist\n\n{task_body}")

    if walkthrough_content:
        walkthrough_body = re.sub(r"^#\s+.+\n", "", walkthrough_content, count=1).strip()
        sections.append(f"## Walkthrough\n\n{walkthrough_body}")

    if not plan_content and not walkthrough_content:
        sections.append("_No implementation plan or walkthrough found for this session._")

    return "\n\n---\n\n".join(sections) + "\n"


# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    if not BRAIN_DIR.exists():
        print(f"[ERROR] Brain directory not found: {BRAIN_DIR}")
        print("  Make sure Antigravity IDE has been run at least once.")
        return

    SESSIONS_DIR.mkdir(parents=True, exist_ok=True)

    conversation_dirs = [
        d for d in BRAIN_DIR.iterdir()
        if d.is_dir() and d.name not in SKIP_CONVERSATION_IDS
    ]

    print(f"Found {len(conversation_dirs)} conversation(s) in {BRAIN_DIR}")
    print(f"Skipping {len(SKIP_CONVERSATION_IDS)} already-backfilled conversation(s).\n")

    created = 0
    skipped = 0
    errors = 0

    for conv_dir in sorted(conversation_dirs, key=lambda d: d.stat().st_mtime):
        conv_id = conv_dir.name

        # Read available artifact files
        plan_content = read_file_safe(conv_dir / "implementation_plan.md")
        walkthrough_content = read_file_safe(conv_dir / "walkthrough.md")
        task_content = read_file_safe(conv_dir / "task.md")

        # Skip conversations with no useful content
        if not plan_content and not walkthrough_content:
            print(f"  [SKIP] {conv_id[:8]}... — no plan or walkthrough found")
            skipped += 1
            continue

        # Extract metadata
        date = infer_date_from_conversation(conv_dir)
        title = extract_title_from_plan(plan_content) if plan_content else "Untitled Session"
        slug = slugify(title)
        filename = f"{date}-{slug}.md"
        output_path = SESSIONS_DIR / filename

        # Avoid overwriting manually created files
        if output_path.exists():
            print(f"  [EXISTS] {filename} — skipping (already exists)")
            skipped += 1
            continue

        try:
            content = build_session_file(
                conv_id=conv_id,
                date=date,
                title=title,
                plan_content=plan_content,
                walkthrough_content=walkthrough_content,
                task_content=task_content,
            )
            output_path.write_text(content, encoding="utf-8")
            print(f"  [CREATED] {filename}")
            created += 1
        except Exception as e:
            print(f"  [ERROR] {conv_id[:8]}... — {e}")
            errors += 1

    print(f"\n✅ Done. Created: {created}  Skipped: {skipped}  Errors: {errors}")
    print(f"   Output directory: {SESSIONS_DIR.resolve()}")


if __name__ == "__main__":
    main()
