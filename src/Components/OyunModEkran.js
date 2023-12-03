import React, {useState} from "react";
import {OyunEkran} from "./OyunEkran";
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
    const modSecimSayiUretVeEkranDegis = () => {
        if (typeof minSayi === 'number' && !isNaN(minSayi) &&
            typeof maxSayi === 'number' && !isNaN(maxSayi)) {
            setRandomSayi(randomSayiRange(minSayi, maxSayi));
            setEkranDegisim(true);

        }

    };


    const btnMod = () => {

    }
    return (<div className="response-text">
            {ekranDegisim && (<OyunEkran Sayi={randomSayi} kulAdi={props.kuAdi}/>)}

            {!ekranDegisim && (<div className="playScreen mt-5 ">
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
                            Mod1
                        </Button>
                        <Button className="mt-5" variant="success" style={{fontSize: 50, width: 400} } onClick={modSecimSayiUretVeEkranDegis}>
                            Mod 2
                        </Button>
                    </div>
                    <button onClick={modSecimSayiUretVeEkranDegis}>oluştur</button>
                    <div>{randomSayi}</div>
                </div>
            </div>)}
        </div>
    )
}

export default OyunMod;