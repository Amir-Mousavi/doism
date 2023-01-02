import React from "react";
import { createRoot } from "react-dom/client";

import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Doism</h1>
    </div>
  </Provider>
);

function render() {
  const container = document.getElementById("root");
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
}

render();
