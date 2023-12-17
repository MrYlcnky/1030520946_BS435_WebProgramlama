import React, {useState} from "react";
import {OyunEkran1} from "./OyunEkran";
import {OyunEkran2} from "./OyunEkran2";
import {Button} from "react-bootstrap";

export const OyunMod = (props) => {
    const [minSayi, setMinSayi] = useState(null);
    const [maxSayi, setMaxSayi] = useState(null)
    const [randomSayi, setRandomSayi] = useState(0);
    const minSayiInput = (event) => {
        const sayi = event.target.value;
        setMinSayi(sayi !== '' ? parseInt(sayi, 10) : null)
    }
    const maxSayiInput = (event) => {
        const sayi = event.target.value;
        setMaxSayi(sayi !== '' ? parseInt(sayi, 10) : null)
    }
    //sayi aralığı
    const randomSayiRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    //buton rasgele sayi üretme ve ekran değişim
    const [ekranDegisim, setEkranDegisim] = useState(false);
    const [ekranDegisim2, setEkranDegisim2] = useState(false);
    const modSecimSayiUretVeEkranDegis = () => {
        if (typeof minSayi === 'number' && !isNaN(minSayi) &&
            typeof maxSayi === 'number' && !isNaN(maxSayi)) {
            setRandomSayi(randomSayiRange(minSayi, maxSayi));
            setEkranDegisim(true);
        }
    };
    const modSecimSayiUretVeEkranDegis2 = () => {
        if (typeof minSayi === 'number' && !isNaN(minSayi) &&
            typeof maxSayi === 'number' && !isNaN(maxSayi)) {
            setRandomSayi(randomSayiRange(minSayi, maxSayi));
            setEkranDegisim2(true);
        }
    };


    return (<div className="response-text">
            {ekranDegisim && (<OyunEkran1 Sayi={randomSayi} kulAdi={props.kuAdi} minSayi={minSayi} maxSayi={maxSayi}/>)}
            {ekranDegisim2 && (<OyunEkran2 Sayi={randomSayi} kulAdi={props.kuAdi} minSayi={minSayi} maxSayi={maxSayi}/>)}
            {!ekranDegisim && !ekranDegisim2 &&(<div className="playScreen mt-5 ">
                <div className="playDiv">
                    <h1>
                        <div className="Baslik">MODLAR</div>
                    </h1>
                    <div className="max-min-div">
                        <input className="min-input min-max" placeholder="Min Değer Girin" onChange={minSayiInput}/>
                        <input className="min-max" placeholder="Max Değer Girin" onChange={maxSayiInput}/>
                    </div>
                    <div className="mt-2 d-flex flex-column">
                        <Button className="mt-5" variant="success" style={{fontSize: 50, width: 400}} onClick={modSecimSayiUretVeEkranDegis}>
                            Yükselen Sular
                        </Button>
                        <Button className="mt-5" variant="success" style={{fontSize: 50, width: 400} } onClick={modSecimSayiUretVeEkranDegis2}>
                            Karanlık Aydınlık
                        </Button>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default OyunMod;