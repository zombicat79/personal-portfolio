import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { educationRobotics } from "../../../texts/displaySection_texts";

import udemyLogo from './../../../images/logos/udemy.png';
import codeacademyLogo from './../../../images/logos/codecademy.png';
import freecodeLogo from './../../../images/logos/freecodecamp.png';
import scrimbaLogo from './../../../images/logos/scrimba.png';
import openbootcampLogo from './../../../images/logos/openbootcamp.png';

function EducationRobotics(props) {
    const language = useContext(LangContext)

    /* let personalizedP1 = "";
    switch(language) {
        case "cat":
            personalizedP1 = props.personalizeParagraph("name", "Doncs sí", educationWWW.intro[language].paragraph1);
            break;
        case "esp":
            personalizedP1 = props.personalizeParagraph("name", "Pues sí", educationWWW.intro[language].paragraph1);
            break;
        default:
            personalizedP1 = props.personalizeParagraph("name", "So yeah", educationWWW.intro[language].paragraph1);
    } */

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{educationRobotics.degreeName[language]}</p>
            <p className="display-section__subtitle">{educationRobotics.institution[language]}</p>
            <br></br>
            <p>{educationRobotics.intro[language].paragraph1}</p>
            <br></br>
            <p>{educationRobotics.intro[language].paragraph2}</p>
            <br></br>
            <p>{educationRobotics.intro[language].paragraph3}</p>
            <br></br>
            <p>{educationRobotics.intro[language].paragraph4}</p>
            <div>
                <div className="display-section__logoBox">
                    {
                        language === "esp" || language === "cat" ?
                        <a href="https://www.udemy.com/es/?persist_locale=&locale=es_ES" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem display-section__logoItem--big" src={udemyLogo} alt="Udemy" />
                        </a>
                        :
                        <a href="https://www.udemy.com/?persist_locale=&locale=en_US" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem display-section__logoItem--big" src={udemyLogo} alt="Udemy" />
                        </a>
                    }
                    <a href="https://www.codecademy.com/" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem display-section__logoItem--extra-big" src={codeacademyLogo} alt="Code Academy"/>
                    </a>
                </div>
                <div className="display-section__logoBox">
                    {
                        language === "esp" || language === "cat" ?
                        <a href="https://www.freecodecamp.org/espanol/learn/" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem display-section__logoItem--extra-big" src={freecodeLogo} alt="FreeCodeCamp" />
                        </a>
                        :
                        <a href="https://www.freecodecamp.org/learn/" target="_blank" rel="noreferrer">
                            <img className="display-section__logoItem display-section__logoItem--extra-big" src={freecodeLogo} alt="FreeCodeCamp" />
                        </a>
                    }
                    <a href="https://scrimba.com/" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem display-section__logoItem--extra-big" src={scrimbaLogo} alt="Scrimba"/>
                    </a>
                </div>
                <div className="display-section__logoBox">
                    <a href="https://open-bootcamp.com/" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem display-section__logoItem--extra-big" src={openbootcampLogo} alt="Open Bootcamp" />
                    </a>
                </div>
            </div>
            <p>{educationRobotics.intro[language].paragraph5}</p>
        </div>
    )
}

export default EducationRobotics;