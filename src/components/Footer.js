import React, { useState, useContext } from 'react';

import { LangContext } from './../App';
import footerTexts from './../texts/footer_texts';

function scrollTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function Footer(props) {
    const language = useContext(LangContext);
    const logoImages = props.footerBrandImages;

    const [activeLogo, setActiveLogo] = useState(logoImages[0]);
    const handleLogo = (index) => {
        setActiveLogo(logoImages[index]);
    }

    return (
        <section class="footer u-blockElm-h-center">
            <h1 class="branding-heading">ZombieCat</h1>
            <p>{footerTexts.rights[language]}</p>
            <img 
                src={activeLogo} alt={props.footerBrandImgAlt} width={props.logoSize} 
                onClick={scrollTop}
                onMouseOver={(e) => handleLogo(1)}
                onMouseLeave={(e) => handleLogo(0)}
            />
        </section>
    )
}

export default Footer;