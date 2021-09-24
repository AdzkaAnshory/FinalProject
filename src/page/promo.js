import React, { Component } from 'react';
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import promo1 from '../img/promo1.jpg'
import promo2 from '../img/promo2.jpg'
import promo3 from '../img/promo3.jpg'
import './style.css'


class Promo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
        <div className="slide-container">
          <Fade>
            <div className="each-fade">
              <div className="image-container">
                <img className="promo" src={promo1} alt="Promo 1"/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img className="promo" src={promo2} alt="Promo 2"/>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img className="promo" src={promo3} alt="Promo 3"/>
              </div>
            </div>
          </Fade>
        </div> 
      );
    }
}
 
export default Promo;
