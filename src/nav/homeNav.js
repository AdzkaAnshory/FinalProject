import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyTiket from '../page/mytiket';
import BeliTIket from '../page/beli';
import Dashboard from '../page/dash';

class HomeNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          asal : "",
          tujuan : "",
          jmlTiket : "",
         }
    }

    setStatusLogin = () => {
        const setStatusLogin = this.props.setStatusLogin

        setStatusLogin("logout");
    }

    setFilter = (asal, tujuan, jmlTiket) => {
      this.setState({
        asal : asal,
        tujuan : tujuan,
        jmlTiket : jmlTiket
      })
    }

    render() { 
        return ( 
          <Router>
          <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/dash"}>Naik Kereta</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/dash"}>Beli Tiket</Link>
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
                    <Dashboard setFilter={this.setFilter}/>
                  </Route>
                  <Route path="/dash" >
                    <Dashboard setFilter={this.setFilter}/>
                  </Route>
                  <Route path="/beli" >
                    <BeliTIket asal={this.state.asal} tujuan={this.state.tujuan} jmlTiket={this.state.jmlTiket}/>
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