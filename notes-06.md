# Architecture Overview & React Rendering Concepts

## Monolith Architecture
- **Earlier used**
- All services are part of **one single project**
- Tightly coupled
- Harder to scale and maintain as the application grows

---

## Microservices Architecture
- **Widely used nowadays**
- Application is split into **different services for different jobs**
- Follows:
  - **Separation of Concerns**
  - **Single Responsibility Principle**
- Each service:
  - Is independent
  - Can be deployed separately
- Services **communicate with each other** (usually via APIs)

---

## How a React Application Talks to Microservices
React communicates with microservices by making **backend API calls** (HTTP requests).

### Common Data Loading Patterns

#### 1. Load → API Call → Render
- Website loads
- API call is made
- UI renders only after data arrives
- ❌ Poor UX (user waits on a blank screen)

#### 2. Load → Render Skeleton → API Call → Re-render with Data (Recommended)
- Website loads
- Initial UI renders immediately
- Shows:
  - Loading indicator
  - Shimmer UI
  - Skeleton UI (resembles actual UI)
- API call is made in the background
- UI re-renders when data arrives
- ✅ Better UX (User Experience)

React is very efficient at handling **render cycles**, which makes this pattern smooth.

---

## `useEffect` Hook
- Used to perform **side effects** (e.g., API calls)

### Lifecycle:
1. Component renders for the first time
2. `useEffect` is executed after the render
3. State updates inside `useEffect` trigger a re-render

---

## Loading & Shimmer UI
- UI appears immediately
- Shows:
  - `Loading...`
  - Shimmer / Skeleton UI
- Data loads in the background
- UI updates with real data
- Improves perceived performance and UX

---

## Conditional Rendering
- Rendering UI **based on conditions**
- Example use cases:
  - Show loader when data is not available
  - Show content when data is loaded

---

## JavaScript Variables vs React State

### Normal JavaScript Variables
- Value updates on events
- ❌ UI does **not** re-render
- React does not track changes

### Local State Variables (`useState`)
- Value updates trigger:
  - Component re-render
  - UI refresh with latest value
- ✅ React tracks state changes

---

## How `useState` Works Internally
- Updating state:
  - Re-renders the component
  - Creates new constants with updated values
- React updates **only what is necessary** in the DOM
- Efficient and optimized updates

---

## Search Filter Example
### Problem
- Search input tied to a default value
- Typing does not update UI
- Input appears empty even when typing

### Solution
- Use:
  - `onChange` event handler
  - `setSearchText` state updater
- Bind input value to state

---

## Important Rendering Concept
- **Whenever a state variable updates:**
  - React triggers a **reconciliation cycle**
  - Component re-renders
- This is expected and optimized behavior

> ⚠️ Even typing in a search box causes the component to re-render — React handles this efficiently.

---

## Summary
- Microservices enable scalability and separation
- React communicates with microservices via APIs
- `useEffect` handles side effects like data fetching
- State updates trigger re-renders
- Skeleton UI + conditional rendering = better UX
- React’s reconciliation makes frequent re-renders fast and efficient