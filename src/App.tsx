import React from "react";
import { createRoot } from "react-dom/client";

const App = () => (
  <div>
    <h1>Doism</h1>
  </div>
);

function render() {
  const container = document.getElementById("root");
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
}

render();
