import React, { useContext } from 'react';

import { LangContext } from "./../../../App";
import displayTexts from "./../../../texts/displaySection_texts";

function LocationPast(props) {
    const language = useContext(LangContext)

    return (
        <div>
            <p>PAST</p>
            <br></br>
            <p></p>
            <br></br>
            <p></p>
            <br></br>
            <p></p>
        </div>
    )
}

export default LocationPast;