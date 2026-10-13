# Football Engine - Development Plan

## Vision

Build a football simulation engine that models the strategic battle between offensive and defensive play calling.

The long-term goal is **not** simply to create a football game.

The goal is to create an engine capable of answering two questions for every snap:

1. **What happened?**
2. **Why did it happen?**

Every play should be explainable.

---

# Guiding Principles

- Engine first, UI second.
- Every result should have a reason.
- Commentary should describe events, never determine them.
- Football logic and UI should remain completely separate.
- Keep the project simple and enjoyable to work on.
- Add complexity only when it provides meaningful football decisions.

---

# Milestone 1 - Build the Core Football Engine (POC)

**Goal**

Prove that believable football plays can be generated from offensive and defensive play calls.

No game.

No clock.

No score.

One play at a time.

---

## Step 1 - Create Project Skeleton

Create a simple static website.

Files:

- index.html
- styles.css
- app.js
- Engine.js
- Plays.js
- Defenses.js
- Commentary.js

Success Criteria:

- Page loads.
- JavaScript loads successfully.
- Console output works.

---

## Step 2 - Create Football Data

Define a very small set of offensive plays.

Initial plays:

- Inside Zone
- Counter
- Slant

Define a very small set of defensive calls.

Initial defenses:

- Cover 3
- Run Blitz
- Man Blitz

Each play should simply be a JavaScript object.

No classes yet unless they become useful.

Success Criteria:

Engine can reference offensive and defensive play definitions.

---

## Step 3 - Create Event Definitions

Define the first football events.

Example events:

- Successful Handoff
- Running Lane Opens
- Running Lane Closes
- Pulling Guard Wins Block
- Linebacker Wrong Gap
- QB Under Pressure
- Receiver Separation
- Broken Tackle
- Safety Tackle
- Touchdown

Events should describe football actions.

Events should not contain commentary.

---

## Step 4 - Create the Football Engine

Create:

Engine.runPlay(offense, defense)

The engine should:

- Compare play concepts.
- Generate football events.
- Calculate yards gained.
- Return a result object.

Example:

- Gain
- Events
- Debug Information

No commentary yet.

Success Criteria:

Console displays believable football events.

---

## Step 5 - Build Commentary Engine

Input:

Football events.

Output:

Natural language description.

The commentary engine should never inspect which play was called.

It only translates events into readable English.

Success Criteria:

Different event combinations produce believable play descriptions.

---

## Step 6 - Build Simple UI

Simple dropdowns.

Offense:

- Inside Zone
- Counter
- Slant

Defense:

- Cover 3
- Run Blitz
- Man Blitz

Button:

Run Play

Display:

- Gain
- Commentary
- Debug Information

Success Criteria:

User can run plays repeatedly from the browser.

---

# Milestone 2 - Improve Football Decisions

Introduce football concepts instead of simple play names.

Examples:

- Misdirection
- Gap Attack
- Outside Run
- Quick Pass
- Deep Pass
- Play Action
- Pulling Guard

Allow concepts to influence event generation.

---

# Milestone 3 - Player Ratings

Introduce players.

Examples:

- QB Awareness
- QB Accuracy
- RB Vision
- WR Route Running
- OL Run Blocking
- LB Play Recognition
- CB Man Coverage

Players influence events instead of directly influencing yards.

---

# Milestone 4 - Coordinator AI

Create offensive and defensive coordinators.

Responsibilities:

- Choose plays.
- Learn tendencies.
- Counter previous calls.
- Adjust strategy.

No game clock yet.

Simply intelligent play selection.

---

# Milestone 5 - Game Engine

Introduce:

- Downs
- Distance
- Field Position
- Clock
- Quarters
- Timeouts
- Drives
- Score

The football engine should remain unchanged.

The game engine simply calls it repeatedly.

---

# Future Ideas

Potential additions:

- Playbooks
- Personnel packages
- Motion
- Audibles
- Weather
- Crowd noise
- Injuries
- Season mode
- Statistics
- Film room
- Multiple commentary styles
- Coach mode
- Coordinator career mode

---

# Architecture Goals

The project should remain divided into independent systems.

Football Engine

- Understands football.
- Produces football events.

Commentary Engine

- Understands language.
- Converts events into readable commentary.

Coordinator AI

- Chooses offensive and defensive plays.

Game Engine

- Manages clock, score, drives and game flow.

UI

- Displays information.
- Never contains football logic.

---

# Success Definition

The project succeeds when a user can read the generated commentary and think:

> "That sounds like a play that could actually happen in a football game."

If we consistently achieve that, the rest of the simulator can be built on top of a solid foundation.