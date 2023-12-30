import React, {useContext, useEffect, useRef, useState} from "react";
import {Container} from "react-bootstrap";
import {GirisEkran} from "./GirisEkran";
import OyunMod from "./OyunModEkran";
//satır117 silincek : {randomSayi}

export const OyunEkran2 = (props) => {
    //buton geri dön ve cikis yenidenbaşlat
    const [yenidenBaslat, setYenidenBaslat] = useState(false)
    const [back, setBack] = useState(false);
    const [exit, setExit] = useState(false);
    const [tahminDeger, setTahminDeger] = useState(null);
    const [tahminSonuc, setTahminSonuc] = useState("Burayı Aydınlat!!!")
    const [randomSayi, setRandomSayi] = useState(props.Sayi)
    const [popup, setPopup] = useState(false);
    const [popupyazi, setpopupyazi] = useState("Hakkınız Bitti Karanlıktan Çıkamadınız!!");
    const [denemeHak,setDenemeHak]=useState(5);
    const geriDonBtn = () => {
        setBack(true);
    };
    const cikisBtn = () => {
        setExit(true);

    };

    useEffect(() => {
        if (yenidenBaslat) {
            setYenidenBaslat(false);
        }
    }, [yenidenBaslat]);
    const yeniOyunBaslat = () => {
        const randomSayiRange = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        setRandomSayi(randomSayiRange(props.minSayi, props.maxSayi));
        setTahminDeger("");
        setTahminSonuc("");
        setpopupyazi("Hakkınız Bitti Karanlıktan Çıkamadınız!!");
        setDenemeHak(5);
        SetOpacityDeger(1);
        setPopup(false);
        setYenidenBaslat(true);
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sayiTahminn();
        }
    };
    const girilenSayiTahmin = (e) => {
        setTahminDeger(e.target.value)
    }
    const sayiTahminn = () => {
        const kullaniciTahmini = parseInt(tahminDeger);
        const tutulanSayi = randomSayi;
        const mutlakTahmin = Math.abs(kullaniciTahmini);
        const fark = Math.abs(tutulanSayi - mutlakTahmin);
        if (parseInt(denemeHak)<=1){
            setPopup(true);
        }
        if (fark === 0) {
            setTahminSonuc("Tebrikler Doğru tahmin");
            SetOpacityDeger(0);
            setPopup(true);
            setpopupyazi("TEBRİKLER KAZANDINIZ");
        } else if(fark <= 2) {
            setTahminSonuc("Çok Ama Çok Az Kaldı Hadi Başarabilirsin Güneş Burada:)");
            SetOpacityDeger(0.2);
        } else if (fark <= 5) {
            setTahminSonuc("Aydınlığa Çok Kaldı Yakınsın Kurtulacaksın!");
            SetOpacityDeger(0.4);
        } else if (fark <= 10) {
            setTahminSonuc("Aydınlığa Az Kaldı Yakınsın");
            SetOpacityDeger(0.6);
        } else if (fark <= 15) {
            setTahminSonuc("Aydınlığı Görüyorsun Yakınsın");
            SetOpacityDeger(0.7);
        } else if (fark <= 20) {
            setTahminSonuc("Doğru Yoldayız Ama Hala Karanlık ");
            SetOpacityDeger(0.8);
        } else if (fark <= 25) {
            setTahminSonuc("Çok Karanlık Ama daha Deminden İyi");
            SetOpacityDeger(0.9);
        } else {
            setTahminSonuc("Çok Ama Çook Karanlık Aydınlat Şurayı Hadi!!!");
            SetOpacityDeger(1);
        }
        if (fark!==0){
            setDenemeHak(prevState => prevState-1);
            setTahminDeger("");
        }
    };
    const [opacityDeger,SetOpacityDeger]=useState(1);
    return (
        <Container className="position-relative">
            {exit && <GirisEkran/>}
            {back && (<OyunMod kuAdi={props.kulAdi}/>)}
            {!exit && !back && (
                <div>
                    <div>{popup ?
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
                        </div> : <div></div>
                    }
                    </div>
                    <div className="mod2Arkaplan mt-5 Oyun-Mod response-text ">

                        <div className=" mod2Arkaplan2" style={{backgroundColor:`rgba(0, 0, 0, ${opacityDeger})`}}>
                            <div className="oyun-ekran-div1">
                                <div className="mod-adi-div">
                                    <h1 className="h1yk" style={{color: " #d7ec12"}}>Karanlık Aydınlık</h1>

                                </div>
                                <div className="kullanıcı-div metin-text">

                                    <h3>Kullanıcı Adınız: {props.kulAdi}</h3>
                                    <div className="puan-div">
                                        <h3 className="puan-h3">Deneme Hakkınız:{denemeHak}</h3>
                                    </div>
                                    <h3 className="h3yakinlik">İpucu:{tahminSonuc}</h3>
                                </div>
                            </div>
                            <div className="tahminet-div ">
                                <div className="girdi-tahmin-div">
                                    <input type="number" className="tahmin-input" placeholder="Tahminizi Giriniz!"
                                           onChange={girilenSayiTahmin} onKeyPress={handleKeyPress} value={tahminDeger}/>
                                    <button className="tahmin-btn " onClick={sayiTahminn}>TAHMİN ET</button>
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


export default OyunEkran2;