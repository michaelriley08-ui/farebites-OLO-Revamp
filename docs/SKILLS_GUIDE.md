# Skills Guide — How Agent Skills Work

> **What this document covers:** How Skills differ from `AGENTS.md` rules, how to write them,
> how they are triggered, and a practical walkthrough using the `full-impact-analysis` skill
> already deployed in this project.

---

## TLDR — Skills vs. AGENTS.md at a Glance

| | `AGENTS.md` Rules | Skills (`SKILL.md`) |
|---|---|---|
| **Always active?** | ✅ Yes — loaded every session | ❌ No — only loaded when triggered |
| **How it activates** | Automatic, no trigger needed | Matches task context to `description` field |
| **Best for** | Workflow conventions, style rules, project facts | Step-by-step protocols for specific task types |
| **Scope of instructions** | Short, always-on guardrails | Detailed, deep-dive procedures |
| **File location** | `.agents/AGENTS.md` | `.agents/skills/<name>/SKILL.md` |
| **Can have sub-files?** | ❌ No — single file | ✅ Yes — `scripts/`, `examples/`, `references/` |
| **Git committed?** | ✅ Yes | ✅ Yes |
| **Token cost** | Always in context (keep it lean) | Only costs tokens when triggered |

### In Plain English

> **AGENTS.md** = Rules the agent always follows, like a standing employee handbook.
>
> **Skills** = Specialized playbooks the agent pulls off the shelf only when the job requires it.

---

## Table of Contents

1. [What Is a Skill?](#what-is-a-skill)
2. [How Skills Are Triggered](#how-skills-are-triggered)
3. [Skill File Structure](#skill-file-structure)
4. [Writing the SKILL.md File](#writing-the-skillmd-file)
5. [The YAML Frontmatter — The Trigger](#the-yaml-frontmatter--the-trigger)
6. [The Body — The Instructions](#the-body--the-instructions)
7. [Supporting Files](#supporting-files)
8. [Skills vs. AGENTS.md — When to Use Each](#skills-vs-agentsmd--when-to-use-each)
9. [Real Example: full-impact-analysis](#real-example-full-impact-analysis)
10. [Quick Reference](#quick-reference)

---

## What Is a Skill?

A **skill** is a folder inside `.agents/skills/` that packages a set of instructions the
agent follows when a specific type of task is detected. Think of it as a specialized
operating procedure — detailed enough to cover edge cases, but only loaded when needed.

Skills solve a real problem: you want some instructions to be very detailed and thorough,
but loading 300 lines of debugging protocol into every casual conversation is wasteful.
Skills let you have depth where it counts without cluttering every session.

---

## How Skills Are Triggered

The agent reads the `name` and `description` fields from the YAML frontmatter at the top
of `SKILL.md`. It semantically matches those fields against your current task.

**Example:**

```yaml
---
name: full-impact-analysis
description: >
  Triggered when debugging bugs, fixing data display issues, resolving count
  mismatches, investigating state inconsistencies, or troubleshooting any
  feature that involves data flowing through multiple pages, components, or
  storage layers.
---
```

If you report a bug like *"the cart total is showing the wrong number"*, the agent
matches **"count mismatch"** + **"data flowing through multiple components"** and
automatically loads the full skill body before responding.

You do **not** need to say "use the full-impact-analysis skill." It self-activates.

### Manual Trigger Phrases

You can also hard-trigger a skill with explicit phrases. It's good practice to document
these inside the skill itself:

```markdown
## Trigger Phrases
- "Full-impact analysis before any fix."
- "Trace the whole data flow first."
- "Don't just patch it."
```

---

## Skill File Structure

```
.agents/
└── skills/
    └── full-impact-analysis/          ← Folder name = skill name (kebab-case)
        ├── SKILL.md                   ← Required. The trigger + instructions.
        ├── scripts/                   ← Optional. Shell/JS helper scripts.
        ├── examples/                  ← Optional. Reference implementations.
        ├── resources/                 ← Optional. Templates, assets, data files.
        └── references/               ← Optional. Extended docs (for large skills).
```

The **folder name** should match the `name` field in the frontmatter. Use `kebab-case`.

---

## Writing the SKILL.md File

Every `SKILL.md` has two parts: the **YAML frontmatter** (the trigger) and the
**markdown body** (the instructions).

```markdown
---
name: your-skill-name
description: >
  One to three sentences describing exactly what this skill is for
  and under what task conditions it should activate.
---

# Your Skill Name

The full instructions go here. Write as much as needed — up to ~500 lines.
If you need more, move detailed content to the references/ subfolder.

## When to Use This Skill
- Condition A
- Condition B

## When NOT to Use This Skill
- Situation that might seem relevant but isn't
- Edge case to exclude

## Steps
1. Step one
2. Step two
3. Step three
```

---

## The YAML Frontmatter — The Trigger

The frontmatter is the **only part** the agent scans to decide whether to load the skill.
The body is only read **after** the skill is triggered.

| Field | Required? | Purpose |
|-------|-----------|---------|
| `name` | ✅ Yes | Unique identifier. Match the folder name. |
| `description` | ✅ Yes | Semantic trigger — must match task context phrases |

### Writing a Good Description

The description acts like a search query. It should contain:

- **The type of task** — debugging, adding, reviewing, generating, etc.
- **The domain** — API calls, CSS layout, cart logic, data display, etc.
- **The signal words** — the exact kinds of phrases a user would say

**Too vague (won't trigger reliably):**
```yaml
description: For when things go wrong.
```

**Too narrow (misses related tasks):**
```yaml
description: When the saved locations count badge is wrong on profile.html.
```

**Just right:**
```yaml
description: >
  Triggered when debugging bugs, fixing data display issues, resolving count
  mismatches, investigating state inconsistencies, or troubleshooting any
  feature that involves data flowing through multiple pages, components, or
  storage layers. Use this skill before proposing or making any code changes.
```

---

## The Body — The Instructions

After the frontmatter, the body is plain markdown. Write it like an internal team
runbook — detailed, step-by-step, with examples of what good output looks like.

### What to Include

- **Protocol steps** numbered in order
- **Checklists** the agent must complete before proceeding
- **Decision tables** for common judgment calls
- **Worked examples** — show what correct output looks like
- **Anti-patterns** — explicitly name what NOT to do
- **Trigger phrases** section — manual activation keywords

### Length Guidance

| Skill complexity | Approach |
|---|---|
| Simple (< 50 lines) | Put everything in SKILL.md |
| Medium (50–500 lines) | SKILL.md + a few inline code examples |
| Large (500+ lines) | SKILL.md links to `references/detailed-steps.md` |

---

## Supporting Files

### `scripts/`
Shell scripts, Node scripts, or Python utilities the skill needs. The agent can
reference and run these during a task.

```
scripts/
└── check-data-flow.sh     ← e.g., greps app.js for all read/write points of a key
```

### `examples/`
Reference implementations showing the correct pattern to follow.

```
examples/
└── good-impact-analysis.md    ← A sample walkthrough showing correct output
```

### `references/`
Extended documentation too long for SKILL.md. Link to it from the body:

```markdown
For the full endpoint reference, see [references/api-endpoints.md](references/api-endpoints.md).
```

### `resources/`
Templates, data files, or static assets needed during execution.

---

## Skills vs. AGENTS.md — When to Use Each

Use this decision guide when you're not sure where something belongs:

```
Is this something the agent should ALWAYS do in EVERY session?
├── Yes → Put it in AGENTS.md
└── No  → Is it a detailed procedure for a SPECIFIC TYPE of task?
           ├── Yes → Put it in a Skill
           └── No  → Just tell the agent in the chat message
```

### Put in AGENTS.md
- Session documentation convention (always write a session log)
- File naming standards (always use kebab-case for session files)
- Project overview facts (dev server is `localhost:8000`, main logic is in `app.js`)
- Communication preferences (keep responses concise, use markdown)
- Permanent restrictions (never edit files in `vendor/`, never use `var`)

### Put in a Skill
- Debugging protocol (full-impact analysis before any fix)
- API integration pattern (how to add a new endpoint following the `api.js` pattern)
- QA regression checklist (steps to verify cart/checkout after a change)
- Design system review (how to check new UI code matches the FareBites style guide)
- Release checklist (steps to prepare a production deploy)

### Just Say It in Chat
- One-off instructions that only apply to this specific message
- Preferences you haven't decided to formalize yet
- Clarifications mid-task

---

## Real Example: full-impact-analysis

This skill is already deployed in this project at:

```
.agents/skills/full-impact-analysis/SKILL.md
```

### Why it exists

Before this skill, bugs were fixed in isolation. A count was wrong on the profile page,
the count formula was patched — but it turned out the favorites page used a *different*
filtered list, and the profile page used hardcoded seed data. One fix, three related
problems.

The skill enforces that before touching any code, the agent must:

1. Identify the data source
2. Trace every write point
3. Trace every read point
4. Check for misalignment between all readers
5. Map secondary risk areas
6. Only then propose a fix with a full impact statement

### How it looks in practice

| You say | Skill activates? |
|---------|-----------------|
| "The cart total is wrong" | ✅ Yes — data display issue |
| "The order count badge shows 4 but there are only 2 orders" | ✅ Yes — count mismatch |
| "Why does location-favorites show nothing when profile says 2 stores?" | ✅ Yes — state inconsistency across pages |
| "Change the button color to violet" | ❌ No — UI-only, no data flow |
| "Rename this variable" | ❌ No — trivial refactor |

---

## Quick Reference

```
.agents/
├── AGENTS.md                           ← Always-on rules (every session)
└── skills/
    └── <skill-name>/
        ├── SKILL.md                    ← Required: frontmatter trigger + instructions
        ├── scripts/                    ← Optional: helper scripts
        ├── examples/                   ← Optional: reference code / good output samples
        ├── resources/                  ← Optional: templates, assets
        └── references/                ← Optional: extended docs (for large skills)
```

| Question | Answer |
|----------|--------|
| Do I need to tell the agent to use a skill? | No — it auto-triggers on matching tasks |
| Can I force a skill to activate? | Yes — use a trigger phrase documented in the skill |
| How long can SKILL.md be? | ~500 lines; use `references/` beyond that |
| Can a skill call other skills? | No — but AGENTS.md rules always apply alongside any skill |
| Are skills git-committed? | Yes — `.agents/` is inside your project repo |
| Does the skill body cost tokens every session? | No — only costs tokens when triggered |
| Can I have multiple skills active at once? | Yes — if multiple match the task context |
