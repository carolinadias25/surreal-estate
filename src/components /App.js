/* eslint-disable import/order */
/* eslint-disable quotes */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import NavBar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App" data-testid="app">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
