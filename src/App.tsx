import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";
import router from "./routes";
import theme from "./style/theme";
import "./i18n/i18n";
const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

function render() {
  const container = document.getElementById("root");
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
}

render();
