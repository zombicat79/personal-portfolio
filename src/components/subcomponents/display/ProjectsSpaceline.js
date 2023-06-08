import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { projectsSpaceline } from "../../../texts/displaySection_texts";

function ProjectsSpaceline(props) {
    const language = useContext(LangContext)

    let personalizedP6 = "";
    switch(language) {
        case "cat":
            personalizedP6 = props.personalizeParagraph("name", "penses", projectsSpaceline.intro[language].paragraph6);
            break;
        case "esp":
            personalizedP6 = props.personalizeParagraph("name", "parece", projectsSpaceline.intro[language].paragraph6);
            break;
        default:
            personalizedP6 = props.personalizeParagraph("name", "think", projectsSpaceline.intro[language].paragraph6);
    }

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{projectsSpaceline.projectName[language]}</p>
            <p className="display-section__subtitle">{projectsSpaceline.projectScope[language]}</p>
            <br></br>
            <p>{projectsSpaceline.intro[language].paragraph1}</p>
            <br></br>
            <p>{projectsSpaceline.intro[language].paragraph2}</p>
            <br></br>
            <p>{projectsSpaceline.intro[language].paragraph3}</p>
            <br></br>
            <p>{projectsSpaceline.intro[language].paragraph4}</p>
            <br></br>
            <p>{projectsSpaceline.intro[language].paragraph5}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{projectsSpaceline.intro[language].technology1}</li>
                <li>{projectsSpaceline.intro[language].technology2}</li>
                <li>{projectsSpaceline.intro[language].technology3}</li>
                <li>{projectsSpaceline.intro[language].technology4}</li>
                <li>{projectsSpaceline.intro[language].technology5}</li>
                <li>{projectsSpaceline.intro[language].technology6}</li>
            </ul>
            <br></br>
            <p>{personalizedP6}</p>
            <br></br>
            <p>{projectsSpaceline.intro[language].paragraph7}</p>
        </div>
    )
}

export default ProjectsSpaceline;