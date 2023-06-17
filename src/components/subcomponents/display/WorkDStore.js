import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { workDPS } from "../../../texts/displaySection_texts";

import carrefourLogo from "./../../../images/logos/carrefour.png";
import bauhausLogo from "./../../../images/logos/bauhaus.png";

function WorkDStore(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{workDPS.workplace[language]}</p>
            <br></br>
            <p>{workDPS.intro[language].paragraph1}</p>
            <br></br>
            <p>{workDPS.intro[language].paragraph2}</p>
            <br></br>
            <p>{workDPS.intro[language].paragraph3}</p>
            <br></br>
            <p>{workDPS.intro[language].paragraph4}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workDPS.intro[language].learning1}</li>
                <li>{workDPS.intro[language].learning2}</li>
                <li>{workDPS.intro[language].learning3}</li>
            </ul>
            <br></br>
            <p>{workDPS.intro[language].paragraph5}</p>
            <div>
                {
                    language === "eng" &&
                    <div className="display-section__logoBox">
                        <a href="https://www.carrefour.com/en" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem" src={carrefourLogo} alt="Carrefour" />
                        </a>
                        <a href="https://www.bauhaus.eu/" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem display-section__logoItem--big" src={bauhausLogo} alt="Bauhaus"/>
                        </a>
                    </div>
                }
                {
                    (language === "cat" || language === "esp") &&
                    <div className="display-section__logoBox">
                        <a href="https://www.carrefour.es/" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem" src={carrefourLogo} alt="Carrefour" />
                        </a>
                        <a href="https://www.bauhaus.es/" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem display-section__logoItem--big" src={bauhausLogo} alt="Bauhaus"/>
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

export default WorkDStore;