import React from 'react';

import viewportTexts from './../texts/viewport_texts';

function ViewportAlert(props) {
    let language = null;

    const preferredLang = navigator.language;
    switch(true) {
        case preferredLang === 'es':
            language = 'esp';
            break;
        case preferredLang === 'ca':
            language = 'cat';
            break;
        default:
            language = 'eng';
    }

    return (
        <div className="viewportAlert u-viewport-center u-blockElm-h-center">
            <p className="viewportAlert__text">{viewportTexts.alert.intro[language]}</p>
            <p className="viewportAlert__text">{viewportTexts.alert.advice[language]}</p>
            <h1 className="branding-heading">ZombieCat</h1>
            <img src={props.footerBrandImage} alt={props.footerBrandImgAlt} width={props.logoSize} />
        </div>
    )
}

export default ViewportAlert;