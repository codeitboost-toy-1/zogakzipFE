import React from "react";
import ReactDOM from "react-dom/client"; // 'react-dom/client'에서 가져옵니다.
import App from "./App.jsx";
import "./index.css";

// createRoot를 사용하여 루트 렌더링
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
