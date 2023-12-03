import React, {useState} from "react";
import { Button, Container, FormControl, InputGroup} from "react-bootstrap";
import {OyunMod} from "./OyunModEkran";


export const GirisEkran = () => {

    const [ekranDegisim, setEkranDegisim] = useState(false);
    const btnBasla = () => {
        setEkranDegisim(true);
    }
    const [kuAdi,setKuAdi]=useState('');

    const kullaniciAdiAlma=(e)=>{
        setKuAdi(e.target.value);
    }

    return (
        <Container>
            {!ekranDegisim && (
                <div className="playScreen mt-5 response-text">
                    <div className="playDiv">
                        <h1>
                            <div className="GirisBaslik ">
                                Sayı Tahmin Oyunu
                            </div>
                        </h1>
                        <div className="mt-5">
                            <InputGroup style={{width: 400, height: 100}} className="mb-3 ">
                                <InputGroup.Text style={{
                                    color: "rgb(255,255,255)",
                                    backgroundColor: "#6b747c",
                                    fontSize: 20,
                                    borderColor: "#6B747CFF"
                                }}>
                                    Oyuncu Adı:
                                </InputGroup.Text>
                                <FormControl onChange={kullaniciAdiAlma} style={{
                                    color: "rgb(255,255,255)",
                                    backgroundColor: "rgba(84,3,3,0.68)",
                                    fontSize: 35,
                                    boxShadow: "none",
                                    borderColor: "#6B747CFF"
                                }} aria-label="First name"/>
                            </InputGroup>
                            <div className="mt-5 align-items-center justify-content-center d-flex">
                                <Button className="mt-3 align-items-center justify-content-center d-flex"
                                        variant="success" style={{fontSize: 50, width: 180}} onClick={btnBasla}>
                                    OYNA
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {ekranDegisim && ( <OyunMod kuAdi={kuAdi}/>

            )}
        </Container>


    );
}

export default GirisEkran;