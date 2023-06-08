import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { projectsBig } from "../../../texts/displaySection_texts";

import dreambigLogo from './../../../images/logos/dreambig.png';

function ProjectsDreambig(props) {
    const language = useContext(LangContext)

    /* let personalizedP3 = "";
    switch(language) {
        case "cat":
            personalizedP3 = props.personalizeParagraph("name", "Si us plau", projectsBig.intro[language].paragraph3);
            break;
        case "esp":
            personalizedP3 = props.personalizeParagraph("name", "Por favor", projectsBig.intro[language].paragraph3);
            break;
        default:
            personalizedP3 = props.personalizeParagraph("name", "Please", projectsBig.intro[language].paragraph3);
    } */

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{projectsBig.projectName[language]}</p>
            <p className="display-section__subtitle">{projectsBig.projectScope[language]}</p>
            <br></br>
            <p>{projectsBig.intro[language].paragraph1}</p>
            <br></br>
            <p>{projectsBig.intro[language].paragraph2}</p>
            <br></br>
            <br></br>
            <p>{projectsBig.intro[language].paragraph4}</p>
            <br></br>
            <p>{projectsBig.intro[language].paragraph5}</p>
            <br></br>
            <p>{projectsBig.intro[language].paragraph6}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{projectsBig.intro[language].discipline1}</li>
                <li>{projectsBig.intro[language].discipline2}</li>
                <li>{projectsBig.intro[language].discipline3}</li>
                <li>{projectsBig.intro[language].discipline4}</li>
                <li>{projectsBig.intro[language].discipline5}</li>
                <li>{projectsBig.intro[language].discipline6}</li>
                <li>{projectsBig.intro[language].discipline7}</li>
            </ul>
            <br></br>
            <p>{projectsBig.intro[language].paragraph6}</p>
            <br></br>
            <div className="display-section__logoBox">
                {language === "eng" &&
                    <a className="display-section__snapshot" href="https://www.wedreambig.org/en/" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem display-section__logoItem--huge" src={dreambigLogo} alt="Dream Big Association" />
                        <p className="try-prompt">{projectsBig.visitPrompt[language]}</p>
                    </a>
                }
                {language === "esp" &&
                    <a className="display-section__snapshot" href="https://www.wedreambig.org/es/" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem display-section__logoItem--huge" src={dreambigLogo} alt="Dream Big Association" />
                        <p className="try-prompt">{projectsBig.visitPrompt[language]}</p>
                    </a>
                }
                {language === "cat" &&
                    <a className="display-section__snapshot" href="https://www.wedreambig.org/" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem display-section__logoItem--huge" src={dreambigLogo} alt="Dream Big Association" />
                        <p className="try-prompt">{projectsBig.visitPrompt[language]}</p>
                    </a>
                }
            </div>
        </div>
    )
}

export default ProjectsDreambig;