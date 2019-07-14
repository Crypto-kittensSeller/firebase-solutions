import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Register from './components/Register';
import Accounts from './components/Accounts';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/accounts' component={Accounts} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
