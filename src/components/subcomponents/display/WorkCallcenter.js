import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { workCCR } from "../../../texts/displaySection_texts";

import _112Logo from "./../../../images/logos/112.png";

function WorkCallcenter(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{workCCR.workplace[language]}</p>
            <br></br>
            <p>{workCCR.intro[language].paragraph1}</p>
            <br></br>
            <p>{workCCR.intro[language].paragraph2}</p>
            <br></br>
            <p>{workCCR.intro[language].paragraph3}</p>
            <br></br>
            <p>{workCCR.intro[language].paragraph4}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workCCR.intro[language].learning1}</li>
                <li>{workCCR.intro[language].learning2}</li>
                <li>{workCCR.intro[language].learning3}</li>
            </ul>
            <br></br>
            <p>{workCCR.intro[language].paragraph5}</p>
            {
                language === "cat" &&
                <div className="display-section__logoBox">
                    <a href="https://112.gencat.cat/ca/inici/index.html" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem" src={_112Logo} alt="112 Emergency number" />
                    </a>
                </div>
            }
            {
                (language === "eng" || language === "esp") &&
                <div className="display-section__logoBox">
                    <a href="https://112.gencat.cat/es/inici/index.html" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem" src={_112Logo} alt="112 Emergency number" />
                    </a>
                </div>
            }
        </div>
    )
}

export default WorkCallcenter;