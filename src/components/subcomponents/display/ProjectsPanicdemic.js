import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { projectsPanicdemic } from "../../../texts/displaySection_texts";

import panicdemicStart from './../../../images/covid.jpg';
import githubLogo from './../../../images/logos/github-logo-black.png';

function ProjectsPanicdemic(props) {
    const language = useContext(LangContext)

    const showIronhack = () => {
        props.handleActiveSubsection("education");
        props.handleMenuStatus("education");
        props.handleActiveInfoItem("coding");
    }

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{projectsPanicdemic.projectName[language]}</p>
            <p className="display-section__subtitle">{projectsPanicdemic.projectScope[language]}</p>
            <br></br>
            <div>
                <span>{projectsPanicdemic.intro[language].paragraph1.start}</span>
                <span className="laserbox__chunk laserbox__link">
                    <p onClick={() => showIronhack()}>{projectsPanicdemic.intro[language].paragraph1.link}</p>
                </span>
                <span className="laserbox__chunk">
                    <p>{projectsPanicdemic.intro[language].paragraph1.end}</p>
                </span>
            </div>
            <br></br>
            <p>{projectsPanicdemic.intro[language].paragraph2}</p>
            <br></br>
            <p>{projectsPanicdemic.intro[language].paragraph3}</p>
            <br></br>
            <p>{projectsPanicdemic.intro[language].paragraph4}</p>
            <br></br>
            <p>{projectsPanicdemic.intro[language].paragraph5}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{projectsPanicdemic.intro[language].technology1}</li>
                <li>{projectsPanicdemic.intro[language].technology2}</li>
            </ul>
            <br></br>
            <div className="display-section__logoBox">
                <a className="display-section__snapshot" href="#" target="_blank" rel="noreferrer">
                    <img className="display-section__logoItem display-section__logoItem--huge" src={panicdemicStart} alt="Covid Panicdemic cover screen" />
                    <p className="try-prompt">{projectsPanicdemic.tryPrompt[language]}</p>
                </a>
            </div>
            <div className="display-section__logoBox">
                <a className="display-section__snapshot" href="https://github.com/zombicat79/Covid-Panicdemic" target="_blank" rel="noreferrer">
                    <img className="display-section__logoItem display-section__logoItem--code" src={githubLogo} alt="GitHub logo" />
                    <p className="try-prompt">{projectsPanicdemic.codePrompt[language]}</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectsPanicdemic;