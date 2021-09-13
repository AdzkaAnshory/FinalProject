import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Beranda from '../page/beranda';
import MyTiket from '../page/mytiket';

class HomeNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    setStatusLogin = () => {
        const setStatusLogin = this.props.setStatusLogin

        setStatusLogin("logout");
    }

    render() { 
        return ( 
          <Router>
          <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/home"}>Naik Kereta</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/home"}>Beli Tiket</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/mytiket"}>Tiket Saya</Link>
                    </li>
                    <li>
                      <Link className="nav-link" to={"/log-in"} onClick={this.setStatusLogin}>Logout</Link>  
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="">
              <div className="">
                <Switch>
                    <Route exact path="/" >
                    <Beranda />
                  </Route>
                  <Route path="/home" >
                    <Beranda />
                  </Route>
                  <Route path="/mytiket">
                    <MyTiket />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
         );
    }
}
 
export default HomeNavbar;