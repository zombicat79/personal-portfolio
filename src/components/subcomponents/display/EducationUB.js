import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { educationUB } from "../../../texts/displaySection_texts";

function EducationUB(props) {
    const language = useContext(LangContext)

    let personalizedP3 = "";
    switch(language) {
        case "cat":
            personalizedP3 = props.personalizeParagraph("name", "Si us plau", educationUB.intro[language].paragraph3);
            break;
        case "esp":
            personalizedP3 = props.personalizeParagraph("name", "Por favor", educationUB.intro[language].paragraph3);
            break;
        default:
            personalizedP3 = props.personalizeParagraph("name", "Please", educationUB.intro[language].paragraph3);
    }

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{educationUB.degreeName[language]}</p>
            <p className="display-section__subtitle">{educationUB.institution}</p>
            <br></br>
            <p>{educationUB.intro[language].paragraph1}</p>
            <br></br>
            <div>
                <span>{educationUB.intro[language].paragraph2.start}</span>
                <span className="laserbox__chunk laserbox__link">
                    <a href="https://www.youtube.com/watch?v=LBIgXhiOpeQ" target="_blank" rel="noreferrer">{educationUB.intro[language].paragraph2.link}</a>
                </span>
                <span>{educationUB.intro[language].paragraph2.end}</span>
            </div>
            <br></br>
            <p>{personalizedP3}</p>
            <br></br>
            <p>{educationUB.intro[language].paragraph4}</p>
            <br></br>
            <p>{educationUB.intro[language].paragraph5}</p>
            <br></br>
            <p>{educationUB.intro[language].paragraph6}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{educationUB.intro[language].discipline1}</li>
                <li>{educationUB.intro[language].discipline2}</li>
                <li>{educationUB.intro[language].discipline3}</li>
                <li>{educationUB.intro[language].discipline4}</li>
                <li>{educationUB.intro[language].discipline5}</li>
                <li>{educationUB.intro[language].discipline6}</li>
                <li>{educationUB.intro[language].discipline7}</li>
            </ul>
        </div>
    )
}

export default EducationUB;