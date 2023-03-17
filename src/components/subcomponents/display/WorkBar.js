import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { workBAR } from "../../../texts/displaySection_texts";

import pestoLogo from "./../../../images/logos/pesto.png";

function WorkBar(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{workBAR.workplace[language]}</p>
            <br></br>
            <p>{workBAR.intro[language].paragraph1}</p>
            <br></br>
            <p>{workBAR.intro[language].paragraph2}</p>
            <br></br>
            <p>{workBAR.intro[language].paragraph3}</p>
            <br></br>
            <p>{workBAR.intro[language].paragraph4}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workBAR.intro[language].learning1}</li>
                <li>{workBAR.intro[language].learning2}</li>
                <li>{workBAR.intro[language].learning3}</li>
            </ul>
            <br></br>
            <p>{workBAR.intro[language].paragraph5}</p>
            <div className="display-section__logoBox">
                <a href="https://pestorestaurants.co.uk/" target="_blank" rel="noreferrer">
                    <img className="display-section__logoItem display-section__logoItem--big" src={pestoLogo} alt="Pesto restaurants" />
                </a>
            </div>
        </div>
    )
}

export default WorkBar;