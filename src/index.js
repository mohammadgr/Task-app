import { createRoot } from "react-dom/client";
import AuthContextProvider from "./component/context/auth-context";

import App from "./App";

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
