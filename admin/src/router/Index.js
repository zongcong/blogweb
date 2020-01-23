import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../style/Comm.less';
import App from '../App';

function Routers() {
  return (
    <Router>
      <Route path='/' component={App}/>
    </Router>
  )
}

export default Routers;
