# Emmet
Emmet helps you write HTML/CSS quickly by expanding shorthand notations into complete code snippets.

---

# How to Use React?

There are two primary ways to use React:

---

## 1. Using a CDN (Content Delivery Network)

- React libraries can be loaded directly from **CDN links**.  
- `crossorigin`: Needed when requesting files from a different origin (e.g., CDN servers).  
- **React (`react.js`)**: Core React library — contains the algorithms and logic.  
- **React-DOM (`react-dom.js`)**: Handles DOM rendering and updates.  

👉 React is split into **two files** because React can run on multiple platforms (web, mobile, VR).  
For **web development**, we specifically use **React-DOM**.

---

### Why React?
- The **most expensive operations** in the browser are DOM node/tree manipulations.  
- React optimizes this by doing DOM operations with JavaScript first.  

**Example flow:**
1. `React.createElement(tagName, attributes, children)`  
   - Takes `tagName`, `attributes`, and `children` (single or array).  
   - Returns a **ReactElement (object)**, not an HTML tag.  
2. React renders that object into **real HTML** the browser understands.  
3. Props = attributes + children.  

---

### Important Notes
- **Order of imports matters!** Always load React before your React code.  
- The `crossorigin` attribute is required only when loading React from an external CDN.  
- **Production vs Development builds**:  
  - Development → larger, includes extra warnings & debugging.  
  - Production → smaller, optimized for speed.  

---

### Rendering
- React **renders** content into a `root` tag (or any container you specify).  
- Anything inside that tag will be **replaced** by React.  

**Why replaced?**
1. Browser parses HTML normally.  
2. Prints whatever is inside the tag.  
3. React loads.  
4. React mounts into the container and **takes control**.  

---

### React Scope
- React works **only inside the root container** you specify.  
- You can apply React to just a small part of a project.  
- That’s why React is a **library**, not a full **framework** (which usually provides everything out of the box).  

---

## 2. Using a Local Development Setup

- Tools like **Create React App**, **Vite**, or bundlers like **Webpack** are used.  
- This gives you:  
  - Local development server  
  - JSX compilation (via Babel)  
  - Modern build tools  
- (Coming soon in notes 🚀)
