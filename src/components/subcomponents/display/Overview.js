import React, { useContext } from 'react';

import { LangContext } from "./../../../App";
import { overview } from "./../../../texts/displaySection_texts";

function Overview(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{overview.salute[language]} {props.visitorInfo.name},</p>
            <br></br>
            <p>{overview.intro[language].paragraph1}</p>
            <br></br>
            <p>{overview.intro[language].paragraph2}</p>
            <br></br>
            <p>{overview.intro[language].paragraph3}</p>
            <br></br>
            <p>{overview.intro[language].paragraph4}</p>
            {   
                !props.hoverSubsection &&
                <p className="display-section__prompt display-section__prompt--big">{'\u2190'}</p>
            }
            {   
                props.hoverSubsection &&
                <p className="display-section__prompt">{overview.prompt[language][props.hoverSubsection]}</p>
            }
        </div>
    )
}

export default Overview;