# React Notes

## useEffect
- **Named import** from React.
- Takes **2 arguments**:
  1. Callback function  
  2. Dependency array

### Ways to use `useEffect`
1. **No dependency array**  
   - Runs **after every render** of the component.
2. **Empty dependency array `[]`**  
   - Runs **only once** after the initial render.
3. **With dependencies**  
   - Runs **every time the dependency value changes**.

---

## useState
- Used to create **local state variables**.
- **Never create `useState` outside** the body of a component → causes error.
- Always call `useState` at the **top level of the component**  
  - Helps React understand the code flow and avoid inconsistencies.
- **Do not use inside**:
  - `if-else`
  - `for` loops
  - functions  
  (Mentioned in React documentation — although sometimes valid, it leads to inconsistencies.)

---

## React Router DOM

### createBrowserRouter
- Takes an **array of objects**.
- Each object contains:
  - `path`
  - `element` (component to render)
- A webpage is a **composition of components**.
- Provide the router configuration to the app using **`RouterProvider`** in `root.render`.

> Multiple routers exist in `react-router-dom`, but **`createBrowserRouter` is recommended** for React Router projects.

---

## Component Creation
- `rafce` → shortcut to create a component.
- **Best practice**: write components manually  
  - Writing code yourself helps it stick in memory.

---

## useRouteError
- Hook provided by `react-router-dom`.
- Used to display **specific error details** when routing fails.

---

## Children Routes
- **Header and Footer remain constant**.
- Only the middle content changes.
- Use the **`Outlet` component**:
  - Acts like a tunnel
  - Fills child components according to the path.

---

## Navigation in React
- ❌ **Never use `<a>` (anchor) tags** for navigation  
  - Reloads the entire page.
- ✅ Use **`Link`** from `react-router-dom`  
  - Refreshes only components.
- Hence, React apps are called **Single Page Applications (SPA)**.

> `Link` internally uses an `<a>` tag.

---

## Routing Types
1. **Client-side routing**
2. **Server-side routing**

---

## Dynamic Routing
- Variable is part of the URL.
- `useParams` hook:
  - Returns route variables as an **object**.

---

## Lists and Keys
- When using `map()`, always provide a **`key`** to the **parent JSX element**.
