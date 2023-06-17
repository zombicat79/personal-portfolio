import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { projectsPhone } from "../../../texts/displaySection_texts";

import phoneScreen from './../../../images/phone-screen.png';
import githubLogo from './../../../images/logos/github-logo-black.png';

function ProjectsPhone(props) {
    const language = useContext(LangContext)

    let personalizedP3 = "";
    switch(language) {
        case "cat":
            personalizedP3 = props.personalizeParagraph("name", "Doncs bé", projectsPhone.intro[language].paragraph3);
            break;
        case "esp":
            personalizedP3 = props.personalizeParagraph("name", "Pues bueno", projectsPhone.intro[language].paragraph3);
            break;
        default:
            personalizedP3 = props.personalizeParagraph("name", "Well", projectsPhone.intro[language].paragraph3);
    }

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{projectsPhone.projectName[language]}</p>
            <p className="display-section__subtitle">{projectsPhone.projectScope[language]}</p>
            <br></br>
            <p>{projectsPhone.intro[language].paragraph1}</p>
            <br></br>
            <p>{projectsPhone.intro[language].paragraph2}</p>
            <br></br>
            <p>{personalizedP3}</p>
            <br></br>
            <p>{projectsPhone.intro[language].paragraph4}</p>
            <br></br>
            <p>{projectsPhone.intro[language].paragraph5}</p>
            <br></br>
            <p>{projectsPhone.intro[language].paragraph6}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{projectsPhone.intro[language].technology1}</li>
                <li>{projectsPhone.intro[language].technology2}</li>
                <li>{projectsPhone.intro[language].technology3}</li>
                <li>
                    <a className="display-section__link" href="https://www.npmjs.com/package/axios" target="_blank" rel="noreferrer">{projectsPhone.intro[language].technology4}</a>
                </li>
                <li>
                    <a className="display-section__link" href="https://dictionaryapi.dev/" target="_blank" rel="noreferrer">{projectsPhone.intro[language].technology5}</a>
                </li>
            </ul>
            <br></br>
            <div>
                <div className="display-section__logoBox">
                    <a className="display-section__snapshot" href="#" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem display-section__logoItem--huge square" src={phoneScreen} alt="Cellphone monochrome screen" />
                        <p className="try-prompt">{projectsPhone.tryPrompt[language]}</p>
                    </a>
                </div>
            </div>
            <div>
                <div className="display-section__logoBox">
                    <a className="display-section__snapshot" href="https://github.com/zombicat79/kiwi_client" target="_blank" rel="noreferrer">
                        <img className="display-section__logoItem display-section__logoItem--code" src={githubLogo} alt="GitHub logo" />
                        <p className="try-prompt">{projectsPhone.codePrompt[language]}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPhone;