import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Waitlist from "./pages/Waitlist";
import Home from "./pages/Home";
import Technology from "./pages/Technology";

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/technology" element={<Technology />} />
        <Route
          path="*"
          element={
            <div style={{ padding: "150px", marginTop: "250px" }}>
              <p>There's nothing here!</p>
            </div>
          }
        />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
