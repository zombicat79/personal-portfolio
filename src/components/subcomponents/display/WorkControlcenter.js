import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { workOCC } from "../../../texts/displaySection_texts";

import vuelingLogo from "./../../../images/logos/vueling.png";

function WorkControlcenter(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{workOCC.workplace[language]}</p>
            <br></br>
            <p>{workOCC.intro[language].paragraph1}</p>
            <br></br>
            <p>{workOCC.intro[language].paragraph2}</p>
            <br></br>
            <p>{workOCC.intro[language].paragraph3}</p>
            <br></br>
            <p>{workOCC.intro[language].paragraph4}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workOCC.intro[language].learning1}</li>
                <li>{workOCC.intro[language].learning2}</li>
                <li>{workOCC.intro[language].learning3}</li>
            </ul>
            <br></br>
            <p>{workOCC.intro[language].paragraph5}</p>
            <div>
                {
                    language === "eng" &&
                    <div className="display-section__logoBox">
                        <a href="https://www.vueling.com/en/" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem" src={vuelingLogo} alt="Vueling Airlines" />
                        </a>
                    </div>
                }
                {
                    (language === "cat" || language === "esp") &&
                    <div className="display-section__logoBox">
                        <a href="https://www.vueling.com/es/" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem" src={vuelingLogo} alt="Vueling Airlines" />
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

export default WorkControlcenter;