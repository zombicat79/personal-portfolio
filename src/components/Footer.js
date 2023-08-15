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
        <section className="footer">
            <nav className="footer__nav">
                <ul className="nav__list">
                    <li className="footer__link">
                        <a href="https://santafe.bplay.bet.ar/" target="_blank" rel="noreferrer">bplay</a>
                    </li>
                    <li className="footer__link">
                        <a  
                            href={language === "cat" ? "https://www.wedreambig.org/" : language === "eng" ? "https://www.wedreambig.org/en/" : "https://www.wedreambig.org/es/"} 
                            target="_blank" 
                            rel="noreferrer">
                            Dream Big
                        </a>
                    </li>
                    <li className="footer__link">
                        <a href="/projects/covid-panicdemic/" target="_blank">Covid Panicdemic</a>
                    </li>
                    <li className="footer__link">
                        <a href="/projects/kiwiphone/" target="_blank">Kiwiphone</a>
                    </li>
                    <li className="footer__link">
                        <a href="/projects/calculotron/" target="_blank">Calculotron</a>
                    </li>
                </ul>
            </nav>

            <div className="u-blockElm-h-center">
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
            </div>
        </section>
    )
}

export default Footer;