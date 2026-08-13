# FareBites OLO Revamp — Workspace Agent Rules

These rules apply to all agent sessions operating in this workspace.

---

## Session Change Log Convention

For every coding task completed in this workspace, the agent MUST follow this unified documentation convention. This replaces the use of hidden UUID-named folders (e.g., `~/.gemini/.../brain/<uuid>/`) for implementation plans and walkthroughs.

### Rule: Write a Single Unified File to `docs/sessions/`

For every non-trivial task, create ONE markdown file directly in the workspace at:

```
docs/sessions/YYYY-MM-DD-short-descriptive-slug.md
```

Use today's date and a short, human-readable slug based on the task. For example:
- `docs/sessions/2026-08-09-remove-testing-pages-from-hamburger.md`
- `docs/sessions/2026-08-02-fix-fresno-checkout-error.md`

### File Lifecycle

The file evolves through three phases within the same session:

**Phase 1 — Plan (Before Execution)**
- Populate the file with the Implementation Plan (problem summary, proposed changes, verification plan).
- Set `RequestFeedback: true` so the user can review and approve.
- Stop and wait for the user's approval before making code changes.

**Phase 2 — Track (During Execution)**
- Append a `## Task Checklist` section to the same file.
- Mark items `[ ]`, `[/]`, `[x]` as work progresses.

**Phase 3 — Walkthrough (After Execution)**
- Append a `## Walkthrough` section to the same file.
- Include a summary of changes made, files modified, and verification results.
- Include screenshots or recording links if browser verification was performed.

### File Template

Use the following structure:

```markdown
# [Task Title]

**Date:** YYYY-MM-DD  
**Conversation ID:** <conversation-id>

## Summary
Brief description of the problem and what this session accomplishes.

## Implementation Plan
...proposed changes, files to be modified...

## Verification Plan
...how to verify the changes...

---

## Task Checklist
- [ ] Task 1
- [ ] Task 2

---

## Walkthrough
...changes made, verification results...
```

### Exceptions
- **Trivial Tasks** (e.g., fix a single typo, rename a variable): You may skip the plan phase and write a brief Walkthrough-only entry.
- **Investigatory / Research Tasks** (e.g., "explain how X works"): Skip the session file entirely; respond directly in chat.

---

## Browser Verification

- **For simple text/code changes:** Prefer code-level verification (syntax review, grep checks). **Skip the browser subagent** unless the user explicitly requests visual verification.
- **For UI layout changes:** Use the browser subagent to capture screenshots and embed them in the Walkthrough section.

---

## Project Overview

- **Framework:** Vanilla HTML + Tailwind CSS + JavaScript (no build step).
- **All rendering logic lives in:** `app.js` (single large file, ~14,000 lines).
- **Shared styles:** `shared.css`
- **API calls:** `api.js`
- **Dev server:** `http://localhost:8000`
- **Documentation:** `docs/` directory in the workspace root.
