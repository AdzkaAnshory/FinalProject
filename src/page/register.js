import React, { Component } from 'react';
import Label from '../component/label';
import Input from '../component/input';
import Button from '../component/button';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import './style.css';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    addNewUser = () => {

    }

    render() { 
        return ( 
            <>
            <Route>
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <Label label={"Full Name"}/>
                    <Input type={"text"} className={"form-control radius"} placeholder="Full name" />
                </div>

                <div className="form-group">
                    <Label label={"Phone"}/>
                    <Input type={"text"} className={"form-control radius"} placeholder={"Phone number"} />
                </div>

                <div className="form-group">
                    <Label label={"Email"}/>
                    <Input type={"email"} className={"form-control radius"} placeholder={"Enter email"}/>
                </div>

                <div className="form-group">
                    <Label label={"Password"}/>
                    <Input type={"password"} className={"form-control radius"} placeholder={"Enter password"} />
                </div>
                <hr/>
                <Button type={"submit"} className={"btn btn-dark btn-lg btn-block radius"} onClick={this.addNewUser} nameButton={"Register"} />
                <p className="forgot-password text-right">
                    Already registered <Link to="/log-in">log in?</Link> 
                </p>
            </form>
            </Route>
            </>
         );
    }
}
 
export default Register;