import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ReactDOM from 'react-dom';
import './index.css';

import Homepage from './pages/Homepage.tsx'

ReactDOM.render(
  <React.StrictMode>
    {/* <Router>
      <Switch>
        <Route path="/">
        </Route>
      </Switch>
    </Router> */}
    <Homepage/>
  </React.StrictMode>,
  document.getElementById('root')
);
