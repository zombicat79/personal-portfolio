import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { educationIronhack } from "../../../texts/displaySection_texts";

function EducationIronhack(props) {
    const language = useContext(LangContext)

    let personalizedP1 = "";
    switch(language) {
        case "cat":
            personalizedP1 = props.personalizeParagraph("name", "t'interessa", educationIronhack.intro[language].paragraph1);
            break;
        case "esp":
            personalizedP1 = props.personalizeParagraph("name", "te interesa", educationIronhack.intro[language].paragraph1);
            break;
        default:
            personalizedP1 = props.personalizeParagraph("name", "interested in", educationIronhack.intro[language].paragraph1);
    }

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{educationIronhack.degreeName[language]}</p>
            <a href="https://www.ironhack.com/en/barcelona" target="_blank" rel="noreferrer" className="display-section__subtitle display-section__link">{educationIronhack.institution}</a>
            <br></br>
            <br></br>
            <p>{educationIronhack.intro[language].paragraph1}</p>
            <br></br>
            <p>{educationIronhack.intro[language].paragraph2}</p>
            <br></br>
            <p>{educationIronhack.intro[language].paragraph3}</p>
            <br></br>
            <p>{educationIronhack.intro[language].paragraph4}</p>
            <br></br>
            <p>{educationIronhack.intro[language].paragraph5}</p>
            <br></br>
            <p>{educationIronhack.intro[language].paragraph6}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{educationIronhack.intro[language].discipline1}</li>
                <ul className="display-section__bulletList">
                    <li>{educationIronhack.intro[language].discipline1$1}</li>
                    <li>{educationIronhack.intro[language].discipline1$2}</li>
                </ul>
                <li>{educationIronhack.intro[language].discipline2}</li>
                <ul className="display-section__bulletList">
                    <li>{educationIronhack.intro[language].discipline2$1}</li>
                </ul>
                <li>{educationIronhack.intro[language].discipline3}</li>
                <ul className="display-section__bulletList">
                    <li>{educationIronhack.intro[language].discipline3$1}</li>
                    <li>{educationIronhack.intro[language].discipline3$2}</li>
                </ul>
                <li>{educationIronhack.intro[language].discipline4}</li>
                <li>{educationIronhack.intro[language].discipline5}</li>
                <li>{educationIronhack.intro[language].discipline6}</li>
                <li>{educationIronhack.intro[language].discipline7}</li>
                <li>{educationIronhack.intro[language].discipline8}</li>
            </ul>
        </div>
    )
}

export default EducationIronhack;