
import React from "react";
import ReactDOM from "react-dom";

import "./components/common.css";
import Home from './components/home';
import createBoard from './components/createBoard';

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Route path ="/" exact component={Home} />
        <Route path = "/createBoard" exact component={createBoard} />        
      </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
