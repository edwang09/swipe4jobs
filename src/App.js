import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./layouts/header"
import About from "./pages/about"
function App() {
  return (
    <div className="App">
    <Router>
        <Header/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
