import React from 'react';

function LanguageSelector(props) {
    return (
        <div className={"languageSelector" + " " + "u-flex" + " " + "u-flex--center" + " " + "u-goneAway" + " " + "u-goneAway--right" + " " + props.langPosition + props.shrinkModifier}>
        {props.availableLanguages.map((el) => {
            return (
                <div 
                    key={el.id} 
                    className="languageSelector__unit u-blockElm-h-center" 
                    onClick={(e) => props.handleLangPosition("disappear")}
                >
                    <img src={el.icon} alt={el.alt}/>
                    <p>{el.description}</p>
                </div>
            )
        })}
        </div>
    )
}

export default LanguageSelector;