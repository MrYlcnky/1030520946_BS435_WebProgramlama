import React from "react";
import "./Components/style.css"
import {GirisEkran,OyunModSecim,OyunEkran} from "./Components/oyunEkranları";

export function Ekran1() {
    return (
        <GirisEkran/>
    );
}
export default Ekran1;
export const Ekran2=()=>{
    return(<OyunModSecim/>);
}
export const Ekran3=()=>{
    return(<OyunEkran/>);
}