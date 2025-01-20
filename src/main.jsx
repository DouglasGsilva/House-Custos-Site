// REACT HOOKS E REACT ROUTER DOM HOOKS
import React from "react";
import ReactDOM from "react-dom/client";
// IMPORT DE COMPONENTES
import App from "./App.jsx";
import { GlobalStyle } from "./Components/GlobalStyle.jsx";
// SCHEMAS,SERVICES,CONTEXTS,HELPERS E DATA
import UserProvider from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyle />
      <App />
    </UserProvider>
  </React.StrictMode>
);
