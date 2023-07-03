import React, { useState, useContext } from 'react';

import { LangContext } from "../../../App";
import { projectsAppventure } from "../../../texts/displaySection_texts";

import compassImg from './../../../images/compass.png';

function ProjectsAppventure(props) {
    const language = useContext(LangContext)

    const [mentionState, setMentionState] = useState({
        p1: projectsAppventure.intro[language].paragraph1.mention.generic,
        p3: projectsAppventure.intro[language].paragraph3.mention.generic,
        style: "laserbox__link",
        link: ""
    })
    const handleMention = () => {
        setMentionState({
            p1: projectsAppventure.intro[language].paragraph1.mention.specific,
            p3: projectsAppventure.intro[language].paragraph3.mention.specific,
            style: "display-section__title display-section__title--smaller display-section__title--red",
            link: "https://www.linkedin.com/in/guillemespias/"
        })
    }

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{projectsAppventure.projectName[language]}</p>
            <p className="display-section__subtitle">{projectsAppventure.projectScope[language]}</p>
            <br></br>
            <p>
                {projectsAppventure.intro[language].paragraph1.start} 
                <span className={`laserbox__chunk ${mentionState.style}`}><a href={mentionState.link} target="_blank" rel="noreferrer" onMouseOver={() => handleMention()}>{mentionState.p1}</a></span> 
                {projectsAppventure.intro[language].paragraph1.end}
            </p>
            <br></br>
            <p>{projectsAppventure.intro[language].paragraph2}</p>
            <br></br>
            <p>
                {projectsAppventure.intro[language].paragraph3.start} 
                <span className={`laserbox__chunk ${mentionState.style}`}><a href={mentionState.link} target="_blank" rel="noreferrer" onMouseOver={() => handleMention()}>{mentionState.p3}</a></span> 
                {projectsAppventure.intro[language].paragraph3.end}
            </p>
            <br></br>
            <p>{projectsAppventure.intro[language].paragraph4}</p>
            <br></br>
            <p>{projectsAppventure.intro[language].paragraph5}</p>
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