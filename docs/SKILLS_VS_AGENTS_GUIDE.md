# Skills vs. AGENTS.md — The Comprehensive Guide

> **Who this is for:** Anyone working in this repo who wants to understand the full
> customization system powering the AI agent — not just what to do, but *why* the
> system is designed this way, how each piece interacts, and how to use both tools
> with precision.

---

## Table of Contents

1. [The Mental Model](#the-mental-model)
2. [What Is AGENTS.md?](#what-is-agentsmd)
3. [What Is a Skill?](#what-is-a-skill)
4. [The Core Difference — Always-On vs. On-Demand](#the-core-difference--always-on-vs-on-demand)
5. [How AGENTS.md Works Under the Hood](#how-agentsmd-works-under-the-hood)
6. [How Skills Work Under the Hood](#how-skills-work-under-the-hood)
7. [The Trigger System — How Skills Self-Activate](#the-trigger-system--how-skills-self-activate)
8. [Writing Rules That Actually Work](#writing-rules-that-actually-work)
9. [Writing Skills That Actually Work](#writing-skills-that-actually-work)
10. [The Decision Framework — Which One Do I Use?](#the-decision-framework--which-one-do-i-use)
11. [How They Work Together](#how-they-work-together)
12. [Scope — Global vs. Workspace](#scope--global-vs-workspace)
13. [The File System Layout](#the-file-system-layout)
14. [Real-World Examples from This Project](#real-world-examples-from-this-project)
15. [Common Mistakes and How to Avoid Them](#common-mistakes-and-how-to-avoid-them)
16. [Full Comparison Table](#full-comparison-table)

---

## The Mental Model

Before diving into mechanics, here's the mental model that makes everything else click:

> **AGENTS.md** is like a standing employee handbook.
> It defines how the employee shows up every single day — their work hours,
> communication standards, documentation requirements, and things they're
> never allowed to do. It doesn't describe how to perform any specific job.
> It governs behavior universally.

> **A Skill** is like a specialized trade manual or operating procedure.
> A plumber doesn't carry the entire fire safety code in their head — but when
> they encounter a fire suppression system, they pull out the specific manual
> for that task. Skills work the same way: they stay on the shelf until the job
> requires them, then they're pulled in and followed precisely.

The agent loads `AGENTS.md` before reading your very first message. Skills are loaded
mid-session the moment the agent recognizes a task that matches a skill's description.
You don't have to ask. You don't have to reference a file. It just happens.

---

## What Is AGENTS.md?

`AGENTS.md` is a plain markdown file that contains **behavioral rules the agent always
follows, in every session, without exception**. It is the foundational layer of the
customization system.

### What It Actually Does

When a session starts, the system reads `AGENTS.md` and injects its contents into the
agent's context as pre-session instructions — before your first message arrives. This
means the agent is already operating under your rules from the first word you type.

Think of it as the agent having already read the handbook before walking through the
door to start the workday.

### What Belongs in AGENTS.md

The guiding question is: **"Should this apply to literally every task, no matter what
the user is asking?"** If the answer is yes, it belongs in `AGENTS.md`.

**Workflow and documentation conventions.** If you want the agent to always create a
session log for every non-trivial task, document that here. The rule fires whether
you're fixing a typo or rebuilding the checkout flow.

**Project facts.** The dev server URL, the primary logic file, the tech stack, the
design system — things the agent needs to know to orient itself in your project. You
don't want to repeat these in every chat message, and you don't want the agent to have
to re-discover them.

**Standing restrictions.** Things the agent must never do in this project — like
installing npm packages without asking, editing certain protected files, or using
deprecated patterns. These need to be always-on, not trigger-dependent.

**Communication and format preferences.** How verbose should responses be? Should the
agent use markdown headers? Should it ask before running commands? These personal
preferences belong here.

**Code style rules.** Indentation, naming conventions, preferred patterns vs. anti-patterns
specific to this codebase. Things the agent should apply every time it touches code.

### What Does NOT Belong in AGENTS.md

**Detailed step-by-step procedures.** If you find yourself writing a numbered 15-step
checklist for a specific type of task, that belongs in a Skill, not here. AGENTS.md
is loaded every session — making it long and procedural creates unnecessary overhead
in every casual conversation.

**Task-specific reference material.** API endpoint documentation, design system tokens,
regex patterns for specific parsers — these belong in a Skill's `references/` folder,
not the always-on rulebook.

**Context that only applies sometimes.** If an instruction only matters when the user
is doing a particular type of work, it's a Skill candidate, not a rule.

---

## What Is a Skill?

A Skill is a **self-contained capability package** stored as a folder inside
`.agents/skills/`. At its core, it's a `SKILL.md` file with two parts:

1. **A YAML frontmatter header** — the trigger that tells the agent when to load this skill
2. **A markdown body** — the detailed instructions to follow once triggered

Skills can optionally include supporting subfolders:
- `scripts/` — helper scripts the agent can run
- `examples/` — reference implementations showing the correct pattern
- `references/` — extended documentation too long to put in SKILL.md
- `resources/` — templates, data files, or static assets

### What Skills Are For

Skills exist to solve a specific tension: you want *some* of your agent instructions to
be very deep and detailed, but you don't want that depth to cost tokens in every casual
conversation. Skills are how you get both — depth where it matters, zero overhead when
it doesn't.

They're also the right tool when you want the agent to follow a repeatable professional
protocol. Debugging a data inconsistency isn't something you improvise every time —
it should always follow the same systematic steps. A Skill bakes that protocol in and
ensures it's followed consistently.

---

## The Core Difference — Always-On vs. On-Demand

This is the single most important thing to understand:

```
AGENTS.md rules    →  loaded EVERY session,  ALWAYS active
Skill instructions →  loaded ONLY when the task matches the skill description
```

This distinction has real consequences for how you write each one.

Because `AGENTS.md` is always loaded, **every line you add costs tokens in every
session**. Keep it focused and lean. Favor instructions that are short but unambiguous.
Don't add things just because they might be useful — add things that are genuinely
needed in the majority of sessions.

Because Skills are only loaded on demand, **you have much more room to be thorough**.
A Skill can have a 300-line step-by-step protocol, because it only enters the context
when that protocol is actually needed. You're not paying the token cost during a casual
conversation about button colors.

---

## How AGENTS.md Works Under the Hood

When the IDE starts a session, it scans two locations for `AGENTS.md` files:

```
1. Global root:    ~/.gemini/config/AGENTS.md
2. Workspace root: <your-project>/.agents/AGENTS.md
```

Both files are loaded, and their contents are **merged** — not one overriding the other,
but both applying simultaneously. If there's a conflict, the more specific workspace
rule generally takes precedence in practice, but the system doesn't automatically
resolve conflicts — it's your job to avoid writing contradictory rules.

The merged content is injected into the agent's context as a system-level instruction
block before any user message is processed. From the agent's perspective, it's as if
it "already knows" all the rules before the conversation begins.

### The Session Lifecycle With AGENTS.md

```
Session Start
     │
     ▼
Load ~/.gemini/config/AGENTS.md    (global rules)
     │
     ▼
Load .agents/AGENTS.md             (workspace rules)
     │
     ▼
Merge both into agent context
     │
     ▼
User sends first message
     │
     ▼
Agent already knows all rules — responds accordingly
```

---

## How Skills Work Under the Hood

Skills go through a two-phase process:

**Phase 1 — Discovery:** At session start, the agent scans the `skills/` directory and
reads **only** the YAML frontmatter (`name` and `description`) from each `SKILL.md`.
This is lightweight — it's just scanning for trigger keywords, not loading full content.

**Phase 2 — Activation:** When you send a message, the agent semantically compares your
request against all collected skill descriptions. If a strong match is found, the full
body of that `SKILL.md` is loaded into context, and the agent follows its instructions
for the current task.

### The Session Lifecycle With Skills

```
Session Start
     │
     ▼
Scan .agents/skills/*/SKILL.md frontmatter only
     │
     ▼
Build trigger index: {name, description} for each skill
     │
     ▼
User sends message
     │
     ▼
Compare message to trigger index
     ├── Match found → Load full SKILL.md body → Follow skill instructions
     └── No match   → Proceed without skill context
```

The key insight: **the skill body is never loaded unless the task requires it.**
This means you can have many rich, detailed Skills without bloating every session.

---

## The Trigger System — How Skills Self-Activate

The `description` field in the YAML frontmatter is the trigger. The agent performs
semantic matching — it doesn't look for exact keyword matches. It asks: "Does the
user's current task conceptually align with what this skill description says?"

### What Makes a Good Description

The description should capture:

**1. The task type** — what kind of action the user is taking:
- debugging, fixing, adding, reviewing, generating, refactoring, investigating

**2. The domain** — what area of the codebase or problem space:
- cart logic, API calls, CSS layout, authentication, data display, state sync

**3. Signal phrases** — the natural language a user would actually say when they
have this type of problem:
- "count is wrong," "shows zero," "not matching," "why doesn't it update"

### Description Quality Examples

**Too vague — won't trigger reliably:**
```yaml
description: For when something doesn't look right.
```
This could match almost anything. The agent won't know when NOT to use it.

**Too narrow — misses related tasks:**
```yaml
description: When the Saved Locations count on profile.html is wrong.
```
This only triggers for one exact bug. It won't activate for a similar issue on a
different page or with a different data type.

**Well-calibrated — triggers on the right things:**
```yaml
description: >
  Triggered when debugging bugs, fixing data display issues, resolving count
  mismatches, investigating state inconsistencies, or troubleshooting any
  feature that involves data flowing through multiple pages, components, or
  storage layers. Use this skill before proposing or making any code changes.
```
This covers the conceptual category — "data flowing through multiple places and
something not matching" — which is the real pattern that needs the protocol.

### Manual Override Triggers

Even with a great description, you can always force a skill to activate by using
explicit trigger phrases. It's good practice to document these inside the skill:

```markdown
## Trigger Phrases
You can manually activate this skill by including:
- "Full-impact analysis before any fix."
- "Trace the whole data flow first."
- "Don't just patch it — look at the whole picture."
```

---

## Writing Rules That Actually Work

### Be Specific and Actionable

Rules that are too abstract get interpreted inconsistently. Every rule should describe
a concrete, observable behavior.

❌ **Too abstract:**
```markdown
- Be careful with state changes.
```

✅ **Specific and actionable:**
```markdown
- Before modifying any state variable, grep for every location where that variable
  is read, written, or displayed. List them in the implementation plan.
```

### Include the Why

When a rule seems arbitrary, explaining the reasoning helps the agent make better
judgment calls in edge cases. Without the why, the agent might technically comply
but miss the spirit of the rule.

```markdown
## Why We Skip Browser Verification for Text-Only Changes

The browser subagent spins up Chromium and executes the full render pipeline,
which takes 3–5 minutes per run. For changes that only affect text content with
no layout or visual implications, this overhead is not justified. Reserve browser
verification for UI layout changes, component additions, or anything that could
affect responsive behavior.
```

### Write Exceptions Explicitly

A rule without exceptions makes the agent over-cautious or forced into awkward
compliance. Anticipate the cases where the rule doesn't apply.

```markdown
## Session Documentation Rule
For every non-trivial task, create a session log at docs/sessions/YYYY-MM-DD-slug.md.

### Exceptions
- **Trivial tasks** (single typo fix, rename one variable): Write a brief
  Walkthrough-only entry, skip the Plan phase.
- **Research/investigation tasks** ("explain how X works", "where is Y defined"):
  Skip the session file entirely — respond directly in chat.
```

### Keep It Lean

Every line in `AGENTS.md` costs tokens in every session. Audit it periodically.
Remove rules that are no longer relevant. Merge rules that overlap. If a rule requires
more than a paragraph of explanation, it probably belongs in a Skill instead.

---

## Writing Skills That Actually Work

### Front-load the Protocol

The most important instructions should appear early in the skill body. The agent reads
top-to-bottom. If your most critical constraint is buried at the bottom, it might be
weighted less heavily.

Always start with the hardest constraint — the thing the agent must do before anything
else:

```markdown
# Full-Impact Analysis Protocol

When this skill is active, you **must not write or propose any code changes**
until you have completed the full analysis below.
```

### Number Your Steps

Skills work best when they define an ordered procedure. Numbered steps are harder to
skip and easier to track than bullet lists.

```markdown
## Analysis Steps

1. Identify the data source
2. Trace every write point
3. Trace every read point
4. Check for misalignment between readers
5. Map secondary risk areas
6. Propose the fix with an impact statement
```

### Include Worked Examples

Show what correct output looks like. This is the most powerful thing you can add to a
Skill — it sets the standard and removes ambiguity.

```markdown
## Example Output: Step 4 (Misalignment Check)

| Check | Finding |
|-------|---------|
| Same filter? | ❌ Profile uses raw locList; favorites page uses getEnabledLocations() |
| Same data source? | ❌ Profile reads in-memory .fav; favorites reads localStorage |
| Seed data leak? | ❌ 3 LOCATIONS entries have hardcoded fav: true |
```

### Include Anti-Patterns

Explicitly name what the skill is designed to prevent:

```markdown
## Anti-Patterns This Skill Prevents

- Fixing the symptom without finding the root cause
- Patching one consumer without checking what other consumers expect
- Removing seed data without considering users who already have it in localStorage
- Changing a filter without verifying all places that use the unfiltered version
```

### Document the "When NOT to Use" Case

False-positive triggers waste time. Help the agent understand the boundaries:

```markdown
## When NOT to Trigger This Skill
- UI-only changes with no data dependencies (color, spacing, typography)
- Renaming a variable within a single function
- Adding a new static string constant
- Trivial one-liner fixes with no downstream reads
```

### Keep SKILL.md Under 500 Lines

Beyond 500 lines, move content to `references/`. Link to it from the SKILL.md body:

```markdown
For the complete list of API endpoint schemas, see
[references/api-schemas.md](references/api-schemas.md).
```

---

## The Decision Framework — Which One Do I Use?

Use this decision tree every time you're deciding where to put an instruction:

```
Does this instruction apply to EVERY session, regardless of what I'm working on?
│
├── YES → Put it in AGENTS.md
│         Examples: session log convention, project facts, standing restrictions
│
└── NO  → Is it a detailed, step-by-step protocol for a specific type of task?
           │
           ├── YES → Put it in a Skill
           │         Examples: debugging protocol, API integration pattern, QA checklist
           │
           └── NO  → Is it a one-time instruction for this specific conversation?
                     │
                     ├── YES → Just say it in the chat message
                     │
                     └── NO  → Is it reference material the agent needs occasionally?
                               │
                               ├── YES → Put it in a Skill's references/ subfolder
                               └── NO  → Consider whether it needs to be documented at all
```

---

## How They Work Together

AGENTS.md and Skills are not alternatives — they are **layers**. They stack on top of
each other and operate simultaneously.

When a session starts with a debugging task:

```
┌─────────────────────────────────────────────┐
│  AGENTS.md (always active)                  │
│  ─ Create a session log                     │
│  ─ Always stop and plan before coding       │
│  ─ Dev server is localhost:8000             │
├─────────────────────────────────────────────┤
│  full-impact-analysis Skill (triggered)     │
│  ─ Do NOT propose code before analysis      │
│  ─ Trace every write point                  │
│  ─ Trace every read point                   │
│  ─ Check for misalignment                   │
│  ─ Map secondary risks                      │
└─────────────────────────────────────────────┘
         ↓ Both active simultaneously
   Agent behavior is governed by ALL of the above
```

The rules from `AGENTS.md` don't stop applying just because a skill is active.
The skill adds protocol on top of the standing rules.

---

## Scope — Global vs. Workspace

Both AGENTS.md and Skills can exist at two levels:

| | Global (`~/.gemini/config/`) | Workspace (`.agents/`) |
|---|---|---|
| **Applies to** | Every project on your machine | Only this repository |
| **Best for** | Personal preferences, universal habits | Project-specific patterns |
| **Committed to git** | ❌ No — stays on your machine | ✅ Yes — shared with your team |
| **Rule examples** | "Always use 2-space indent" | "Session logs go to docs/sessions/" |
| **Skill examples** | "How I prefer to structure code reviews" | "FareBites API integration pattern" |

### The Layering Order

```
Global AGENTS.md         →  applies everywhere, always
     +
Workspace AGENTS.md      →  applies to this project, always
     +
Global Skills            →  triggered anywhere on your machine
     +
Workspace Skills         →  triggered only in this project
```

All four layers are active simultaneously. If global and workspace rules conflict,
write your workspace rule to be more specific — the agent will follow the more
precise instruction.

---

## The File System Layout

```
<project-root>/
└── .agents/
    ├── AGENTS.md                              ← Always-on workspace rules
    └── skills/
        ├── full-impact-analysis/              ← Deployed in this project
        │   └── SKILL.md
        │
        ├── farebites-api-integration/         ← Example: not yet created
        │   ├── SKILL.md
        │   ├── examples/
        │   │   └── add-endpoint-example.md
        │   └── references/
        │       └── api-endpoint-list.md
        │
        └── qa-regression-checklist/           ← Example: not yet created
            ├── SKILL.md
            └── scripts/
                └── smoke-test.sh
```

The SKILL.md file is the only required file. Everything else is optional support
material the skill can reference when it needs to.

---

## Real-World Examples from This Project

### Example 1 — AGENTS.md Rule: Session Documentation Convention

**What it does:** Enforces a three-phase session log lifecycle (Plan → Checklist →
Walkthrough) for every non-trivial task.

**Why it's in AGENTS.md and not a Skill:** This applies to every task — coding,
debugging, UI changes, and refactoring all require documentation. It's a universal
workflow requirement, not a specialized procedure.

**Why it's not in chat:** If it were only said in chat, it would have to be repeated
in every conversation. AGENTS.md makes it permanent.

---

### Example 2 — Skill: full-impact-analysis

**What it does:** Before any bug fix involving data display, counts, or state sync,
forces the agent to trace the complete data flow end-to-end across all consumers
before proposing any code changes.

**Why it's a Skill and not an AGENTS.md rule:** This protocol is detailed (6 ordered
steps, tables, worked examples). If it were in AGENTS.md, it would load in every
session — even when you're asking about button colors or changing a page title.
As a Skill, it only activates when a debugging or state-sync task is detected.

**The trigger that created it:** A bug where the "Saved Locations" count on the profile
page said "2 stores" but the favorites page showed zero. The fix was obvious in
isolation, but it was the *third* fix for the same symptom. The skill was created to
prevent that pattern by enforcing a holistic analysis before any fix.

---

### Potential Skill: FareBites API Integration Pattern

Not yet created, but this would be a strong candidate:

```yaml
---
name: farebites-api-integration
description: >
  Adding or modifying API calls in api.js to interact with FareBites backend
  endpoints. Triggered when adding new fetch calls, modifying request headers,
  handling new API response shapes, or debugging network request failures.
---
```

This would document:
- The correct way to add a new endpoint in `api.js`
- How to handle auth tokens in request headers
- How to handle API errors and fallbacks
- The pattern for connecting an API response to `mockupState`

---

## Common Mistakes and How to Avoid Them

### Mistake 1 — Putting Detailed Procedures in AGENTS.md

**The problem:** AGENTS.md gets long. Every session loads the full thing. Casual
conversations carry unnecessary overhead. The agent may also deprioritize buried
content in a long file.

**The fix:** Anything over ~2 paragraphs for a specific task type should be a Skill.

---

### Mistake 2 — Writing a Skill Description That's Too Narrow

**The problem:** The skill only triggers for one exact scenario and misses related ones.

**The bad description:**
```yaml
description: When the location count badge on profile.html is wrong.
```

**The fix:** Describe the conceptual category, not the specific instance:
```yaml
description: >
  Debugging data display issues, count mismatches, or state inconsistencies
  involving data that flows through multiple pages or storage layers.
```

---

### Mistake 3 — Forgetting to Document "When NOT to Use"

**The problem:** The skill triggers when it shouldn't, adding unnecessary steps to
simple tasks.

**The fix:** Add a "When NOT to trigger this skill" section to every Skill that has
any ambiguity in its scope.

---

### Mistake 4 — Writing Conflicting Rules

**The problem:** One rule says "always create a browser screenshot," another says
"skip browser verification for text changes." The agent has to guess.

**The fix:** Write exceptions explicitly within the more general rule:
```markdown
## Browser Verification Rule
Capture screenshots for all UI layout changes.

**Exception:** Text-only changes (no layout impact) do not require browser verification.
```

---

### Mistake 5 — Never Auditing AGENTS.md

**The problem:** Rules accumulate. Old rules that no longer apply still cost tokens
and can conflict with new rules.

**The fix:** Review AGENTS.md every few months. Remove stale rules. Consolidate
overlapping ones. Move procedural content to Skills.

---

## Full Comparison Table

| Property | AGENTS.md | Skill (SKILL.md) |
|----------|-----------|-----------------|
| **Loaded when** | Before every session starts | Only when task matches description |
| **Token cost** | Every session | Only on trigger |
| **Length guideline** | Keep lean — every line counts | Up to ~500 lines; use references/ beyond |
| **Activation** | Automatic — no trigger needed | Semantic match on description field |
| **Manual override** | N/A — always on | Trigger phrase documented in skill |
| **Scope options** | Global or workspace | Global or workspace |
| **Git committed** | ✅ Yes (workspace) | ✅ Yes (workspace) |
| **Can conflict** | With global AGENTS.md | With other active skills (avoid) |
| **Supports sub-files** | ❌ No | ✅ Yes (scripts/, examples/, references/) |
| **Best for** | Standing rules, project facts, restrictions | Step-by-step protocols, deep procedures |
| **Ideal length** | Short — a few dozen lines max | As long as needed for the protocol |
| **When to create** | You want something to always apply | You want something to apply conditionally |
| **When NOT to create** | For task-specific procedures | For always-on behavioral rules |
| **Example: this project** | Session log convention, browser verification policy | `full-impact-analysis` debugging protocol |
