### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It lets us write HTML-like markup directly inside JavaScript files. It makes writing and understanding component UI structures much easier and visual. React transforms into standard browser-readable JavaScript elements.


### 2. What is the difference between props and state?
* **Props (Properties):** Props are Read-only data passed down from a parent component to a child component. The receiving child cannot edit props directly.
* **State:** States are Internal data managed within a component that can change over time based on user interactions.


### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to store, track, and update dynamic data. In this project:
* In `App.jsx`, it is used to hold the fetched technologies list (`technologies`), track added items (`selectedStack`), and control the data loading spinner (`loading`).
* In `Navbar.jsx`, it is used to toggle the mobile hamburger menu open and closed.


### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` handles side effects in React components, such as data fetching, subscriptions, and DOM updates. It was used in `App.jsx` with an empty dependency array `[]` to execute the `fetch('/technologies.json')` call once when the page initially loads, storing the data in state and turning off the loading indicator.


### 5. Why does every item in a .map() list need a unique key prop?
React relies on the unique `key` prop during its Virtual DOM reconciliation process. It helps React identify exactly which items have been added, updated, or removed, preventing unnecessary re-renders of the entire list and maintaining optimal app performance.


### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI elements based on specific conditions or truthy/falsy expressions. 

**Example from `YourStack.jsx`:**
```jsx
{count === 0 ? (
  <div className="border border-dashed border-slate-200 rounded-2xl py-10 my-4 flex items-center justify-center">
    <p className="text-slate-400 text-xs font-medium">Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-2.5 my-4">
    {selectedStack.map((item) => (
      <StackItem item="{item}" key="{item.id}"/>
    ))}
  </div>
)}
```


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: Data is passed downward using attributes (props). For example, <TechCard tech={tech} />.

Child to Parent: The parent passes down a callback function via props (such as onAdd={handleAddToStack}). The child triggers that function on an event (like onClick={() => onAdd(tech)}), sending data or identifiers back up to the parent component.