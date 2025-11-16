# 🚀 React Concepts & Architecture — Clean Developer Notes

A clean and concise guide covering React’s internal working, exports/imports, hooks, Virtual DOM, Fiber, and performance concepts — perfect for interviews, viva, revision, and documentation.

---

## 📁 Component Structure & Code Organization

- Write every React component in a **separate file**.
- Keeps code:
  - Clean  
  - Maintainable  
  - Reusable  

### 📝 Uber’s Internal Rule  
> “No component should have more than 100 lines. If it does, you're doing something wrong.”

⚠️ *Note: This is **not** an industry standard — only Uber’s internal guideline.*

---

## 🔗 Import & Export in React

React uses **ES Modules** for component communication.

---

### 1️⃣ Default Export

Use when exporting **one main value** from a file.

```js
export default ComponentName;
```

Import without `{}`:

```js
import ComponentName from "./ComponentName";
```

---

### 2️⃣ Named Export

Use when exporting **multiple items**.

```js
export const item1 = ...
export const item2 = ...
```

Import **with `{}`**:

```js
import { item1, item2 } from "./file";
```

📌 **Important:**  
Named exports MUST be imported using `{}`.

---

### ✔ Using Both Together

Allowed.

```js
export default MainComponent;
export const helper = ...
export const config = ...
```

Import like:

```js
import MainComponent, { helper, config } from "./file";
```

---

## ⚛ Purpose of Frontend Frameworks

Every frontend framework aims to:

> **Synchronize the UI with data efficiently.**

React achieves this with:
- Virtual DOM  
- Diff Algorithm  
- React Fiber  
- Hooks  
- Incremental Rendering  

---

# 🪝 React Hooks

Hooks are:

> **Normal JavaScript functions created by React (Facebook team)**  
that give special capabilities to functional components.

Common hooks:
- `useState`
- `useEffect`
- `useContext`

---

## 🔥 `useState` Hook

### Purpose
- Converts normal variables into **state variables**.

### Why it’s powerful
- Triggers **re-render** automatically  
- State persists across renders  
- Updates UI reactively  

### Scope
> State belongs only to the component it is declared in.

---

# 🧠 React Internal Working

React is fast because of its **architecture**.

---

## 1️⃣ Reconciliation Algorithm (React Fiber)

React Fiber (React 16) is the DOM update engine.

### Fiber does:
- Split rendering into chunks  
- Prioritize tasks  
- Improve responsiveness  
- Enable concurrency  

---

## 2️⃣ Virtual DOM (VDOM)

A **lightweight JS object representation** of the real DOM.

Why?
- Updating JS objects is fast  
- Updating real DOM is slow  

---

## 3️⃣ Diff Algorithm

React compares:
- Old VDOM  
- New VDOM  

Updates only what changed.

This avoids unnecessary DOM work.

---

## 4️⃣ Incremental Rendering

Fiber allows:
- Breaking work into small units  
- Rendering over multiple frames  
- Preventing UI blocking  

Smooth animations, smooth interactions.

---

# ⚡ Why React Is Fast

React is fast because it uses:

- ⚡ Virtual DOM  
- ⚡ Efficient Diff Algorithm  
- ⚡ React Fiber  
- ⚡ Incremental Rendering  
- ⚡ Minimal DOM manipulation  

> React updates only the parts of the UI that changed.

---

# 🏁 Summary

React optimizes UI updates using:
- Virtual DOM  
- Diff Algorithm  
- Fiber  
- Hooks  

Result → **fast, smooth, high-performance UI**.

---