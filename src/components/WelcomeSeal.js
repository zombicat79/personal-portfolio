import React, {useState} from 'react';

import LanguageSelector from './LanguageSelector';

import catIcon from "./../images/icos/lang-catalan.png";
import espIcon from "./../images/icos/lang-spanish.png";
import engIcon from "./../images/icos/lang-english.png";

const availableLanguages = [
    {
        id: 1,
        icon: catIcon,
        alt: "round language flag",
        description: "Meu!"
    },
    {
        id: 2,
        icon: espIcon,
        alt: "round language flag",
        description: "¡Miau!"
    },
    {
        id: 3,
        icon: engIcon,
        alt: "round language flag",
        description: "Meow!"
    }
];

function WelcomeSeal(props) {
    const logoImages = props.logoImages;
    const [activeLogo, setActiveLogo] = useState(logoImages[0]);

    const handleLogo = (index) => {
        setActiveLogo(logoImages[index]);
    }
    
    const availableTexts = props.actionTexts;
    const [actionText, setActionText] = useState("");

    const handleTouchpoint = (index) => {
        setActionText(availableTexts[index]);
        handleCtaPosition("appear");
        handleCtaBrightness(); 
    }

    const [ctaBrightnessClass, setCtaBrightnessClass] = useState("");
    const handleCtaBrightness = () => {
        setCtaBrightnessClass("btn-shine");
        setTimeout(() => {
            setCtaBrightnessClass("");
        }, 1000);
    }

    const [ctaPosition, setCtaPosition] = useState("u-goneAway u-goneAway--down");
    const handleCtaPosition = (mode) => {
        if (mode === "appear") {
            setCtaPosition("u-comeBack u-comeBack--down");
        } else {
            setCtaPosition("u-goneAway u-goneAway--left");
        }
    }

    const [langPosition, setLangPosition] = useState("u-goneAway u-goneAway--right");
    const handleLangPosition = (mode) => {
        if (mode === "appear") {
            setLangPosition("u-comeBack u-comeBack--right");
        } else {
            setLangPosition("u-goneAway u-goneAway--right");
        }
    }

    const [fullScreen, setFullScreen] = useState(true);
    const handleView = () => {
        if (fullScreen && props.viewport.requestFullscreen) {
            props.viewport.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setFullScreen((prevState) => {
            return !prevState;
        })
    }

    let shrinkModifier = {};
    if (props.initSealIsShrunk) {
        shrinkModifier = {
            sealParent: "welcomeSeal--shrunk",
            sealHeading: "welcomeSeal__heading--shrunk",
            sealSubtitle: "welcomeSeal__subtitle--shrunk",
            sealCta: "welcomeSeal__cta--shrunk",
            langSelector: "languageSelector--shrunk"
        }
    } else {
        shrinkModifier = {
            sealParent: "",
            sealHeading: "",
            sealSubtitle: "",
            sealCta: "",
            langSelector: ""
        }
    }

    console.log(langPosition)
    return (
        <section className={"welcomeSeal" + " " + "u-absolute-center" + " " + shrinkModifier.sealParent}>
            <div className={"welcomeSeal__heading" + " " + shrinkModifier.sealHeading}>
                <img src={activeLogo} alt={props.logoAlt}></img>
                <h1>{props.tradeName}</h1>

                {
                    langPosition !== "u-comeBack u-comeBack--right" &&
                    <div>
                        <div 
                            className="welcomeSeal__touchPoint welcomeSeal__touchPoint--p1" 
                            onClick={(e) => handleTouchpoint(0)}
                            onMouseOver={(e) => handleLogo(1)}
                            onMouseLeave={(e) => handleLogo(0)}
                        ></div>
                        <div 
                            className="welcomeSeal__touchPoint welcomeSeal__touchPoint--p2" 
                            onClick={(e) => handleTouchpoint(1)}
                            onMouseOver={(e) => handleLogo(1)}
                            onMouseLeave={(e) => handleLogo(0)}
                        ></div>
                        <div 
                            className="welcomeSeal__touchPoint welcomeSeal__touchPoint--p3"
                            onClick={(e) => handleTouchpoint(2)}
                            onMouseOver={(e) => handleLogo(1)}
                            onMouseLeave={(e) => handleLogo(0)}
                        ></div>
                    </div>
                }
            </div>
            <div className={"welcomeSeal__subtitle" + " " + "u-blockElm-h-center" + " " + shrinkModifier.sealSubtitle}>
                <h2>{props.role}</h2>
            </div>
            <div className={"welcomeSeal__cta" + " " + "u-blockElm-h-center" + " " + ctaPosition + " " + shrinkModifier.sealCta}>
                {actionText === props.actionTexts[0] && fullScreen && <button className={"btn-primary" + " " + ctaBrightnessClass} onClick={(e) => handleView()}>{actionText}</button>}
                {actionText === props.actionTexts[0] && !fullScreen && <button className={"btn-primary" + " " + ctaBrightnessClass} onClick={(e) => handleView()}>Deactivate cat-enhanced view</button>}
                {actionText === props.actionTexts[1] && <button className={"btn-primary" + " " + ctaBrightnessClass} onClick={(e) => props.handleSealState()}>{actionText}</button>}
                {actionText === props.actionTexts[2] && <button className={"btn-primary" + " " + ctaBrightnessClass} onClick={(e) => {handleCtaPosition("disappear"); handleLangPosition("appear")}}>{actionText}</button>}
            </div>
            <LanguageSelector 
                availableLanguages={availableLanguages}
                langPosition={langPosition}
                handleLangPosition={handleLangPosition}
                shrinkModifier={shrinkModifier.langSelector}
            />
        </section>
    )
}

export default WelcomeSeal;