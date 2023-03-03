import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { locationSPC } from "../../../texts/displaySection_texts";

function LocationSpace(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{locationSPC.cityCountry[language]}</p>
            <br></br>
            <p>{locationSPC.intro[language].paragraph1}</p>
            <br></br>
            <p>{locationSPC.intro[language].paragraph2}</p>
            <br></br>
            <p>{locationSPC.intro[language].paragraph3}</p>
        </div>
    )
}

export default LocationSpace;