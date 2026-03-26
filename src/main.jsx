import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

let faviconLink = document.querySelector("link[rel~='icon']");
if (!faviconLink) {
  faviconLink = document.createElement("link");
  faviconLink.rel = "icon";
  document.head.appendChild(faviconLink);
}
faviconLink.href = `/Images/favicon.ico?v=${new Date().getTime()}`;
faviconLink.type = "image/x-icon";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);