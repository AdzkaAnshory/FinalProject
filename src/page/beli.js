import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../component/button';
import './style.css'

class BeliTIket extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterJadwal : [],
            err : "",
            asal : "",
            tujuan : "",
         }
    }

    componentDidMount = () => {
        const { asal, tujuan} = this.props
        this.setState({
            asal : asal,
            tujuan : tujuan
        })
        axios.get('http://localhost:8081/KeretaApi/kereta/'+asal+'/'+tujuan+'')
        .then(res => {
            const filterJadwal = res.data;
            console.log("filterJadwal" ,filterJadwal)
            this.setState({ filterJadwal })
        })
        .catch(err => {
            this.setState({
                err
            })
            console.log("error : ", err)
        })
    }

    beliTiket = () => {

    }

    renderPage = () => {
        const {filterJadwal , err, asal, tujuan} = this.state
        if(err !== ""){
            return alert("Jadwal Dengan Asal " +asal+ " dan Tujuan " +tujuan+ " Tidak Ditemukan!!")
            
        }
        return (filterJadwal.map((filter, idx) => {
            return (
                    <tr key={idx}>
                        <td>
                            <h4>{filter.nama}</h4>
                            <h6>{filter.kelas}</h6>  
                        </td>
                        <td>{filter.tgl_pergi}</td>
                        <td>
                                <td><h6>Berangkat</h6>
                                {filter.jam_pergi}</td>
                                <td><h6>Sampai</h6>
                                {filter.jam_sampai}</td>
                                <td><h6>perjalanan</h6>
                                {filter.lama_perjalanan}</td>
                               
                        </td>
                       
                        <td>{filter.asal}</td>
                        <td>{filter.tujuan}</td>
                        <td>{filter.harga}</td>
                        <td>
                            <Button type={"submit"} className={"btn btn-success btn-lg btn-block radius"} onClick={this.beliTiket} nameButton={"Beli Tiket"}/>
                        </td>
                    </tr >
                )
            })
        )
    }   

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() { 
        return ( 
            <>
            <div className="outer-home">
              <div className="inner-home">
                    <Link to="/dash">
                        <Button  className={"btn btn-success btn-lg btn-block radius"} nameButton={"Kembali"}></Button>
                    </Link>
                  <div className={"section-two"}>
                    <table cellPadding="10px" >
                        <thead>
                            <tr>
                                <th>Kereta</th>
                                <th>Keberangkatan</th>
                                <th>Jam</th>
                                <th>Asal</th>
                                <th>Tujuan</th>
                                <th>Harga</th>
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
 
    export default BeliTIket;
    <>
</>
