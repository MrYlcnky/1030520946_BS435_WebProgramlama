import React, {createContext, useState,useContext} from "react";
import {Link} from "react-router-dom";
import {Badge, Button, Container, FormControl, InputGroup} from "react-bootstrap";
import {OyunModSecim} from "./oyunModSecimEkran";


/* bu ekrana yazdırma
import {OyunModSecim} from "./oyunModSecimEkran";
 const data="merhaba burası oyun ekranı 1";
<OyunModSecim data={data} />

modseçime:
 <option value="1">MOD 1 {props.data}</option>
 export const OyunModSecim = (props) => {
*/
export const OyunEkran = () => {
    return (
        <Container >
            <div className="playScreen mt-5 ">
                <div className="playDiv">
                    <h1 style={{color:"white"}}>aaaaaaaaa</h1>
                </div>
            </div>
        </Container>
    );
}
