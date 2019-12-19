import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from './containers/login';
import Signup from './containers/sign-up';
import Dashboard from './containers/dashboard';

function App() {
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={Signup} />
            <Route
              path="/dashboard"
              render={props =>
                localStorage.getItem('user') ? (
                  <Dashboard {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route path="/" component={Login} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
