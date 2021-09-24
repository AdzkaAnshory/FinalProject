import React, { Component } from 'react';
import Input from '../component/input';
import Label from '../component/label';
import Button from '../component/button';
import './style.css'
import { Link } from 'react-router-dom';
import Promo from './promo';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            asal : "",
            tujuan : "",
            jmlTiket : "",
         }

    }

    
    filter = () => {
        const { asal, tujuan, jmlTiket } = this.state
        const setFilter = this.props.setFilter
        setFilter(asal, tujuan, jmlTiket)
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    renderPage = () => {
        return(
        <div className="outer-home">
        <div className="inner-home">
            <Promo />
            <div>
                <h3>Beli Tiket</h3>
            </div>
            <div className="section-one">
              <div className="form-group pad">
                  <Label label={"Asal"}/>
                  <select  name="asal" className={"form-control radius"} onChange={this.setValue}>
                      <option>Pilih Asal</option>
                      <option>Bandung</option>
                      <option>Cirebon</option>
                      <option>Surabaya</option>
                      <option>Yogyakarta</option>
                  </select>
                  {/* <Input type={"text"}  placeholder="Asal" /> */}
              </div>

              <div className="form-group pad">
                  <Label label={"Tujuan"}/>
                  <select  name="tujuan" className={"form-control radius"} onChange={this.setValue} >
                      <option>Pilih Asal</option>
                      <option>Bandung</option>
                      <option>Cirebon</option>
                      <option>Surabaya</option>
                      <option>Yogyakarta</option>
                  </select>
                  {/* <Input type={"text"} nameInput="tujuan" className={"form-control radius"} onChangeEvent={this.setValue} placeholder={"Tujuan"} /> */}
              </div>

              <div className="form-group pad">
                  <Label label={"Jumlah Tiket"}/>
                  
                  <Input type={"number"} min={1} nameInput="jmlTiket" className={"form-control radius"} onChangeEvent={this.setValue} placeholder={"1"} />
              </div>

              <div className="form-group pad">
                  <Link to="/beli"> 
                    <Button type={"submit"} className={"btn btn-success btn-lg btn-block radius"} onClick={this.filter} nameButton={"Lanjut"}/>
                  </Link>
              </div>

            </div>
          
        </div>
      </div>)
        
    }

    render() { 
        return ( 
            <>
                {this.renderPage()}
            </>
         );
    }
}
 
export default Dashboard;

