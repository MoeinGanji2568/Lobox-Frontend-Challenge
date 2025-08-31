import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
);
