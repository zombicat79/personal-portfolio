import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { workFFD } from "../../../texts/displaySection_texts";

import mcdonaldsLogo from "./../../../images/logos/mcdonalds.png";
import nandosLogo from "./../../../images/logos/nandos.png";

function WorkKitchen(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{workFFD.workplace[language]}</p>
            <br></br>
            <p>{workFFD.intro[language].paragraph1}</p>
            <br></br>
            <p>{workFFD.intro[language].paragraph2}</p>
            <br></br>
            <p>{workFFD.intro[language].paragraph3}</p>
            <br></br>
            <p>{workFFD.intro[language].paragraph4}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workFFD.intro[language].learning1}</li>
                <li>{workFFD.intro[language].learning2}</li>
                <li>{workFFD.intro[language].learning3}</li>
            </ul>
            <br></br>
            <p>{workFFD.intro[language].paragraph5}</p>
            <div>
                {
                    language === "eng" &&
                    <div className="display-section__logoBox">
                        <a href="https://www.mcdonalds.com/" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem display-section__logoItem--big" src={mcdonaldsLogo} alt="McDonald's" />
                        </a>
                        <a href="https://www.nandos.co.uk/" target="_blank" rel="noreferrer"> 
                            <img className="display-section__logoItem display-section__logoItem--big" src={nandosLogo} alt="Nando's restaurant"/>
                        </a>
                    </div>
                }
                {
                    (language === "cat" || language === "esp") &&
                    <div className="display-section__logoBox">
                        <a href="https://mcdonalds.es/" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem display-section__logoItem--big" src={mcdonaldsLogo} alt="McDonald's" />
                        </a>
                        <a href="https://www.nandos.co.uk/" target="_blank" rel="noreferrer"> 
                            <img className="display-section__logoItem display-section__logoItem--big" src={nandosLogo} alt="Nando's restaurant"/>
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

export default WorkKitchen;