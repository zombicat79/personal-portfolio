import React, {useState, useEffect, useContext} from 'react';

import { LangContext } from '../App';
import questionnaireTexts from './../texts/visitorQuestionnaire_texts';

function VisitorQuestionnaire(props) {
    const language = useContext(LangContext);

    const [questionnairePosition, setQuestionnairePosition] = useState("");
    
    const [name, setName] = useState("");
    const [org, setOrg] = useState("");

    const handleInput = (event) => {
        const {id, value} = event.target;
        if (id === "name-input") {
            setName(value);
        } else {
            setOrg(value);
        }

        if (name && org) {
            setBtnStatus("btn-enabled");
        }
    }

    const [btnStatus, setBtnStatus] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && org) {
            setBtnStatus("btn-pressed");
            setQuestionnairePosition("");
            setTimeout(() => {
                props.setHasVisitorInfo(true)
                props.setVisitorInfo({name: name, org: org})
            }, 2000);
        }
    }

    useEffect(() => {
        setQuestionnairePosition("questionnaire--centered");
    }, [])
    
    return (
        <div className={`questionnaire ${questionnairePosition} u-viewport-center u-blockElm-h-center`}>
            <h3 className="questionnaire__hint">{questionnaireTexts.hint[language]}</h3>
            <p className="questionnaire__disclaimer">{questionnaireTexts.disclaimer[language]}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="questionnaire__inputWrapper">
                    <label htmlFor="name-input" className="questionnaire__inputLabel">{questionnaireTexts.name[language]}</label>
                    <input className="questionnaire__input" id="name-input" name="name-input" value={name} onChange={(e) => handleInput(e)} />
                </div>
                
                <div className="questionnaire__inputWrapper">
                    <label htmlFor="org-input" className="questionnaire__inputLabel">{questionnaireTexts.org[language]}</label>
                    <input className="questionnaire__input" id="org-input" name="org-input" value={org} onChange={(e) => handleInput(e)} />
                </div>

                <button className="questionnaire__submitBtn">
                    {(!name || !org) && <img src={props.btnSubmitIcons[0]} alt={props.submitBtnAlt} />}
                    {(name && org) && <img className={btnStatus} src={props.btnSubmitIcons[1]} alt={props.submitBtnAlt} />}
                </button>
            </form>
        </div>
    )
}

export default VisitorQuestionnaire;