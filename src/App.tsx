import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BaseLayout from "./Layouts/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routers/MainRouter";
import Routers from "./routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
