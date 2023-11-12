import React, {} from "react";
import {Link} from "react-router-dom";
import './style.css';
import {Badge, Button,  Container, InputGroup,  FormControl} from "react-bootstrap";


export const GirisEkran = () => {


    return (
    <Container >

        <div className="playScreen mt-5 ">
            <div className="playDiv">
                <h1><Badge className="align-items-center  justify-content-center d-flex" bg="secondary" style={{width:400,height:100}}> Sayı Tahmin Oyunu</Badge></h1>
                <div className="mt-5">
                    <InputGroup style={{width:400, height:100}} className="mb-3 ">
                        <InputGroup.Text style={{color:"rgb(255,255,255)",backgroundColor:"#6b747c",fontSize:20,borderColor:"#6B747CFF"}} >Oyuncu Adı:</InputGroup.Text>
                        <FormControl  style={{color:"rgb(255,255,255)",backgroundColor:"rgba(84,3,3,0.68)",fontSize:35, boxShadow:"none",borderColor:"#6B747CFF"}} aria-label="First name"/>
                    </InputGroup>
                    <div className="mt-5 align-items-center  justify-content-center d-flex">

                        <Button className="mt-3 align-items-center  justify-content-center d-flex" variant="success" style={{fontSize: 50, width: 180}}><Link
                            style={{textDecoration: "none", color: "white" ,fontSize: 50, width: 400}} to="/ModSecim">OYNA</Link></Button>
                    </div>
                </div>
            </div>
        </div>


    </Container>
    );
}
