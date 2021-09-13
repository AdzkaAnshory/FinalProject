import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Login from '../page/login'; 
import Register from '../page/register';
import Home from '../page/home';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderPage =() => {
        return  <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path="/sign-in" component={Login} />
                    <Route path="/sign-up" component={Register} />
                    <Route path="/home" component={Home} />
                </Switch>
    }

    render() { 
        return ( 
            this.renderPage()
         );
    }
}
 
export default Body;