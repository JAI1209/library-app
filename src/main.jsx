// Entry point - wraps App with Redux Provider
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Redux Provider - makes store available to all components */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);