import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { locationMAN } from "../../../texts/displaySection_texts";

import engIcon from "./../../../images/icos/lang-english.png";

function LocationManchester(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{locationMAN.cityCountry[language]}</p>
            <br></br>
            <p>{locationMAN.intro[language].paragraph1}</p>
            <br></br>
            <p>{locationMAN.intro[language].paragraph2}</p>
            <br></br>
            <p>{locationMAN.intro[language].paragraph3}</p>
            <br></br>
            <p>{locationMAN.intro[language].paragraph4}</p>
            <br></br>
            <div className="display-section__langBox display-section__langBox--manchester">
                <img className="display-section__langIcon" src={engIcon} alt="round english flag" />
            </div>
        </div>
    )
}

export default LocationManchester;