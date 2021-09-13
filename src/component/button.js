import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { type, className, onClick, nameButton } = this.props
        return ( 
            <>
                <button type={type} className={className} onClick={onClick}>{nameButton}</button>
            </>
         );
    }
}
 
export default Button;