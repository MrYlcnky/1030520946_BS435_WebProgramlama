import React, {useContext, useEffect, useRef, useState} from "react";
import {Container} from "react-bootstrap";
import {GirisEkran} from "./GirisEkran";
import OyunMod from "./OyunModEkran";
//satır121 silincek : {randomSayi}

export const OyunEkran1 = (props) => {

    //buton geri dön ve cikis yenidenbaşlat
    const [yenidenBaslat, setYenidenBaslat] = useState(false)
    const [back, setBack] = useState(false);
    const [exit, setExit] = useState(false);
    //popup
    const [popup, setPopup] = useState(false);
    //süre
    const [sure, setSure] = useState(57);//57
    //su animasyon
    const [suYukseklik, setSuYukseklik] = useState(0);
    const [tahminDeger, setTahminDeger] = useState(null);
    const [tahminSonuc, setTahminSonuc] = useState("Dikkat Et Sular Yükseliyor!!!")
    const [randomSayi, setRandomSayi] = useState(props.Sayi)
    const [kullaniciAdi, setKullaniciAdi] = useState(props.kulAdi)
    const geriDonBtn = () => {
        setBack(true)
    };
    const cikisBtn = () => {
        setExit(true);
        setPopup(false);
    };
    useEffect(() => {
        let mevcutYukseklik = 0;
        const timer = setInterval(() => {
            mevcutYukseklik += 38 / 58; // 60 saniyede suyu tamamen doldur 38/60
            if (mevcutYukseklik <= 37 && sure >= 0) { //37
                setSuYukseklik(mevcutYukseklik);
            } else {
                clearInterval(timer);
                setPopup(true);
            }
            setTimeout(() => {
                setSure((sure) => sure - 1);
            }, 1000);
        }, 1000);
        if (yenidenBaslat) {
            setYenidenBaslat(false);
        }
        return () => clearInterval(timer);
    }, [yenidenBaslat]);
    const yeniOyunBaslat = () => {

        const randomSayiRange = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        setRandomSayi(randomSayiRange(props.minSayi, props.maxSayi));
        setTahminDeger("");
        setTahminSonuc("");
        setSure(57);
        setSuYukseklik(0);
        setpopupyazi("Süre Bitti!");
        setPopup(false);
        setYenidenBaslat(true);
    };
    const [popupyazi, setpopupyazi] = useState("Süre Bitti!"); //true doğru tahmin false zaman dolması
    const girilenSayiTahmin = (e) => {
        setTahminDeger(e.target.value)
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sayiTahminn();
        }
    }
    const sayiTahminn = () => {
        const kullaniciTahmini = parseInt(tahminDeger);
        const tutulanSayi = randomSayi;
        const mutlakTahmin = Math.abs(kullaniciTahmini);
        const fark = Math.abs(tutulanSayi - mutlakTahmin);
        if (fark === 0) {
            setTahminSonuc("Tebrikler Doğru tahmin");
            setPopup(true);
            setpopupyazi("TEBRİKLER KAZANDINIZ");
        } else if (fark <= 2) {
            setTahminSonuc("Bi Gıdım Daha Gel :)");
        } else if (fark <= 5) {
            setTahminSonuc("Çok Çok Yakınsın Kurtulacaksın!");
        } else if (fark <= 10) {
            setTahminSonuc("Çok Sudan Çıkmaya Yakınsın");
        } else if (fark <= 15) {
            setTahminSonuc("Sudan Çıkmaya Yakınsın");
        } else if (fark <= 20) {
            setTahminSonuc("Sudan Çıkmaya Uzaksın");
        } else if (fark <= 25) {
            setTahminSonuc("Çok Sudan Çıkmaya Uzaksın");
        } else {
            setTahminSonuc("Çok Çok Uzaksın Boğulacaksın!!!");
        }
        if (fark !== 0) {
            setTahminDeger("");
        }
    };
    return (
        <Container className="position-relative">
            {exit && <GirisEkran/>}
            {back && (<OyunMod/>)}
            {!exit && !back && (<div>
                <div>
                    {popup ?
                        <div>
                            <div className="overlay"></div>
                            <div className="popup">
                                <div className="popup-content">
                                    <h2 className="poph2">{popupyazi}</h2>
                                    <div className="popup-btn-div">
                                        <button className="btn-dive btn-cikis " onClick={cikisBtn}>Çıkış</button>
                                        <button className="btn-dive btn-yeniden" onClick={yeniOyunBaslat}>Yeniden Oyna
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }
                </div>
                <div className="playScreen mt-5 Oyun-Mod response-text">
                    <div className="oyun-ekran-div1">
                        <div className="mod-adi-div">
                            <h1 className="h1yk" style={{color: "white"}}>YÜKSELEN SULAR {randomSayi}</h1>

                            
                        </div>
                        <div className="kullanıcı-div metin-text">

                            <h3>Kullanıcı Adınız: {kullaniciAdi}</h3>
                            <div className="puan-div">
                                <h3 className="puan-h3">Süre:{sure}</h3>
                            </div>
                            <h3 className="h3yakinlik">İpucu:{tahminSonuc}</h3>
                        </div>
                    </div>
                    <div className=" animason-div ">
                        <div className="">
                            <div className="su" style={{height: `${suYukseklik}%`}}></div>
                        </div>
                        <div className="playDiv">
                            <div className="tahminet-div ">
                                <div className="girdi-tahmin-div">
                                    <input type="number" className="tahmin-input" placeholder="Tahminizi Giriniz!"
                                           onChange={girilenSayiTahmin} onKeyPress={handleKeyPress}
                                           value={tahminDeger}/>
                                    <button className="tahmin-btn " onClick={sayiTahminn}>TAHMİN ET</button>
                                </div>
                                <div className="return-back-div ">
                                    <button className="btn-dive back-btn" onClick={geriDonBtn}> Geri Dön</button>
                                    <button className="btn-dive btn-cikis " onClick={cikisBtn}>Çıkış</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </Container>
    );
}

export default OyunEkran1;