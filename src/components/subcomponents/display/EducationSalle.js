import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { educationSalle } from "../../../texts/displaySection_texts";

function EducationSalle(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{educationSalle.degreeName[language]}</p>
            <p className="display-section__subtitle">{educationSalle.institution}</p>
            <br></br>
            <p>{educationSalle.intro[language].paragraph1}</p>
            <br></br>
            <p>{educationSalle.intro[language].paragraph2}</p>
            <br></br>
            <p>{educationSalle.intro[language].paragraph3}</p>
            <br></br>
            <p>{educationSalle.intro[language].paragraph4}</p>
            <br></br>
            <p>{educationSalle.intro[language].paragraph5}</p>
            <br></br>
            <ul className="display-section__bulletList display-section__bulletList--blip">
                <li>{educationSalle.intro[language].learning1}</li>
                <li>{educationSalle.intro[language].learning2}</li>
            </ul>
            <br></br>
            <p>{educationSalle.intro[language].paragraph6}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{educationSalle.intro[language].discipline1}</li>
                <li>{educationSalle.intro[language].discipline2}</li>
                <li>{educationSalle.intro[language].discipline3}</li>
                <li>{educationSalle.intro[language].discipline4}</li>
                <li>{educationSalle.intro[language].discipline5}</li>
            </ul>
        </div>
    )
}

export default EducationSalle;