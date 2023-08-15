import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { LangContext } from './../App';

import headerTexts from './../texts/header_texts';
import cvEng from './../downloads/WebDev_CV_FULL_ENG_NoPic.pdf';
import cvEsp from './../downloads/WebDev_CV_FULL_ESP_NoPic.pdf';

function Header(props) {
    const language = useContext(LangContext);
    const logoImages = props.headerBrandImages;

    const [activeLogo, setActiveLogo] = useState(logoImages[0]);
    const handleLogo = (index) => {
        setActiveLogo(logoImages[index]);
    }

    const [settingsOn, setSettingsOn] = useState(false);
    const handleSettingsAppearance = () => {
        setSettingsOn((prevState) => {
            return !prevState;
        })
    }

    const [barState, setBarState] = useState({bar: "moving", light: "fluctuating", contents: "moving", dropdownUnfolded: false});
    const handleBarState = () => {
        if (barState.bar === "moving") {
            setBarState({bar: "still", light: "still", contents: "still", dropdownUnfolded: false});
            setTimeout(() => {
                setBarState({bar: "still", light: "still", contents: "still", dropdownUnfolded: true});
            }, 1000)
        } else {
            setBarState({bar: "still", light: "off", contents: "moving", dropdownUnfolded: false});
            setTimeout(() => {
                setBarState({bar: "moving", light: "fluctuating", contents: "moving", dropdownUnfolded: false});
            }, 500)
        }
    }
    
    // Gets the header bar moving upon header folding/unfolding
    useEffect(() => {
        if (barState.bar === "still") {
            setBarState({bar: "moving", light: "fluctuating"});
        }
    }, [props.headerIsUnfolded])

    return (
        <section className={`header header--${props.headerIsUnfolded}`}>            
            <div className="header__upper">
                <Link to="/">
                    <img 
                        className="header__logo" src={activeLogo} alt={props.headerBrandImgAlt} 
                        width={props.logoSize} height={props.logoSize}
                        onMouseOver={(e) => {handleLogo(1)}}
                        onMouseLeave={(e) => {handleLogo(0)}}
                    />
                </Link>
                <nav>
                    <ul className="header__linkList">
                        <li className={`header__link ${settingsOn}`} 
                            onClick={(e) => {
                                props.handleHeaderState();
                                props.handleSealState("shrunk");
                            }
                        }>
                            {headerTexts.nav1[language]}
                        </li>

                        <NavLink 
                            to="/about/thispage" 
                            className={(obj) => obj.isActive ? "header__link header__link--active" : "header__link"}>
                            {headerTexts.nav2[language]}
                        </NavLink>
                        <NavLink 
                            to="/about/myself" 
                            className={(obj) => obj.isActive ? "header__link header__link--active" : "header__link"}>
                            {headerTexts.nav3[language]}
                        </NavLink>
                        <NavLink 
                            to="/about/zombiecat" 
                            className={(obj) => obj.isActive ? "header__link header__link--active" : "header__link"}>
                            {headerTexts.nav4[language]}
                        </NavLink>
                        <li className="header__link" onClick={() => handleBarState()}>{headerTexts.nav5[language]}</li>
                        <NavLink 
                            to="/contact" 
                            className={(obj) => obj.isActive ? "header__link header__link--active" : "header__link"}>
                            {headerTexts.nav6[language]}
                        </NavLink>
                        <li className="header__link">
                            {
                                language === "eng" ?
                                    <a href={cvEng} download="ZombieCat_CV.pdf">{headerTexts.nav7[language]}</a>
                                :
                                    <a href={cvEsp} download="ZombieCat_CV.pdf">{headerTexts.nav7[language]}</a>
                            }
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="header__lower">
                <div className={`header__bar header__bar--${barState.bar}`}>
                    <div className={`bar__light bar__light--${barState.light}`}></div>
                    <div className={`bar__contents bar__contents--${barState.contents}`}>
                        {barState.dropdownUnfolded &&
                            <ul className="bar__linklist">
                                <p className="linklist__category">{headerTexts.dropdown.corporateCategory[language]}</p>
                                <li className="bar__link bar__link--first">
                                    <a href="https://santafe.bplay.bet.ar/" target="_blank" rel="noreferrer">bplay</a>
                                </li>
                                <li className="bar__link bar__link--first">
                                    <a  
                                        href={language === "cat" ? "https://www.wedreambig.org/" : language === "eng" ? "https://www.wedreambig.org/en/" : "https://www.wedreambig.org/es/"} 
                                        target="_blank" 
                                        rel="noreferrer">
                                        Dream Big
                                    </a>
                                </li>
                                
                                <p className="linklist__category">{headerTexts.dropdown.personalCategory[language]}</p>
                                <li className="bar__link bar__link--first">
                                    <a href="/projects/covid-panicdemic/" target="_blank">Covid Panicdemic</a>
                                </li>
                                <li className="bar__link">
                                    <a href="/projects/kiwiphone/" target="_blank">Kiwiphone</a>
                                </li>
                                <li className="bar__link">
                                    <a href="/projects/calculotron/" target="_blank">Calculotron</a>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;