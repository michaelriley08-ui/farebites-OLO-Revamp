# Agent Rules & Skill Files — Developer Guide

> **What this document covers:** How to write `.agents/AGENTS.md` rule files and Skill files,  
> why they work, and ideas for deploying specialized agents across your projects.

---

## Table of Contents

1. [How the Agent Customization System Works](#how-the-agent-customization-system-works)
2. [The Two Types of Customizations](#the-two-types-of-customizations)
3. [Rules (AGENTS.md)](#rules-agentsmd)
4. [Skills](#skills)
5. [Scope — Global vs. Workspace](#scope--global-vs-workspace)
6. [Writing Effective Rules](#writing-effective-rules)
7. [Writing Effective Skills](#writing-effective-skills)
8. [Agent Deployment Ideas for FareBites](#agent-deployment-ideas-for-farebites)
9. [Quick Reference](#quick-reference)

---

## How the Agent Customization System Works

When Antigravity IDE starts a session, it **automatically discovers** customization files from two roots before the agent does any work:

```
Global Root:    ~/.gemini/config/
Workspace Root: <project>/.agents/
```

This means you never have to tell the agent "read this file first." It already has the rules in context before it reads your first message.

Think of it like this:

```
┌────────────────────────────────────────────┐
│              Your Message                  │
└────────────────────────────────────────────┘
        ↑ processed AFTER
┌────────────────────────────────────────────┐
│        .agents/AGENTS.md (loaded)          │
│        .agents/skills/*/SKILL.md (loaded)  │
└────────────────────────────────────────────┘
        ↑ loaded BEFORE your message
```

The result: **every session inherits your rules automatically**, regardless of which conversation you start.

---

## The Two Types of Customizations

| Type | What it is | Where to put it |
|------|------------|-----------------|
| **Rules** | Behavioral instructions the agent always follows | `AGENTS.md` |
| **Skills** | On-demand capability packages triggered by context | `skills/<name>/SKILL.md` |

---

## Rules (AGENTS.md)

Rules are plain markdown instructions appended to `AGENTS.md`. They are **always active** — the agent reads them every session without needing to be prompted.

### Structure

```
.agents/
└── AGENTS.md      ← Your rules file (one file, all rules)
```

### What Goes in AGENTS.md

Anything you want the agent to always do or always avoid. Good candidates:

- **Workflow conventions** — how to structure plans, checklists, walkthroughs
- **File naming standards** — where to save things, how to name files
- **Coding style rules** — preferred patterns, things to avoid
- **Project-specific facts** — tech stack, file layout, dev server URL
- **Tone / communication** — response length, verbosity, format preferences

### Syntax

Plain markdown. Use headings, bullets, code blocks. There is no special syntax — it's just text instructions the model reads and follows.

```markdown
# My Project Agent Rules

## Always do this
- Use 2-space indentation in all JavaScript files.
- Never use `var`, always use `const` or `let`.

## Never do this
- Do not install new npm packages without asking.
- Do not edit files in the `vendor/` directory.

## Project Overview
- Stack: Next.js + TypeScript
- Dev server: `npm run dev` → http://localhost:3000
```

### Important: Rules Are Additive

Rules in `.agents/AGENTS.md` are **merged** with global rules from `~/.gemini/config/AGENTS.md`. Neither file overrides the other — both apply simultaneously.

---

## Skills

Skills are **context-triggered capability packages**. Unlike rules (which are always active), skills are loaded only when the agent determines they are relevant to the current task.

### Structure

```
.agents/
└── skills/
    └── my-skill-name/
        ├── SKILL.md          ← Required. Instructions + YAML frontmatter.
        ├── scripts/          ← Optional. Helper scripts.
        ├── examples/         ← Optional. Reference implementations.
        ├── resources/        ← Optional. Templates, assets.
        └── references/       ← Optional. Extended documentation.
```

### SKILL.md Format

```markdown
---
name: my-skill-name
description: A one-sentence description of what this skill does and when it applies.
---

# My Skill Name

Full instructions for how to perform this skill. Loaded only when triggered.
Write as much detail as needed — up to ~500 lines before using a references/ subfolder.

## When to Use This Skill
- Condition A
- Condition B

## Steps
1. Do this first
2. Then do this
```

### How Skills Are Triggered

The agent matches the `name` and `description` fields from the YAML frontmatter against the current task context. If there's a strong match, the full SKILL.md body is loaded into context.

**Example:** If your skill description is:
> "How to write API integration functions using the FareBites api.js pattern"

...then whenever you ask the agent to add an API call, it will automatically load this skill and follow the prescribed pattern — without you having to reference it.

---

## Scope — Global vs. Workspace

| | Global (`~/.gemini/config/`) | Workspace (`.agents/`) |
|---|---|---|
| **Applies to** | Every project on your machine | Only this repository |
| **Best for** | Personal preferences, universal code style | Project-specific conventions |
| **Committed to git** | ❌ No — stays on your machine | ✅ Yes — shared with teammates |
| **Examples** | "Always use 2-space indent", "Prefer `async/await`" | "Dev server is at port 8000", "All session logs go to `docs/sessions/`" |

---

## Writing Effective Rules

### Be Specific, Not General

❌ Vague:
```markdown
- Be helpful and concise.
```

✅ Specific:
```markdown
- Keep all terminal command proposals under 120 characters per line.
- When modifying app.js, always confirm the line number range before editing.
```

### Use Exceptions

Rules that have no exceptions make agents over-cautious:

```markdown
## Documentation Rule
For every non-trivial task, create a session file at docs/sessions/YYYY-MM-DD-slug.md.

### Exceptions
- Trivial tasks (single typo fix): Write a brief walkthrough-only entry.
- Research tasks ("explain how X works"): Skip the file entirely.
```

### State the Why

If a rule seems arbitrary, explaining the reason helps the agent make better judgement calls in edge cases:

```markdown
## Why We Skip Browser Verification for Text Changes
The browser subagent spins up Chromium and executes the full render pipeline,
which takes 3-5 minutes. For changes that don't affect layout or visual behavior,
this is unnecessary overhead. Reserve it for UI layout changes.
```

---

## Writing Effective Skills

### Keep the Frontmatter Description Precise

The description is the **trigger** — it must closely match the kinds of prompts that should activate this skill. Think of it as semantic search.

```yaml
---
name: farebites-api-integration
description: Adding or modifying API calls in api.js to interact with FareBites backend endpoints.
---
```

### Include a "When to Use" Section

Since skills are triggered automatically, helping the model understand the exact activation conditions prevents false positives:

```markdown
## When to Use This Skill
- User asks to add a new API endpoint
- User asks why an API call is failing
- User asks to modify request/response handling in api.js

## When NOT to Use This Skill
- UI-only changes with no backend interaction
- Changes to static data or mock state
```

### Keep SKILL.md Under 500 Lines

Beyond 500 lines, context gets expensive. Move detailed reference material to `references/` and link to it:

```markdown
For full endpoint documentation, see [references/endpoints.md](references/endpoints.md).
```

---

## Agent Deployment Ideas for FareBites

Here are concrete ways you could deploy specialized agents for this project:

### 1. 🧪 QA / Regression Agent
**Trigger:** Any time you modify checkout or cart logic.

```yaml
name: qa-regression-agent
description: Running manual regression checks on the cart and checkout flow after code changes.
```

**Skill does:**
- Launches a browser subagent against `localhost:8000`
- Walks through a scripted set of UI actions (add item → cart → checkout)
- Screenshots each step and appends results to the session walkthrough

---

### 2. 📖 API Documentation Agent
**Trigger:** Any time `api.js` is modified.

```yaml
name: api-doc-updater
description: Keeping docs/API_CRASH_COURSE.md and swagger.json in sync when api.js changes.
```

**Skill does:**
- Reads the modified function signatures in `api.js`
- Diffs them against the current `docs/API_CRASH_COURSE.md`
- Appends a new section or updates the relevant endpoint documentation

---

### 3. 🎨 UI Review Agent
**Trigger:** Changes to `shared.css` or Tailwind class modifications in `app.js`.

```yaml
name: ui-consistency-reviewer
description: Reviewing CSS and Tailwind changes to ensure they match the FareBites design system.
```

**Skill does:**
- Checks that new colors are from the approved Tailwind palette (`violet-*`, `gray-*`)
- Flags any hardcoded hex colors or inline `style=` attributes
- Suggests consistent alternatives

---

### 4. 🔐 Auth Guard Reviewer
**Trigger:** Changes near the `protectedPages` array or auth logic in `app.js`.

```yaml
name: auth-guard-reviewer
description: Reviewing changes to authentication guards and protected route logic in app.js.
```

**Skill does:**
- Lists all pages currently in `protectedPages`
- Confirms the `navigateTo()` guard logic is intact
- Flags any new pages that should be protected but aren't

---

### 5. 📋 Session Log Agent (Already Deployed)
**Our current `.agents/AGENTS.md` rule does this.**

Auto-creates `docs/sessions/YYYY-MM-DD-slug.md` for every task, with a three-phase lifecycle (Plan → Checklist → Walkthrough).

---

## Quick Reference

```
.agents/
├── AGENTS.md                          ← Always-on behavioral rules
└── skills/
    └── <skill-name>/
        ├── SKILL.md                   ← Required (frontmatter + instructions)
        ├── scripts/                   ← Optional helper scripts
        ├── examples/                  ← Optional reference code
        ├── resources/                 ← Optional templates / assets
        └── references/               ← Optional extended docs (for large skills)
```

| Question | Answer |
|----------|--------|
| When are rules loaded? | Before every session, automatically |
| When are skills loaded? | Only when the task context matches the skill description |
| Can rules contradict each other? | Avoid it — be specific and use exceptions |
| How long can SKILL.md be? | ~500 lines. Use `references/` for more |
| Are workspace rules git-committed? | Yes — `.agents/` is inside your project |
| Do global rules override workspace rules? | No — both apply simultaneously |
