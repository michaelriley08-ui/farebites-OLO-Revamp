# Session Change Logs

This directory contains unified session change logs for the FareBites OLO Revamp project. Each file documents a single development task or feature change.

---

## Purpose

These files serve as a human-readable, git-tracked audit trail of all changes made to the codebase. Unlike hidden agent brain directories, these files are:

- **Discoverable** — visible in your IDE file explorer and git history.
- **Searchable** — use your IDE's text search across `docs/sessions/` to find any past change.
- **Shareable** — include them in pull requests or share with teammates.

---

## File Naming Convention

```
YYYY-MM-DD-short-descriptive-slug.md
```

**Examples:**
- `2026-08-09-remove-testing-pages-from-hamburger.md`
- `2026-08-02-fix-fresno-checkout-error.md`
- `2026-07-15-add-rewards-card-gradient.md`

---

## File Structure

Each session file follows this three-phase lifecycle:

```markdown
# Task Title

**Date:** YYYY-MM-DD
**Conversation ID:** <uuid>

## Summary
Brief description of the problem and what this session accomplishes.

## Implementation Plan
Proposed changes, files to be modified, design decisions.

## Verification Plan
How changes will be tested and confirmed.

---

## Task Checklist
- [ ] Task 1
- [x] Completed task

---

## Walkthrough
Summary of what was changed, verification results, and any screenshots.
```

---

## Index

| Date | Task | File |
|------|------|------|
| 2026-08-09 | Remove Testing Pages from Hamburger Drawer | [2026-08-09-remove-testing-pages-from-hamburger.md](./2026-08-09-remove-testing-pages-from-hamburger.md) |
| 2026-08-09 | Establish Session Change Log Standard | [2026-08-09-establish-session-changelog.md](./2026-08-09-establish-session-changelog.md) |
