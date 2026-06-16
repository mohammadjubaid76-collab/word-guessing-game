# 🎮 Word_Guessing_Game

A dynamic, fully interactive, and lightweight client-side Word Guessing Game engineered with standard frontend architectures utilizing raw **HTML5**, **CSS3**, and **Vanilla JavaScript**. 

The application implements automated pseudo-random vocabulary selection, string-to-array tracking matrix transformations, contextual hint rendering, and structured regex validation systems.

---

## 🚀 Key Architectural Features

* **State-Driven UI Rendering:** Dynamically evaluates hidden character positions and swaps placeholders (`_`) with matching alphanumeric character tokens in real-time.
* **Sanitized Validation Layer:** Enforces input filtering constraints through a native regex boundary test rule (`/^[A-Z]$/`) to prevent duplicate guesses, multi-character blocks, or invalid non-alphabetic symbols.
* **Contextual Clue Engines:** Maps complex vocabulary records to corresponding contextual hints, fully supporting whitespace-sensitive token configurations (e.g., `"MS DHONI"`).
* **Physical Hardware Hooks:** Listens directly for native keyboard keypress operations, binding the physical `Enter` key to the computational evaluation pipeline.
* **Aesthetic Responsive Theme:** Rendered utilizing flexible CSS Flexbox viewport centers, soft environmental backdrops (`rgb(234, 241, 243)`), smooth hover animations, and conditional status alerts (`#28a745` for success indicators, `#dc3545` for execution failures).

---

## 📁 Repository Directory Layout

The workspace environment utilizes a standard structural footprint across isolated file layers:

```text
├── index.html        # Declares the UI layer, structural DOM blocks, and event triggers
├── style1.css        # Defines typography, Flexbox grids, and micro-interaction states
└── script.js         # Drives data storage, computational loops, and validation lo
