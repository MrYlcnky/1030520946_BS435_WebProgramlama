import React, {createContext, useState, useContext} from "react";
import {Badge, Button, Container, FormControl, FormSelect, InputGroup} from "react-bootstrap";
import {Link} from "react-router-dom";



export const OyunModSecim = () => {
    return (
        <Container>
            <div className="playScreen mt-5 ">
                <div className="playDiv">
                    <h1><Badge className="align-items-center  justify-content-center d-flex" bg="secondary"
                               style={{width: 400, height: 100}}> MODLAR</Badge></h1>
                    <div className="mt-5">
                        <FormSelect size="lg" style={{
                            boxShadow: "none",
                            borderColor: "#6B747CFF",
                            color: "rgb(255,255,255)",
                            backgroundColor: "#6b747c"
                        }}>
                            <option>OYUN MODU SEÇİN</option>
                            <option value="1" > MOD 1</option>
                            <option value="2">MOD 2</option>
                            <option value="3">MOD 3</option>
                        </FormSelect>
                        <Button className="mt-5" variant="success" style={{fontSize: 50, width: 400}}><Link
                            style={{textDecoration: "none", color: "white"}} to="/oyunEkran">BAŞLA</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

