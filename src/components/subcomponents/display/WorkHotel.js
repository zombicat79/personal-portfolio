import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { workHTL } from "../../../texts/displaySection_texts";

import ericvokelLogo from "./../../../images/logos/ericvokel.png";

function WorkHotel(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{workHTL.workplace[language]}</p>
            <br></br>
            <p>{workHTL.intro[language].paragraph1}</p>
            <br></br>
            <p>{workHTL.intro[language].paragraph2}</p>
            <br></br>
            <p>{workHTL.intro[language].paragraph3}</p>
            <br></br>
            <p>{workHTL.intro[language].paragraph4}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workHTL.intro[language].learning1}</li>
                <li>{workHTL.intro[language].learning2}</li>
                <li>{workHTL.intro[language].learning3}</li>
            </ul>
            <br></br>
            <p>{workHTL.intro[language].paragraph5}</p>
            <div>
                {
                    language === "eng" &&
                    <div className="display-section__logoBox">
                        <a href="https://www.ericvokel.com/en" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem display-section__logoItem--huge" src={ericvokelLogo} alt="Eric Vökel Apartments" />
                        </a>
                    </div>
                }
                {
                    (language === "cat" || language === "esp") &&
                    <div className="display-section__logoBox">
                        <a href="https://www.ericvokel.com/es/" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem display-section__logoItem--huge" src={ericvokelLogo} alt="Eric Vökel Apartments" />
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

export default WorkHotel;