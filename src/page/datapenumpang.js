import React, { Component } from 'react';
import Input from '../component/input';
import Label from '../component/label';
import Button from '../component/button';
import './style.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class DataPenumpang extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            namaPenumpang: "",
            umur : "",
            no_kursi: "",
            tiket : []
         }
    }

    componentDidMount = () => {
        const tiket = this.props.tiket
        console.log();
        this.setState({
            tiket
        })
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    setInvoice = () => {
        const {tiket, namaPenumpang, umur, no_kursi} = this.state
        this.props.invoice(tiket, namaPenumpang, umur, no_kursi)
    }

    render() { 
        const tiket = this.state.tiket
        return ( 
            <>
                <div className="outer-home">
                    <div className="inner-home">
                        <div style={{textAlign : "center"}}>
                            <h3>Data Penumpang</h3>
                        </div>
                        <div className="section-one" id="formdata">
                        <div className="form-group pad">
                            <Label label={"Nama Penumpang"}/>
                            <Input type={"text"} nameInput="namaPenumpang" className={"form-control radius"} onChangeEvent={this.setValue} placeholder={"Nama Penumpang"} />
                        </div>

                        <div className="form-group pad">
                            <Label label={"Umur"}/>
                            <Input type={"text"} nameInput="umur" className={"form-control radius"} onChangeEvent={this.setValue} placeholder={"Umur"} />
                        </div>

                        <div className="form-group pad">
                            <Label label={"Kereta"}/>
                            <Input type={"text"} className={"form-control radius"} placeholder={tiket.nama +" - "+ tiket.kelas} disabled={"disabled"}/>
                        </div>

                        <div className="form-group pad">
                            <Label label={"Nomor Kursi"}/>
                            <select  name="no_kursi" className={"form-control radius"} onChange={this.setValue}>
                                <option>Nomor Kursi</option>
                                <option>{tiket.kelas+" 1-1"}</option>
                                <option>{tiket.kelas+" 1-2"}</option>
                                <option>{tiket.kelas+" 1-3"}</option>
                                <option>{tiket.kelas+" 1-4"}</option>
                                <option>{tiket.kelas+" 1-5"}</option> 
                                <option>{tiket.kelas+" 2-1"}</option>
                                <option>{tiket.kelas+" 2-2"}</option>
                                <option>{tiket.kelas+" 2-3"}</option>
                                <option>{tiket.kelas+" 2-4"}</option>
                                <option>{tiket.kelas+" 2-5"}</option> 
                                <option>{tiket.kelas+" 3-1"}</option>
                                <option>{tiket.kelas+" 3-2"}</option>
                                <option>{tiket.kelas+" 3-3"}</option>
                                <option>{tiket.kelas+" 3-4"}</option>
                                <option>{tiket.kelas+" 3-5"}</option>
                            </select>
                        </div>

                        <div className="form-group pad">
                            <Link to="/pembayaran"> 
                                <Button type={"submit"} className={"btn btn-success btn-lg btn-block radius"} onClick={this.setInvoice} nameButton={"Lanjut"}/>
                            </Link>
                        </div>

                        </div>
                    
                    </div>
                </div>
            </>
        );
    }
}
 

const mapDispatchToProps = dispatch => ({
    invoice: (tiket, namaPenumpang, umur, no_kursi) => dispatch({ type: "Proses_Pembayaran", payload: { tiket, namaPenumpang, umur, no_kursi } })
})

export default connect(null, mapDispatchToProps)(DataPenumpang);