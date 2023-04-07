import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { workLFG } from "../../../texts/displaySection_texts";

import redcrossLogo from "./../../../images/logos/redcross.png";

function WorkBeach(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{workLFG.workplace[language]}</p>
            <br></br>
            <p>{workLFG.intro[language].paragraph1}</p>
            <br></br>
            <p>{workLFG.intro[language].paragraph2}</p>
            <br></br>
            <p>{workLFG.intro[language].paragraph3}</p>
            <br></br>
            <p>{workLFG.intro[language].paragraph4}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workLFG.intro[language].learning1}</li>
                <li>{workLFG.intro[language].learning2}</li>
                <li>{workLFG.intro[language].learning3}</li>
            </ul>
            <br></br>
            <p>{workLFG.intro[language].paragraph5}</p>
            <div className="display-section__logoBox">
                {
                    language === "eng" &&
                    <a href="https://www.icrc.org/en" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem" src={redcrossLogo} alt="Red Cross" />
                    </a>
                }
                {
                    (language === "cat" || language === "esp") &&
                    <a href="https://www2.cruzroja.es/" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem" src={redcrossLogo} alt="Red Cross" />
                    </a>
                }
            </div>
        </div>
    )
}

export default WorkBeach;