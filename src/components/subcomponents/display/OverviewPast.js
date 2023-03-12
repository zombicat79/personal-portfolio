import React, { useContext } from 'react';

import { LangContext } from "./../../../App";
import { overviewPast } from "./../../../texts/displaySection_texts";

function OverviewPast(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{overviewPast.title[language]}</p>
            <br></br>
            <p>{overviewPast.intro[language].paragraph1}</p>
            <br></br>
            <p>{overviewPast.intro[language].paragraph2}</p>
            <br></br>
            <p>{overviewPast.intro[language].paragraph3}</p>
            {   
                !props.hoverSubsection &&
                <p className="display-section__prompt display-section__prompt--big">{'\u2190'}</p>
            }
            {   
                props.hoverSubsection &&
                <p className="display-section__prompt">{overviewPast.prompt[language][props.hoverSubsection]}</p>
            }
        </div>
    )
}

export default OverviewPast;