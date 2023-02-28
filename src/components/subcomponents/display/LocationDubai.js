import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { locationDUB } from "../../../texts/displaySection_texts";

function LocationDubai(props) {
    const language = useContext(LangContext)

    let personalizedP3 = "";
    switch(language) {
        case "cat":
            personalizedP3 = props.personalizeParagraph("name", "Si us plau", locationDUB.intro[language].paragraph3);
            break;
        case "esp":
            personalizedP3 = props.personalizeParagraph("name", "Por favor", locationDUB.intro[language].paragraph3);
            break;
        default:
            personalizedP3 = props.personalizeParagraph("name", "Please", locationDUB.intro[language].paragraph3);
    }

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{locationDUB.cityCountry[language]}</p>
            <br></br>
            <p>{locationDUB.intro[language].paragraph1}</p>
            <br></br>
            <p>{locationDUB.intro[language].paragraph2}</p>
            <br></br>
            <p>{personalizedP3}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{locationDUB.intro[language].role1}</li>
                <li>{locationDUB.intro[language].role2}</li>
            </ul>
        </div>
    )
}

export default LocationDubai;