import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import App from "./App/App";
import reportWebVitals from "./Vitals/reportWebVitals";
import AppWrapper from "./Components/AppWrapper/AppWrapper";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
