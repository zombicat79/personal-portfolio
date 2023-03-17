import React, { useContext } from 'react';

import { LangContext } from "./../../../App";
import { overviewFuture } from "./../../../texts/displaySection_texts";

function OverviewFuture(props) {
    const language = useContext(LangContext)

    let personalizedP3 = "";
    switch(language) {
        case "cat":
            personalizedP3 = props.personalizeParagraph("name", "de tu", overviewFuture.intro[language].paragraph3);
            break;
        case "esp":
            personalizedP3 = props.personalizeParagraph("name", "de ti", overviewFuture.intro[language].paragraph3);
            break;
        default:
            personalizedP3 = props.personalizeParagraph("name", "on you", overviewFuture.intro[language].paragraph3);
    }

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{overviewFuture.title[language]}</p>
            <br></br>
            <p>{overviewFuture.intro[language].paragraph1}</p>
            <br></br>
            <p>{overviewFuture.intro[language].paragraph2}</p>
            <br></br>
            <p>{personalizedP3}.</p>
            <br></br>
            <p>{overviewFuture.intro[language].paragraph4}</p>
            {   
                !props.hoverSubsection &&
                <p className="display-section__prompt display-section__prompt--big">{'\u2190'}</p>
            }
            {   
                props.hoverSubsection &&
                <p className="display-section__prompt">{overviewFuture.prompt[language][props.hoverSubsection]}</p>
            }
        </div>
    )
}

export default OverviewFuture;