import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

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
    const location = useLocation();
    const logoImages = props.footerBrandImages;

    const [activeLogo, setActiveLogo] = useState(logoImages[0]);
    const handleLogo = (index) => {
        setActiveLogo(logoImages[index]);
    }

    return (
        <section className="footer u-blockElm-h-center">
            <h1 className="branding-heading">ZombieCat</h1>
            <p>{footerTexts.rights[language]}</p>
            {
                location.pathname === "/" ? 
                    <img 
                        src={activeLogo} alt={props.footerBrandImgAlt} width={props.logoSize} 
                        onClick={scrollTop}
                        onMouseOver={(e) => handleLogo(1)}
                        onMouseLeave={(e) => handleLogo(0)}
                    />
                :
                <img 
                        src={activeLogo} alt={props.footerBrandImgAlt} width={props.logoSize} 
                        onClick={props.handleHeaderState}
                        onMouseOver={(e) => handleLogo(1)}
                        onMouseLeave={(e) => handleLogo(0)}
                    />
            }
        </section>
    )
}

export default Footer;