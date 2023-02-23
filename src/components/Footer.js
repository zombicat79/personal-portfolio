import React, { useContext } from 'react';

import { LangContext } from './../App';
import footerTexts from './../texts/footer_texts';

function Footer(props) {
    const language = useContext(LangContext);

    return (
        <section class="footer u-blockElm-h-center">
            <h1 class="branding-heading">ZombieCat</h1>
            <p>{footerTexts.rights[language]}</p>
            <img src={props.footerBrandImg} alt={props.footerBrandImgAlt}/>
        </section>
    )
}

export default Footer;