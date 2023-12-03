import React, {useContext, useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {GirisEkran} from "./GirisEkran";
import OyunMod from "./OyunModEkran";



export const OyunEkran = (props) => {

    //deneme hakkı
    const [denemeHak,setDenemeHak]=useState(5);
    //buton geri dön ve cikis
    const [back,setBack]=useState(false);
    const [exit,setExit]=useState(false);
    const geriDonBtn=()=>{
        setBack(true);

    };
    const cikisBtn=()=>{
        setExit(true);
    };
    //sayi tahmin
    const [tahminDeger,setTahminDeger]=useState(null);

    const [tahminSonuc,setTahminSonuc]=useState("Tahmin Yok")

    const girilenSayiTahmin=(e)=>{
        setTahminDeger(e.target.value)
    }
    const sayiTahmin = () => {
        if (props.Sayi === parseInt(tahminDeger)) {
            setTahminSonuc("doğru tahmin");
        } else {
            setTahminSonuc("Yanlış tahmin");
            setDenemeHak((prevState) => prevState - 1);
        }
    };
    //süre
    const [sure, setSure] = useState(57);
    //su animasyon
    const [suYukseklik, setSuYukseklik] = useState(0);

    useEffect(() => {
        let mevcutYukseklik = 0;

        const timer = setInterval(() => {
            mevcutYukseklik += 38 / 60; // 60 saniyede suyu tamamen doldur

            if (mevcutYukseklik <= 36) {
                setSuYukseklik(mevcutYukseklik);
            } else {
                clearInterval(timer);
            }
            setTimeout(() => {
                setSure((sure) => sure - 1);
            }, 1000);
        }, 1000); // 1000 milisaniye (1 saniye) aralıklarla çalışacak

        return () => clearInterval(timer);
    }, []);




    return (

        <Container className="position-relative">
            {exit && <GirisEkran/>}
            {back && (<OyunMod/>)}
            {(<div className="playScreen mt-5 Oyun-Mod response-text">
                <div className="oyun-ekran-div1">
                    <div className="mod-adi-div">
                        <h1 style={{color: "white"}}>OYUN EKRANI- {props.Sayi} </h1>

                    </div>
                    <div className="kullanıcı-div metin-text">
                        <h3>{tahminSonuc}-{tahminDeger}</h3>
                        <h3>Kullanıcı Adınız: {props.kulAdi}</h3>
                        <div className="puan-div">
                            <h4>Deneme Hakkınız:{denemeHak}</h4>
                            <h3 className="puan-h3">Süre:{sure}</h3>
                        </div>
                    </div>
                </div>
                <div className=" animason-div ">
                    <div className="">
                        <div className="su" style={{ height: `${suYukseklik}%` }}></div>
                    </div>
                    <div className="playDiv">
                    <div className="tahminet-div ">
                        <div className="girdi-tahmin-div">
                            <input type="number" className="tahmin-input" placeholder="Tahminizi Giriniz!" onChange={girilenSayiTahmin}/>
                            <button className="tahmin-btn " onClick={sayiTahmin}>TAHMİN ET</button>
                        </div>
                        <div className="return-back-div ">
                            <button className="btn-dive back-btn" onClick={geriDonBtn}> Geri Dön</button>
                            <button className="btn-dive btn-cikis " onClick={cikisBtn}>Çıkış</button>
                        </div>
                    </div>

                    </div>

                </div>

            </div>)}



        </Container>
    );
}

export default OyunEkran;