import React, { Component } from 'react';
import HomeNavbar from '../nav/homeNav';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    
    render() { 
        const setStatusLogin = this.props.setStatusLogin
        return ( 
            <>
                <div>
                    <HomeNavbar setStatusLogin={setStatusLogin}/>
                </div>
            </>
         );
    }
}
 
export default Home;