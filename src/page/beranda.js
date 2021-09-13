import axios from 'axios';
import React, { Component } from 'react';
import Input from '../component/input';
import Label from '../component/label';
import Button from '../component/button';
import './style.css'

class Beranda extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jadwal : [],
            asal : "",
            tujuan : "",
            filterJadwal : [],
         }
    }


    componentDidMount() {
        axios.get('http://localhost:8081/KeretaApi/kereta')
            .then(res => {
                const jadwal = res.data;
                console.log(jadwal)
                this.setState({ jadwal })
            })
            .catch(err => {
                console.log("error :",err)
            })
    }

    filterJadwal = () => {
        const { asal, tujuan } = this.state
        axios.get('http://localhost:8081/KeretaApi/kereta/'+asal+'/'+tujuan+'')
        .then(res => {
            const filterJadwal = res.data;
            console.log("filterJadwal" ,filterJadwal)
            this.setState({ filterJadwal })
        })
        .catch(err => {
            console.log("error : ", err)
        })
    }

    beliTiket = () => {

    }

    renderPage = () => {
        const jadwalKreta = this.state.jadwal
        const { asal, tujuan, filterJadwal} = this.state

        if(asal !== "" && tujuan !== "")
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
            
        return (
            jadwalKreta.map((kereta, idx) => {
                return (
                    <tr key={idx}>
                        <td>
                            <h4>{kereta.nama}</h4>
                            <h6>{kereta.kelas}</h6>  
                        </td>
                        <td>{kereta.tgl_pergi}</td>
                        <td>
                                <td><h6>Berangkat</h6>
                                {kereta.jam_pergi}</td>
                                <td><h6>Sampai</h6>
                                {kereta.jam_sampai}</td>
                                <td><h6>perjalanan</h6>
                                {kereta.lama_perjalanan}</td>
                               
                        </td>
                       
                        <td>{kereta.asal}</td>
                        <td>{kereta.tujuan}</td>
                        <td>{kereta.harga}</td>
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
                  <div>
                      <h3>Beli Tiket</h3>
                  </div>
                  <div className={"section-one"}>
                    <div className="form-group pad">
                        <Label label={"Asal"}/>
                        <Input type={"text"} nameInput="asal" className={"form-control radius"} onChangeEvent={this.setValue} placeholder="Asal" />
                    </div>

                    <div className="form-group pad">
                        <Label label={"Tujuan"}/>
                        <Input type={"text"} nameInput="tujuan" className={"form-control radius"} onChangeEvent={this.setValue} placeholder={"Tujuan"} />
                    </div>

                    <div className="form-group pad">
                        <Button type={"submit"} className={"btn btn-success btn-lg btn-block radius"} onClick={this.filterJadwal} nameButton={"Search"}/>
                    </div>

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
 
    export default Beranda;
    <>
</>
