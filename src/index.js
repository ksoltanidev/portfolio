import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ReactDOM from 'react-dom';
import './index.css';

import Page from './pages/Page.tsx'

ReactDOM.render(
  <React.StrictMode>
    {/* <Router>
      <Switch>
        <Route path="/">
        </Route>
      </Switch>
    </Router> */}
    <Page/>
  </React.StrictMode>,
  document.getElementById('root')
);
