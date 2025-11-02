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
# ⚛️ React Props and Rendering Optimization

## 🧩 Props in React
React wraps **all props inside an object** and passes them to the component.

---

## 🧠 Ways to Pass Props

### 1. `(props)` — Access using the props object
#### 1.1 Destructuring the Data
```jsx
const { a, b, c } = props;
```

- You can access them directly using variables `a`, `b`, and `c`.
- Use **optional chaining** to safely access properties:
  ```jsx
  props?.a
  ```
  This prevents the code from breaking if `props` is `undefined` or empty.

#### 1.2 Direct Access
```jsx
props.a
props.b
props.c
```

---

### 2. `({ a, b, c })` — Direct Destructuring in Function Parameters
You can destructure props directly while defining the component:
```jsx
const MyComponent = ({ a, b, c }) => {
  return <div>{a} {b} {c}</div>;
};
```

---

## ⚙️ Config-Driven UI
> **Definition:** Controlling the UI using data or configuration objects instead of hardcoding components.

- UI is rendered dynamically based on configuration.
- Example: Dynamic menus, forms, or dashboards driven by JSON config.

---

## 🧩 Frontend Layers
- **UI Layer:** Presentation components (what user sees)
- **Data Layer:** Logic, state, API calls, or data management
- Together, they form the **overall frontend architecture**.

---

## 🚀 Performance Optimization with Keys in React

### 🧠 Why Keys Are Important
- When rendering lists using `.map()`, React identifies elements using **keys**.
- Without keys, React **re-renders all components** when one changes.
- Keys help React efficiently update only the **changed elements**.

### Example:
```jsx
{restaurants.map((res) => (
  <RestaurantCard key={res.id} {...res} />
))}
```

---

### ⚠️ Key Best Practices
| Case | Description | Recommendation |
|------|--------------|----------------|
| ❌ No key | React re-renders all components | **Not acceptable** |
| ⚠️ Index as key | Works but not reliable if list changes | **Avoid if possible** |
| ✅ Unique ID | Best performance and accuracy | **Best practice** |

---

**Summary:**  
Using unique keys prevents unnecessary re-renders and improves performance — a major React optimization technique.
