import React, { useContext } from 'react';

import { LangContext } from "./../../../App";
import displayTexts from "./../../../texts/displaySection_texts";

function Overview(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{displayTexts.salute[language]} {props.visitorInfo.name},</p>
            <br></br>
            <p>{displayTexts.intro[language].paragraph1}</p>
            <br></br>
            <p>{displayTexts.intro[language].paragraph2}</p>
            <br></br>
            <p>{displayTexts.intro[language].paragraph3}</p>
            <br></br>
            <p>{displayTexts.intro[language].paragraph4}</p>
        </div>
    )
}

export default Overview;