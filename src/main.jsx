import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserRoleProvider } from "./context/UserRoleContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserRoleProvider>
        <App />
      </UserRoleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
