import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { workNext } from "../../../texts/displaySection_texts";

import bplayLogo from "./../../../images/logos/bplay.png";

function WorkNext(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{workNext.workplace[language]}</p>
            <br></br>
            <p>{workNext.intro[language].paragraph1}</p>
            <br></br>
            <p>{workNext.intro[language].paragraph2}</p>
            <br></br>
            <p>{workNext.intro[language].paragraph3}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workNext.intro[language].technology1}</li>
                <li>{workNext.intro[language].technology2}</li>
                <li>{workNext.intro[language].technology3}</li>
                <li>{workNext.intro[language].technology4}</li>
                <li>{workNext.intro[language].technology5}</li>
                <li>{workNext.intro[language].technology6}</li>
                <li>{workNext.intro[language].technology7}</li>
            </ul>
            <br></br>
            <p>{workNext.intro[language].paragraph4}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workNext.intro[language].wish1}</li>
                <li>{workNext.intro[language].technology2}</li>
                <li>{workNext.intro[language].technology3}</li>
                <li>{workNext.intro[language].technology4}</li>
                <li>{workNext.intro[language].technology5}</li>
                <li>{workNext.intro[language].technology6}</li>
                <li>{workNext.intro[language].technology7}</li>
            </ul>
            <br></br>
            <p>{workNext.intro[language].paragraph7}</p>
            <div>
                <div className="display-section__logoBox">
                    <a href="https://santafe.bplay.bet.ar/" target="_blank" rel="noreferrer"> 
                        <img className="display-section__logoItem display-section__logoItem--big display-section__logoItem--rounded" src={bplayLogo} alt="Bplay online gambling"/>
                    </a>
                </div>  
            </div>
        </div>
    )
}

export default WorkNext;