import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { educationWWW } from "../../../texts/displaySection_texts";

import udemyLogo from './../../../images/logos/udemy.png';
import codeacademyLogo from './../../../images/logos/codecademy.png';
import freecodeLogo from './../../../images/logos/freecodecamp.png';
import scrimbaLogo from './../../../images/logos/scrimba.png';
import openbootcampLogo from './../../../images/logos/openbootcamp.png';

function EducationWWW(props) {
    const language = useContext(LangContext)

    let personalizedP1 = "";
    switch(language) {
        case "cat":
            personalizedP1 = props.personalizeParagraph("name", "Doncs sí", educationWWW.intro[language].paragraph1);
            break;
        case "esp":
            personalizedP1 = props.personalizeParagraph("name", "Pues sí", educationWWW.intro[language].paragraph1);
            break;
        default:
            personalizedP1 = props.personalizeParagraph("name", "So yeah", educationWWW.intro[language].paragraph1);
    }

    const showIronhack = () => {
        props.handleActiveSubsection("education");
        props.handleMenuStatus("education");
        props.handleActiveInfoItem("coding");
    }

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{educationWWW.degreeName[language]}</p>
            <p className="display-section__subtitle">{educationWWW.institution[language]}</p>
            <br></br>
            <p>{personalizedP1}</p>
            <br></br>
            <div>
                <span>{educationWWW.intro[language].paragraph2.start}</span>
                <span className="laserbox__chunk laserbox__link">
                    <p onClick={() => showIronhack()}>{educationWWW.intro[language].paragraph2.link}</p>
                </span>
                <span>{educationWWW.intro[language].paragraph2.end}</span>
            </div>
            <br></br>
            <p>{educationWWW.intro[language].paragraph3}</p>
            <br></br>
            <p>{educationWWW.intro[language].paragraph4}</p>
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
            <p>{educationWWW.intro[language].paragraph5}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{educationWWW.intro[language].discipline1}</li>
                <li>{educationWWW.intro[language].discipline2}</li>
                <li>{educationWWW.intro[language].discipline3}</li>
                <li>{educationWWW.intro[language].discipline4}</li>
                <ul className="display-section__bulletList">
                    <li>{educationWWW.intro[language].discipline4$1}</li>
                    <li>{educationWWW.intro[language].discipline4$2}</li>
                    <li>{educationWWW.intro[language].discipline4$3}</li>
                </ul>
                <li>{educationWWW.intro[language].discipline5}</li>
                <li>{educationWWW.intro[language].discipline6}</li>
                <li>{educationWWW.intro[language].discipline7}</li>
            </ul>
        </div>
    )
}

export default EducationWWW;