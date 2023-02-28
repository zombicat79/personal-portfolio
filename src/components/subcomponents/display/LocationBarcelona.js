import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { locationBCN } from "../../../texts/displaySection_texts";

import catIcon from "./../../../images/icos/lang-catalan.png";
import espIcon from "./../../../images/icos/lang-spanish.png";

function LocationBarcelona(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{locationBCN.cityCountry[language]}</p>
            <br></br>
            <p>{locationBCN.intro[language].paragraph1}</p>
            <br></br>
            <p>{locationBCN.intro[language].paragraph2}</p>
            <br></br>
            <p>{locationBCN.intro[language].paragraph3}</p>
            <br></br>
            <div className="display-section__langBox">
                <img className="display-section__langIcon" src={catIcon} alt="round catalan flag" />
                <img className="display-section__langIcon" src={espIcon} alt="round spanish flag"/>
            </div>
        </div>
    )
}

export default LocationBarcelona;