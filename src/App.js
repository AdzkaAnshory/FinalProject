import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginNavbar from './nav/loginNav';
import Home from './page/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loginStatus: "",
     }
  }

  setStatusLogin = status => {
    this.setState({ 
      loginStatus : status
    })
  }

  renderedPage = () => {

    if(this.state.loginStatus === "loged")
      return <Home setStatusLogin={this.setStatusLogin}/>

    return <LoginNavbar setStatusLogin={this.setStatusLogin}/>

  }

  render() { 
    return ( 
      <>
       {this.renderedPage()}
      </>
     );
  }
}
 
export default App;