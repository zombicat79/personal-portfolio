import React, { useState, useContext } from 'react';

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
                <div>
                    <img 
                        className="header__logo" src={activeLogo} alt={props.headerBrandImgAlt} 
                        width={props.logoSize} height={props.logoSize}
                        onClick={(e) => {
                                props.handleHeaderState();
                                props.handleSealState("shrunk");
                            }
                        }
                        onMouseOver={(e) => {handleLogo(1); handleSettingsAppearance()}}
                        onMouseLeave={(e) => {handleLogo(0); handleSettingsAppearance()}}
                    />
                </div>
                <nav>
                    <ul className="header__linkList">
                        <li className={`header__link ${settingsOn}`} 
                            onMouseOver={(e) => handleLogo(1)} 
                            onMouseLeave={(e) => handleLogo(0)}
                            onClick={(e) => {
                                props.handleHeaderState();
                                props.handleSealState("shrunk");
                            }
                        }>
                            {headerTexts.nav1[language]}
                        </li>
                        <li className="header__link">{headerTexts.nav2[language]}</li>
                        <li className="header__link">{headerTexts.nav3[language]}</li>
                        <li className="header__link">{headerTexts.nav4[language]}</li>
                        <li className="header__link">{headerTexts.nav5[language]}</li>
                        <li className="header__link">{headerTexts.nav6[language]}</li>
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