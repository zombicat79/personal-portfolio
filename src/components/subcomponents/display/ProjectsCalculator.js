import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { projectsCalculotron } from "../../../texts/displaySection_texts";

import dreambigLogo from './../../../images/logos/dreambig.png';
import githubLogo from './../../../images/logos/github-logo-black.png';

function ProjectsCalculator(props) {
    const language = useContext(LangContext)

    let personalizedP4 = "";
    switch(language) {
        case "cat":
            personalizedP4 = props.personalizeParagraph("name", "sembla", projectsCalculotron.intro[language].paragraph4);
            break;
        case "esp":
            personalizedP4 = props.personalizeParagraph("name", "parece", projectsCalculotron.intro[language].paragraph4);
            break;
        default:
            personalizedP4 = props.personalizeParagraph("name", "think", projectsCalculotron.intro[language].paragraph4);
    }

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{projectsCalculotron.projectName[language]}</p>
            <p className="display-section__subtitle">{projectsCalculotron.projectScope[language]}</p>
            <br></br>
            <p>{projectsCalculotron.intro[language].paragraph1}</p>
            <br></br>
            <p>{projectsCalculotron.intro[language].paragraph2}</p>
            <br></br>
            <p>{projectsCalculotron.intro[language].paragraph3}</p>
            <br></br>
            <p>{personalizedP4}</p>
            <br></br>
            <p>{projectsCalculotron.intro[language].paragraph5}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{projectsCalculotron.intro[language].technology1}</li>
                <li>{projectsCalculotron.intro[language].technology2}</li>
            </ul>
            <br></br>
            <div className="display-section__logoBox">
                <a className="display-section__snapshot" href="#" target="_blank" rel="noreferrer">
                    <img className="display-section__logoItem display-section__logoItem--huge" src={dreambigLogo} alt="Covid Panicdemic cover screen" />
                    <p className="try-prompt">{projectsCalculotron.tryPrompt[language]}</p>
                </a>
            </div>
            <div className="display-section__logoBox">
                <a className="display-section__snapshot" href="https://github.com/zombicat79/calculotron" target="_blank" rel="noreferrer">
                    <img className="display-section__logoItem display-section__logoItem--code" src={githubLogo} alt="GitHub logo" />
                    <p className="try-prompt">{projectsCalculotron.codePrompt[language]}</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectsCalculator;