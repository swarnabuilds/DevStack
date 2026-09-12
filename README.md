Name of project : DevStack

=======Description:=======
DevStack is a responsive web application that enables developers to build and manage a custom technology stack tailored for their projects, incorporating frontend, backend, database, and tooling options.


========Technology use :========
- React.js
- Tailwind CSS, DaisyUI
- TypeScript / JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (build tool)


======project features========
1) Interactive Stack Builder: Real-time side panel that updates instantly when adding or removing technologies, complete with a "Remove All" option.

2) Smart UI Feedback: Conditional button states ("Add to Stack" vs. "Added to Stack") paired with react-toastify popups to prevent duplicate entries and give immediate confirmation.

3) Polished Responsive Design: Clean 12-column grid layout built with Tailwind CSS, glassmorphic sticky navigation, and styled cards showing difficulty tags and star ratings.


===================(write the answers)================
1) JSX is a syntax extension for JavaScript that lets you write HTML-like markup directly inside JavaScript files.

2) Props: Passed into a component from its parent (like function parameters). They are read-only and cannot be modified by the component receiving them.
State: Managed directly within the component (like local variables). State can be updated using its updater function triggering a component re-render when changed.

3) The useState hook is a built-in React Hook that allows function components to add, track, and manage local state. When the state updates, React automatically re-renders the component to reflect the new data in the UI.

In the DevStack project, useState is used in the main app container (App.tsx / technoligies.tsx) to manage the array of selected technologies:

4) The useEffect hook is a built-in React Hook that lets you execute side effects in function components—such as fetching data, directly updating the DOM, or setting up timers—after React renders the component.

5) the unique key prop helps React track each list item so it knows exactly which items changed, were added, or were removed.

Why it is needed:

- Fast Performance: Enables React's diffing algorithm to update only changed items instead of re-rendering the entire list.

- Prevents UI Bugs: Keeps component state (like inputs or toggles) attached to the correct item when reordering or deleting.

- Reliable Tracking: Using a unique ID (like key={tech.id}) gives React a stable reference for every DOM node.

6) Conditional rendering in React means displaying different UI elements or components based on certain conditions (true/false states), similar to how if-else statements work in standard JavaScript. EXample:
<button disabled={isSelected}>
  {isSelected ? " Added to Stack" : "Add to Stack"}
</button>

7) Parent → Child (Passing Data): The parent passes data down as props (like arguments to a function). The child receives and reads them.

Child → Parent (Sending Data Back): The parent passes a callback function down as a prop. The child calls that function and passes its data back as an argument when an event happens (like a button click). 