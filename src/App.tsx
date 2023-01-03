import React from "react";
import { createRoot } from "react-dom/client";

import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <h1>Doism</h1>
      </div>
    </PersistGate>
  </Provider>
);

function render() {
  const container = document.getElementById("root");
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
}

render();
