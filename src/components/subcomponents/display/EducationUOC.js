import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { educationUOC } from "../../../texts/displaySection_texts";

import itIcon from './../../../images/icos/lang-italian.png';
import frIcon from './../../../images/icos/lang-french.png';
import deIcon from './../../../images/icos/lang-german.png';
import chIcon from './../../../images/icos/lang-chinese.png';

function EducationUOC(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{educationUOC.degreeName[language]}</p>
            <p className="display-section__subtitle">{educationUOC.institution}</p>
            <br></br>
            <p>{educationUOC.intro[language].paragraph1}</p>
            <br></br>
            <p>{educationUOC.intro[language].paragraph2}</p>
            <br></br>
            <p>{educationUOC.intro[language].paragraph3}</p>
            <br></br>
            <p>{educationUOC.intro[language].paragraph4}</p>
            <br></br>
            <p>{educationUOC.intro[language].paragraph5}</p>
            <br></br>
            <p>{educationUOC.intro[language].paragraph6}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{educationUOC.intro[language].discipline1}</li>
                <li>{educationUOC.intro[language].discipline2}</li>
                <li>{educationUOC.intro[language].discipline3}</li>
                <li>{educationUOC.intro[language].discipline4}</li>
                <li>{educationUOC.intro[language].discipline5}</li>
                <li>{educationUOC.intro[language].discipline6}</li>
                <li>{educationUOC.intro[language].discipline7}</li>
                <li>{educationUOC.intro[language].discipline8}</li>
            </ul>
            <br></br>
            <div className="display-section__langBox display-section__langBox--wide">
                <img className="display-section__langIcon" src={itIcon} alt="round italian flag" />
                <img className="display-section__langIcon" src={frIcon} alt="round french flag" />
                <img className="display-section__langIcon" src={deIcon} alt="round german flag" />
                <img className="display-section__langIcon" src={chIcon} alt="round chinese flag" />
            </div>
        </div>
    )
}

export default EducationUOC;