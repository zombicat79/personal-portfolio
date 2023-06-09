import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { projectsMemory } from "../../../texts/displaySection_texts";

import progressImg from './../../../images/icos/work-progress.png';
import githubLogo from './../../../images/logos/github-logo-black.png';

function ProjectsMemory(props) {
    const language = useContext(LangContext)

    /* let personalizedP4 = "";
    switch(language) {
        case "cat":
            personalizedP4 = props.personalizeParagraph("name", "sembla", projectsCalculotron.intro[language].paragraph4);
            break;
        case "esp":
            personalizedP4 = props.personalizeParagraph("name", "parece", projectsCalculotron.intro[language].paragraph4);
            break;
        default:
            personalizedP4 = props.personalizeParagraph("name", "think", projectsCalculotron.intro[language].paragraph4);
    } */

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{projectsMemory.projectName[language]}</p>
            <p className="display-section__subtitle">{projectsMemory.projectScope[language]}</p>
            <div className="display-section__logoBox">
                <img className="display-section__logoItem display-section__logoItem--big" src={progressImg} alt="Work in progress" />
            </div>
            <p className="alert">{projectsMemory.progressAlert[language]}</p>
            <br></br>
            <p>{projectsMemory.intro[language].paragraph1}</p>
            <br></br>
            <p><strong>{projectsMemory.intro[language].paragraph2}</strong></p>
            <br></br>
            <p>{projectsMemory.intro[language].paragraph3}</p>
            <br></br>
            <p>{projectsMemory.intro[language].paragraph4}</p>
            <br></br>
            <p>{projectsMemory.intro[language].paragraph5}</p>
            <br></br>
            <p>{projectsMemory.intro[language].paragraph6}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{projectsMemory.intro[language].technology1}</li>
            </ul>
            <br></br>
            { /* <div className="display-section__logoBox">
                <a className="display-section__snapshot" href="#" target="_blank" rel="noreferrer">
                    <img className="display-section__logoItem display-section__logoItem--huge" src={calculatorButtons} alt="Math operations button set" />
                    <p className="try-prompt">{projectsMemory.tryPrompt[language]}</p>
                </a>
            </div> */ }
            <div className="display-section__logoBox">
                <a className="display-section__snapshot" href="https://github.com/zombicat79/pairs-game" target="_blank" rel="noreferrer">
                    <img className="display-section__logoItem display-section__logoItem--code" src={githubLogo} alt="GitHub logo" />
                    <p className="try-prompt">{projectsMemory.codePrompt[language]}</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectsMemory;