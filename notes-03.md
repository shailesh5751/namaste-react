# React Notes

## 🧩 Scripts by NPM
- `npm start` = `npm run start`  
  (because `start` is a reserved script name in npm)

---

## ⚛️ React Element
- A **React element** is an **object**, not an actual DOM element.
- React converts this object into a real **HTML element** and renders it to the DOM.

---

## 🧠 JSX (JavaScript XML)
- **Created by:** Facebook developers  
- **Purpose:** A syntax extension that makes writing UI code easier.
- React can be used **with or without JSX**.
- JSX is **not HTML inside JS**; it just looks like HTML.
- JSX is **not understood by JS engines**, since they understand only **ECMAScript**.

### JSX Compilation Flow
JSX → Babel (via Parcel/Vite/Webpack) → React.createElement() → ReactElement (JS object) → HTMLElement (DOM)

### JSX Rules
- Attributes must be **camelCase**.
- Multiline JSX must be wrapped in **parentheses `()`**.
- JSX must return **a single parent element**.

---

## 🧱 Components
> Everything in React is a component.

### Types of Components
1. **Class Components** (Old, rarely used now)
2. **Functional Components** (Modern, preferred)

### Component Rules
- Name must **start with a Capital letter**.
- Must **return JSX**.

### Converting to a Functional Component
1. Rename function starting with a capital letter.
2. Convert into an **arrow function**.
3. Return JSX.

---

## 🔍 Component vs Functional Component
- **Component:**  
  Any reusable UI piece in React.

- **Functional Component:**  
  A component created using a JavaScript function (mostly arrow function).

---

## ⚙️ Rendering Components
To render a component in JSX:

```jsx
<Component />
```

### Equivalent forms:
```jsx
<Component></Component>
```

```jsx
{Component()}
```

---

## 🧩 Component Composition
**Definition:**  
Nesting components inside other components to build the UI.

---

## 🧮 Curly Braces `{}` in JSX
You can write **any JavaScript expression** inside `{}`.  
React **sanitizes** this data to prevent XSS (Cross-Site Scripting).

Example:
```jsx
<p>{2 + 5}</p>
```

---

## 💡 React Component vs React Element

### React Component
A JavaScript **function or class** that returns JSX.

Example:
```jsx
function Header() {
  return <h1>Hello</h1>;
}
```

### React Element
The **JS object** returned from JSX.

Example:
```jsx
const elem = <h1>Hello</h1>;
```

---

## ⚠️ Important
You **cannot access a component before it is defined**, similar to using a `const` variable before initialization.
