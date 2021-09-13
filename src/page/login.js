import React, { Component } from 'react';
import Label from '../component/label';
import Input from '../component/input';
import Button from '../component/button'
import './style.css';
import axios from 'axios';
import { Route, Link, Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users : [],
            email : "",
            password: "",
         }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/KeretaApi/users')
            .then(res => {
                const users = res.data;
                console.log(users)
                this.setState({ users })
            })
            .catch(err => {
                console.log("error :",err)
            })
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    loginCheck = () => {
        const email = this.state.email
        const password = this.state.password
        const userss = this.state.users
        const setStatusLogin = this.props.setStatusLogin

        console.log(email);
        console.log(password);
        console.log(this.state.users[0].username);
        console.log(this.state.users[0].password);

        for(let i = 0; i < this.state.users.length;i++){
            if(userss[i].username === email && userss[i].password === password){
                alert(""+email+" berhasil login")
                setStatusLogin("loged");
                return <Redirect to="/home" ></Redirect>
            }
        }

        return alert("Gagal Login")

    }

    render() { 
        return ( 
            <>
            <Route>
            <form>
                <h3>Log in</h3>

                <div className="form-group">
                    <Label label={"Email"}/>
                    <Input type={"email"} nameInput="email" className={"form-control radius"} onChangeEvent={this.setValue} placeholder={"Enter email"}/>
                </div>

                <div className="form-group">
                    <Label label={"Password"}/>
                    <Input type={"password"} nameInput="password" className={"form-control radius"} onChangeEvent={this.setValue} placeholder={"Enter password"}/>
                </div>
                <hr/>
                <div className="form-group">
                    <Button type={"submit"} className={"btn btn-dark btn-lg btn-block radius"} onClick={this.loginCheck} nameButton={"Login"}/>
                </div>
                <p className="forgot-password text-right">
                    Forgot <Link to="/log-in">password?</Link>
                </p>
            </form>
            </Route>
            </>

         );
    }
}
 
export default Login;