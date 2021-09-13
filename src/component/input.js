import React, { Component } from 'react';


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { type, className, placeholder, onChangeEvent, nameInput} = this.props
        return ( 
            <>
                <input type={type} name={nameInput} className={className} onChange={onChangeEvent} placeholder={placeholder} />
            </>
         );
    }
}
 
export default Input;