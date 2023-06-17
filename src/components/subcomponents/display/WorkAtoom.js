import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { workATOOM } from "../../../texts/displaySection_texts";

import bplayLogo from "./../../../images/logos/bplay.png";

function WorkAtoom(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{workATOOM.workplace[language]}</p>
            <br></br>
            <p>
                <span>{workATOOM.intro[language].paragraph1.start}</span>
                <span><a className="display-section__link" href="https://atoomstudio.com/" target="_blank" rel="noreferrer">{workATOOM.intro[language].paragraph1.link}</a></span>
                <span>{workATOOM.intro[language].paragraph1.end}</span>
            </p>
            <br></br>
            <p>{workATOOM.intro[language].paragraph2}</p>
            <br></br>
            <p>{workATOOM.intro[language].paragraph3}</p>
            <br></br>
            <p>{workATOOM.intro[language].paragraph4}</p>
            <br></br>
            <p>{workATOOM.intro[language].paragraph5}</p>
            <br></br>
            <p>{workATOOM.intro[language].paragraph6}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workATOOM.intro[language].technology1}</li>
                <li>{workATOOM.intro[language].technology2}</li>
                <li>{workATOOM.intro[language].technology3}</li>
                <li>{workATOOM.intro[language].technology4}</li>
                <li>{workATOOM.intro[language].technology5}</li>
                <li>{workATOOM.intro[language].technology6}</li>
                <li>{workATOOM.intro[language].technology7}</li>
            </ul>
            <br></br>
            <p>{workATOOM.intro[language].paragraph7}</p>
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

export default WorkAtoom;