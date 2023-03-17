import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { workAIR } from "../../../texts/displaySection_texts";

import airportLogo from "./../../../images/logos/prat-airport.png";

function WorkAirport(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{workAIR.workplace[language]}</p>
            <br></br>
            <p>{workAIR.intro[language].paragraph1}</p>
            <br></br>
            <p>{workAIR.intro[language].paragraph2}</p>
            <br></br>
            <p>{workAIR.intro[language].paragraph3}</p>
            <br></br>
            <p>{workAIR.intro[language].paragraph4}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workAIR.intro[language].learning1}</li>
                <li>{workAIR.intro[language].learning2}</li>
                <li>{workAIR.intro[language].learning3}</li>
            </ul>
            <br></br>
            <p>{workAIR.intro[language].paragraph5}</p>
            {
                language === "eng" &&
                <div className="display-section__logoBox">
                    <a href="https://www.aena.es/en/josep-tarradellas-barcelona-el-prat.html" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem display-section__logoItem--extra-big" src={airportLogo} alt="Barcelona Airport" />
                    </a>
                </div>
            }
            {
                (language === "cat" || language === "esp") &&
                <div className="display-section__logoBox">
                    <a href="https://www.aena.es/es/josep-tarradellas-barcelona-el-prat.html" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem display-section__logoItem--extra-big" src={airportLogo} alt="Barcelona Airport" />
                    </a>
                </div>
            }
        </div>
    )
}

export default WorkAirport;