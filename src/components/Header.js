import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { LangContext } from './../App';

import headerTexts from './../texts/header_texts';

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
                        <NavLink 
                            to="/contact" 
                            className={(obj) => obj.isActive ? "header__link header__link--active" : "header__link"}>
                            {headerTexts.nav5[language]}
                        </NavLink>
                        <li className="header__link">{headerTexts.nav6[language]}</li>

                        {/*<li className="header__link">{headerTexts.nav2[language]}</li>
                        <li className="header__link">{headerTexts.nav3[language]}</li>
                        <li className="header__link">{headerTexts.nav4[language]}</li>
                        <li className="header__link">{headerTexts.nav5[language]}</li>
                        <li className="header__link">{headerTexts.nav6[language]}</li> */}
                    </ul>
                </nav>
            </div>

            <div className="header__lower">
                <div className="header__movingBar">
                    <div className="header__fluctuatingLight"></div>
                </div>
            </div>
        </section>
    )
}

export default Header;