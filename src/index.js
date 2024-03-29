import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Waitlist from "./pages/Waitlist";
import Home from "./pages/Home";
import About from "./pages/About";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev--m3wikst.us.auth0.com"
    clientId="5n1Xl4aH9SlD6xlywKRNFQ8SfXSPLcbX"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
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
    </BrowserRouter>
  </Auth0Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
