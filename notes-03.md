# React Notes

## 🧩 Scripts by NPM
- **Note:** `npm start` = `npm run start` (because `start` is a reserved script name in npm)

---

## ⚛️ React Element
- A **React element** is an **object**, not an HTML element.
- React renders it into the DOM to produce an actual HTML element.

---

## 🧠 JSX (JavaScript XML)
- **Developed by:** Facebook developers  
- **Purpose:** A JavaScript syntax extension that makes writing React components easier.
- React can also be written **without JSX**.
- JSX is **not “HTML inside JS”**, but has **HTML/XML-like syntax**.
- It is **different from HTML** and **not pure JavaScript** — JS engines can’t understand JSX directly as they only understand **ECMAScript**.

### JSX Compilation
JSX --(transpiled by Parcel using Babel)--> React/JS Engine can understand

### JSX Conversion Flow
JSX → Babel transpiles → React.createElement() → ReactElement (JS Object) → HTMLElement (Rendered)

### JSX Rules
- Attributes are written in **camelCase**.
- Multiline JSX code should be **wrapped inside parentheses `()`**.

## 🧱 Components
> Everything in React is a component.

### Types of Components
1. **Class-based components** (Old)
2. **Functional components** (Modern, preferred) — written as JavaScript functions.

### Rules
- Component names must **start with a Capital Letter**.
- Components must **return JSX**.

### Converting to Functional Component
1. Change name to start with a capital letter.  
2. Make it an **arrow function**.

## 🔍 Difference Between Component & Functional Component
- **Component:** General term for any reusable UI piece in React.
- **Functional Component:** A specific type of component created using a JavaScript function.

## ⚙️ Rendering Components
To render a component, wrap it in JSX syntax:
```jsx
<Component />
Equivalent forms:

jsx
Copy code
<Component></Component>
{Component()}
🧩 Component Composition
Definition: Composing two or more components together (nesting components within one another).

🧮 Curly Braces {} in JSX
You can write any JavaScript expression inside {}.

React sanitizes this data before rendering to prevent cross-site scripting (XSS) or malicious data access.

💡 React Component vs React Element
React Component: A variable that contains a JavaScript function.

React Element: A variable that contains JSX code.

⚠️ Important
You cannot access a component before initialization (just like const in JavaScript).