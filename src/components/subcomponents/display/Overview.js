import React, { useContext } from 'react';

import { LangContext } from "./../../../App";
import displayTexts from "./../../../texts/displaySection_texts";

function Overview(props) {
    const language = useContext(LangContext)

    return (
        <div>
            <p>{displayTexts.salute[language]} {props.visitorInfo.name}</p>
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