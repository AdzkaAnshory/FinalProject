import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { dataId, type, className, onClick, nameButton } = this.props
        return ( 
            <>
                <button data-id={dataId} type={type} className={className} onClick={onClick}>{nameButton}</button>
            </>
         );
    }
}
 
export default Button;