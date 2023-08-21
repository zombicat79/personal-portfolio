import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { locationWLD } from "../../../texts/displaySection_texts";

function LocationWorld(props) {
    const language = useContext(LangContext)

    let personalizedP3 = "";
    switch(language) {
        case "cat":
            personalizedP3 = props.personalizeParagraph("org", "es trobi a", locationWLD.intro[language].paragraph3);
            break;
        case "esp":
            personalizedP3 = props.personalizeParagraph("org", "se encuentre en", locationWLD.intro[language].paragraph3);
            break;
        default:
            personalizedP3 = props.personalizeParagraph("org", "within", locationWLD.intro[language].paragraph3 + "!");
    }

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{locationWLD.cityCountry[language]}</p>
            <br></br>
            <p>{locationWLD.intro[language].paragraph1}</p>
            <br></br>
            <p>{locationWLD.intro[language].paragraph2}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{locationWLD.intro[language].location1}</li>
                <li>{locationWLD.intro[language].location2}</li>
                <li>{locationWLD.intro[language].location3}</li>
                <li>{locationWLD.intro[language].location4}</li>
            </ul>
            <br></br>
            <p>{personalizedP3}</p>
        </div>
    )
}

export default LocationWorld;