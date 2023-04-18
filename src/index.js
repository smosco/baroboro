import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const JAVASCRIPT_KEY = process.env.REACT_APP_KAKAO_JAVASCRIPT_API_KEY;
window.Kakao.init(JAVASCRIPT_KEY);
window.Kakao.isInitialized();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
