import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from '../page/login'; 
import Register from '../page/register';

class LoginNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      const setStatusLogin = this.props.setStatusLogin
        return ( 
          <Router>
          <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/log-in"}>Naik Kereta</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/log-in"}>Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/register"}>Register</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="outer">
              <div className="inner">
                <Switch>
                  <Route exact path='/'>
                    <Login setStatusLogin={setStatusLogin}/>
                  </Route>
                  <Route path="/log-in" > 
                    <Login setStatusLogin={setStatusLogin}/>
                  </Route>
                  <Route path="/register" component={Register} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
         );
    }
}
 
export default LoginNavbar;