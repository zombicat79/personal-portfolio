import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { projectsAppventure } from "../../../texts/displaySection_texts";

import compassImg from './../../../images/compass.png';

function ProjectsAppventure(props) {
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
            <p className="display-section__title">{projectsAppventure.projectName[language]}</p>
            <p className="display-section__subtitle">{projectsAppventure.projectScope[language]}</p>
            <br></br>
            <p>{projectsAppventure.intro[language].paragraph1}</p>
            <br></br>
            <p>{projectsAppventure.intro[language].paragraph2}</p>
            <br></br>
            <br></br>
            <p>{projectsAppventure.intro[language].paragraph4}</p>
            <br></br>
            <p>{projectsAppventure.intro[language].paragraph5}</p>
            <br></br>
            <p>{projectsAppventure.intro[language].paragraph6}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{projectsAppventure.intro[language].discipline1}</li>
                <li>{projectsAppventure.intro[language].discipline2}</li>
                <li>{projectsAppventure.intro[language].discipline3}</li>
                <li>{projectsAppventure.intro[language].discipline4}</li>
                <li>{projectsAppventure.intro[language].discipline5}</li>
                <li>{projectsAppventure.intro[language].discipline6}</li>
                <li>{projectsAppventure.intro[language].discipline7}</li>
            </ul>
            <br></br>
            <p>{projectsAppventure.intro[language].paragraph6}</p>
            <div>
                <div className="display-section__logoBox">
                    <a className="display-section__snapshot" href="https://thesecretsofbarcino.com/thesecretsofbarcino-english/" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem display-section__logoItem--extra-big" src={compassImg} alt="Secrets of Barcino game" />
                        <p className="try-prompt">{projectsAppventure.visitPrompt[language]}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectsAppventure;