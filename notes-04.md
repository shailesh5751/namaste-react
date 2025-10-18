# 🧠 React Basics Notes

## 🗂️ Planning Before Coding
- Always **plan first**, then start coding.
- Understand the component structure, data flow, and reusability before implementation.

---

## 🎨 Inline CSS in JSX
- In JSX, the `style` attribute accepts a **JavaScript object**.
- Example:
  ```jsx
  <h1 style={{ color: "blue", fontSize: "20px" }}>Hello World</h1>
  ```
- CSS property names use **camelCase** instead of kebab-case.
  - Example: `background-color` → `backgroundColor`

---

## 📦 Passing Props to a Component
- Passing **props** to a React component is similar to **passing arguments to a function**.
- Example:
  ```jsx
  const Welcome = (props) => {
    return <h2>Hello, {props.name}!</h2>;
  };

  // Passing props
  <Welcome name="Alice" />
  ```
- Here, `name="Alice"` is the prop being passed to the `Welcome` component.

---
