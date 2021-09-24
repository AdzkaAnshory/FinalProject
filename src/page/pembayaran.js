import React, { Component } from 'react';
import Button from '../component/button';
import './style.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Pembayaran extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            namaPenumpang: "",
            umur : "",
            no_kursi: "",
            tiket : [],
            statusPembayaran : ""
         }
    }

    componentDidMount = () => {
        const {tiket, namaPenumpang, umur, no_kursi, statusPembayaran} = this.props
        console.log();
        this.setState({
            tiket : tiket,
            namaPenumpang: namaPenumpang,
            umur : umur,
            no_kursi: no_kursi,
            statusPembayaran : statusPembayaran
        })
    }


    renderPage = () => {
        const {tiket, namaPenumpang, umur, no_kursi, statusPembayaran} = this.state
        if(tiket !== "")
            return (
                    <tr>
                        <td>
                            <h4>{tiket.nama}</h4>
                            <h6>{tiket.kelas}</h6>  
                        </td>
                        <td>{tiket.tgl_pergi}</td>
                        <td>
                                <td><h6>Berangkat</h6>
                                {tiket.jam_pergi}</td>
                                <td><h6>Sampai</h6>
                                {tiket.jam_sampai}</td>
                                <td><h6>perjalanan</h6>
                                {tiket.lama_perjalanan}</td>
                               
                        </td>
                       
                        <td>{tiket.asal}</td>
                        <td>{tiket.tujuan}</td>
                        <td>{no_kursi}</td>
                        <td>{statusPembayaran}</td>
                        <td>
                        <Link to="/data">
                            <Button type={"submit"} className={"btn btn-success radius"} onClick={this.beliTiket} nameButton={"Detail"}/>
                        </Link>
                        </td>
                        <td>
                        <Link to="/data">
                            <Button type={"submit"} className={"btn btn-success radius"} onClick={this.beliTiket} nameButton={"Confirm"}/>
                        </Link>
                        </td>
                    </tr >
                )
        
            return alert("Belum Ada Tiket Yang Anda Beli")
            
        
        
    }  

    render() { 
        return ( 
            <>
                <div className="outer-home">
                    <div className="inner-home">
                        <div style={{textAlign : "center"}}>
                            <h3>Tiket Saya</h3>
                        </div>
                        <div className={"section-two"}>
                            <table cellPadding="10px" >
                                <thead>
                                    <tr>
                                        <th>Kereta</th>
                                        <th>Keberangkatan</th>
                                        <th>Jam</th>
                                        <th>Asal</th>
                                        <th>Tujuan</th>
                                        <th>No Kursi</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderPage()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    tiket : state.Auth.tiket,
    namaPenumpang : state.Auth.namaPenumpang,
    umur : state.Auth.umur,
    no_kursi : state.Auth.no_kursi, 
    statusPembayaran : state.Auth.statusPembayaran
})

const mapDispatchToProps = dispatch => ({
    invoice: (tiket, namaPenumpang, umur, no_kursi) => dispatch({ type: "Proses_Pembayaran", payload: { tiket, namaPenumpang, umur, no_kursi } })
})

export default connect(mapStateToProps, mapDispatchToProps)(Pembayaran);