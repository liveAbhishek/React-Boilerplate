import React, { Component } from 'react';
// import { HashRouter } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/home2">
              <div>
                home2
              </div>
            </Route>
            <Route exact path="/">
              <div>
                Home
              </div>
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;