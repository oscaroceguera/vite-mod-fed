import React from "react";
import ReactDOM from "react-dom";

import ButtonModule from "remoteApp/Button";
import "./index.css";

const Button = ButtonModule.default;

const App = () => (
  <div className="container">
    <Button />
    <div>Name: wp-host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
