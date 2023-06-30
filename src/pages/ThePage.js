import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import LaserBox from './../components/layout/LaserBox';
import { LangContext } from "./../App";

import reactLogo from './../images/logos/logo192.png';
import sassLogo from './../images/logos/sass-logo.png';
import slickLogo from './../images/logos/slick-logo.png';

import crimeImg from './../images/criminology.jpg';
import tropicalImg from './../images/tourism.jpg';
import appsImg from './../images/social-media.jpg';
import codingImg from './../images/coding.jpg';
import matrixImg from './../images/more-coding.jpg';
import storeImg from './../images/supermarket.jpg';
import lifeguardImg from './../images/lifeguard.jpg';
import kitchenImg from './../images/kitchen.jpg';
import waiterImg from './../images/waiter.jpg';
import airportImg from './../images/handling.jpg';
import callcenterImg from './../images/call-center.jpg';
import hotelImg from './../images/hotel.jpg';
import aisleImg from './../images/control.jpg';
import gamblingImg from './../images/gambling.jpg';
import barcelonaImg from './../images/barcelona.jpg';
import manchesterImg from './../images/manchester.jpg';
import dubaiImg from './../images/dubai.jpg';
import worldImg from './../images/world.jpg';
import marsImg from './../images/mars.jpg';
import spacetourImg from './../images/spaceline.jpg';
import zombieworkImg from './../images/working-cat.jpg';

import catpawIcon from './../images/icos/cat-paw-hollow-trans.png';
import storeIcon from './../images/icos/infoItems/supermarket.png';
import lifeguardIcon from './../images/icos/infoItems/lifeguard.png';
import kitchenIcon from './../images/icos/infoItems/kitchen.png';
import waiterIcon from './../images/icos/infoItems/waiter.png';
import handlingIcon from './../images/icos/infoItems/handling.png';
import callcenterIcon from './../images/icos/infoItems/call-center.png';
import hotelIcon from './../images/icos/infoItems/hotel.png';
import controlIcon from './../images/icos/infoItems/control.png';
import invadersIcon from './../images/icos/infoItems/invaders.png';
import phoneIcon from './../images/icos/infoItems/nokia.png';
import calculatorIcon from './../images/icos/infoItems/calculator.png';
import BcnIcon from './../images/icos/infoItems/barcelona.png';
import ManIcon from './../images/icos/infoItems/manchester.png';
import DubIcon from './../images/icos/infoItems/dubai.png';
import worldIcon from './../images/icos/infoItems/world.png';
import planetIcon from './../images/icos/infoItems/saturn.png';
import rocketIcon from './../images/icos/infoItems/rocket.png';
import workingIcon from './../images/icos/work-progress.png';
import wwwIcon from './../images/icos/infoItems/www.png';
import twinkleIcon from './../images/icos/infoItems/shiny-stars.png';
import memoryIcon from './../images/icos/infoItems/memory.png';
import appventureLogo from './../images/icos/infoItems/appventure.png';
import compassIcon from './../images/compass.png';
import dreambigLogo1 from './../images/icos/infoItems/dreambig-white.png';
import dreambigLogo2 from './../images/logos/dreambig.png';

import pageTexts from './../texts/ThePage_texts';

function ThePage(props) {
    const language = useContext(LangContext);

    let personalizedAddress = "";
    switch(language) {
        case "cat":
            personalizedAddress = props.methods.personalizeParagraph("name", "Veuràs", pageTexts.purpose[language]);
            break;
        case "esp":
            personalizedAddress = props.methods.personalizeParagraph("name", "Verás", pageTexts.purpose[language]);
            break;
        default:
            personalizedAddress = props.methods.personalizeParagraph("name", "You see", pageTexts.purpose[language]);
    }

    // Controls content fade-in effect on first render
    const [contentState, setContentState] = useState(null);
    const handleContentState = (transitDelay, consolidationDelay) => {
        setTimeout(() => {
            setContentState("appearing");
            setTimeout(() => {
                setContentState("visible");
            }, consolidationDelay)
        }, transitDelay)
    }
    useEffect(() => {
        handleContentState(6000, 3000);
    }, [])

    // Controls laserbox content change and fade-in effect of new content
    const [activeContent, setActiveContent] = useState(0);
    const handleActiveContent = () => {
        setContentState("invisible");
        setActiveContent((prevState) => {
            return prevState === 0 ? prevState+1 : prevState-1;
        })
        handleContentState(0, 3000);
    }

    const picArray = [crimeImg, tropicalImg, appsImg, codingImg, matrixImg, storeImg, lifeguardImg, 
        kitchenImg, waiterImg, airportImg, callcenterImg, hotelImg, aisleImg, gamblingImg, barcelonaImg, 
        manchesterImg, dubaiImg, worldImg, marsImg, zombieworkImg, spacetourImg];
    const iconArray = [catpawIcon, storeIcon, lifeguardIcon, kitchenIcon, waiterIcon, handlingIcon, callcenterIcon, 
        hotelIcon, controlIcon, invadersIcon, phoneIcon, calculatorIcon, BcnIcon, ManIcon, DubIcon, 
        worldIcon, planetIcon, rocketIcon, workingIcon, wwwIcon, twinkleIcon, memoryIcon, appventureLogo, compassIcon, 
        dreambigLogo1, dreambigLogo2];
    const [creditImg, setCreditImg] = useState(null);
    const handleCreditImg = (imgIndex, imgType) => {
        if (imgType === "pic") {
            setCreditImg(picArray[imgIndex]);
        } else {
            setCreditImg(iconArray[imgIndex]);
        }
    }

    const [creditVisibility, setCreditVisibility] = useState({pictures: "show", icons: "hide"});
    const handleCreditVisibility = (activeBtn) => {
        if (activeBtn === "pictures") {
            setCreditVisibility({pictures: "show", icons: "hide"});
        } else {
            setCreditVisibility({pictures: "hide", icons: "show"});
        }
    }

    // Adjusts component styling on render (corrects styles trailing from WelcomeSeal component)
    useEffect(() => {
        const layers = Array.from(document.querySelectorAll("html, body, #root, .App"));
        layers.forEach((item, index) => {
            item.style.height = "initial";
            if (item.nodeName === "HTML") {
                item.style.padding = "0 2.5rem";
            }
            if (item.className === "App") {
                item.style.overflow = "auto";
            }
        })
    })

    return (
        <section className="page-body">
            <LaserBox>
                <div className={`laserbox__content-wrapper laserbox__content-wrapper--${contentState}`}>
                    {
                        activeContent === 0 &&
                        <div>
                            <h2 className="laserbox__paragraph">{personalizedAddress}</h2>
                            <br></br>
                            <div>
                                <span className="laserbox__chunk laserbox__link">
                                    <Link to="/?projects">{pageTexts.mainLink[language]}</Link>
                                </span>
                                <span className="laserbox__chunk">
                                    <p>{pageTexts.purposeEnd[language]}</p>
                                </span>
                            </div>
                            <br></br>
                            <p>{pageTexts.technicalAspects[language]}</p>
                            <br></br>
                            <div className="laserbox__logoBox">
                                <a href="https://react.dev/" target="_blank" rel="noreferrer">
                                    <img className="laserbox__logoItem laserbox__logoItem--big" src={reactLogo} alt="React" />
                                </a>
                                <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                                    <img className="laserbox__logoItem laserbox__logoItem--big" src={sassLogo} alt="Sass"/>
                                </a>
                                <a href="https://kenwheeler.github.io/slick/" target="_blank" rel="noreferrer">
                                    <img className="laserbox__logoItem laserbox__logoItem--big" src={slickLogo} alt="Slick.js"/>
                                </a>
                            </div>
                            <br></br>
                            <div>{pageTexts.githubPromptStart[language]}
                                <span className="laserbox__chunk laserbox__link">
                                    <a href="https://github.com/zombicat79/personal-portfolio" target="_blank" rel="noreferrer">{pageTexts.githubLink[language]}</a>
                                </span>
                                <span className="laserbox__chunk">
                                    <p>{pageTexts.githubPromptEnd[language]}</p>
                                </span>
                            </div>
                            <br></br>
                            <div>
                                <span className="laserbox__chunk laserbox__link">
                                    <p onClick={() => handleActiveContent()}>{pageTexts.assetsBtn[language]}</p>
                                </span>
                                <span className="laserbox__chunk">
                                    <p>{pageTexts.assetsPrompt[language]}</p>
                                </span>
                            </div>
                        </div>
                    }
                    {
                        activeContent === 1 &&
                        <div className="laserbox__content-subwrapper">
                            <p className="laserbox__link" onClick={() => handleActiveContent()}>
                                <span>{"\u2190"} Go back</span>
                            </p>
                            <br></br>
                            
                            <div className="laserbox__creditBox">
                                <div className="laserbox__creditBox--left" onMouseOut={() => handleCreditImg(null)}>
                                    <ul className={`laserbox__bulletList laserbox__bulletList--${creditVisibility.pictures}`}>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(0, "pic")}><i>{pageTexts.creditImg1[language]}</i> &ndash; www.unsplash.com &ndash; Cottonbro Studio</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(1, "pic")}><i>{pageTexts.creditImg2.title[language]}</i> &ndash; www.pixabay.com &ndash; <i>{pageTexts.creditImg2.author[language]}</i></li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(2, "pic")}><i>{pageTexts.creditImg3[language]}</i> &ndash; www.pixabay.com &ndash; Pixelkult</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(3, "pic")}><i>{pageTexts.creditImg4[language]}</i> &ndash; www.unsplash.com &ndash; Juanjo Jaramillo</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(4, "pic")}><i>{pageTexts.creditImg5[language]}</i> &ndash; www.pixabay.com &ndash; Markus Spiske</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(5, "pic")}><i>{pageTexts.creditImg6[language]}</i> &ndash; www.unsplash.com &ndash; Claudio Schwarz</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(6, "pic")}><i>{pageTexts.creditImg7[language]}</i> &ndash; www.unsplash.com &ndash; Edmar Gonçalves</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(7, "pic")}><i>{pageTexts.creditImg8[language]}</i> &ndash; www.unsplash.com &ndash; Vince Fleming</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(8, "pic")}><i>{pageTexts.creditImg9[language]}</i> &ndash; www.pexels.com &ndash; Ketut Subiyanto</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(9, "pic")}><i>{pageTexts.creditImg10[language]}</i> &ndash; www.unsplash.com &ndash; Patrick Campanale</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(10, "pic")}><i>{pageTexts.creditImg11[language]}</i> &ndash; www.unsplash.com &ndash; Kenny Eliason</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(11, "pic")}><i>{pageTexts.creditImg12[language]}</i> &ndash; www.pexels.com &ndash; Andrea Piacquadio</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(12, "pic")}><i>{pageTexts.creditImg13[language]}</i> &ndash; www.unsplash.com &ndash; Mohammad Arrahmanur</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(13, "pic")}><i>{pageTexts.creditImg14[language]}</i> &ndash; www.unsplash.com &ndash; Joakim Honkasalo</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(14, "pic")}><i>{pageTexts.creditImg15[language]}</i> &ndash; www.pexels.com &ndash; Alexey Komissarov</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(15, "pic")}><i>{pageTexts.creditImg16[language]}</i> &ndash; www.unsplash.com &ndash; Kieran Schuler</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(16, "pic")}><i>{pageTexts.creditImg17[language]}</i> &ndash; www.pexels.com &ndash; Mo Ismail</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(17, "pic")}><i>{pageTexts.creditImg18[language]}</i> &ndash; www.pixabay.com &ndash; WikiImages</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(18, "pic")}><i>{pageTexts.creditImg19[language]}</i> &ndash; www.pexels.com &ndash; SpaceX</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(19, "pic")}><i>{pageTexts.creditImg20.description[language]}</i> &ndash; {pageTexts.creditImg20.source[language]} &ndash; {pageTexts.creditImg20.author.intro[language]} <i>{pageTexts.creditImg20.author.prompt[language]}</i></li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(20, "pic")}><i>{pageTexts.creditImg21[language]}</i> &ndash; NASA &ndash; Jet Propulsion Laboratory</li>
                                    </ul>
                                    <ul className={`laserbox__bulletList laserbox__bulletList--${creditVisibility.icons}`}>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(0, "icon")}><i>{pageTexts.creditIcon1[language]}</i> &ndash; www.pngegg.com &ndash; <i>{pageTexts.creditImg2.author[language]}</i></li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(1, "icon")}><i>{pageTexts.creditIcon2[language]}</i> &ndash; www.thenounproject.com &ndash; Adrien Coquet</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(2, "icon")}><i>{pageTexts.creditIcon3[language]}</i> &ndash; www.thenounproject.com &ndash; Gan Khoon Lay</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(3, "icon")}><i>{pageTexts.creditIcon4[language]}</i> &ndash; www.thenounproject.com &ndash; Gan Khoon Lay</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(4, "icon")}><i>{pageTexts.creditIcon5[language]}</i> &ndash; www.thenounproject.com &ndash; ProSymbols</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(5, "icon")}><i>{pageTexts.creditIcon6[language]}</i> &ndash; www.thenounproject.com &ndash; Andrejs Kirma</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(6, "icon")}><i>{pageTexts.creditIcon7[language]}</i> &ndash; www.thenounproject.com &ndash; ImageCatalog</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(7, "icon")}><i>{pageTexts.creditIcon8[language]}</i> &ndash; www.thenounproject.com &ndash; Adrien Coquet</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(8, "icon")}><i>{pageTexts.creditIcon9[language]}</i> &ndash; www.thenounproject.com &ndash; Gan Khoon Lay</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(9, "icon")}><i>{pageTexts.creditIcon10[language]}</i> &ndash; www.thenounproject.com &ndash; IconMark</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(10, "icon")}><i>{pageTexts.creditIcon11[language]}</i> &ndash; www.thenounproject.com &ndash; Romualdas Jurgaitis</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(11, "icon")}><i>{pageTexts.creditIcon12[language]}</i> &ndash; www.thenounproject.com &ndash; Andrew Luetkemeier</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(12, "icon")}><i>{pageTexts.creditIcon13[language]}</i> &ndash; www.pngegg.com &ndash; <i>{pageTexts.creditImg2.author[language]}</i></li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(13, "icon")}><i>{pageTexts.creditIcon14[language]}</i> &ndash; www.pngegg.com &ndash; <i>{pageTexts.creditImg2.author[language]}</i></li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(14, "icon")}><i>{pageTexts.creditIcon15[language]}</i> &ndash; www.pngegg.com &ndash; <i>{pageTexts.creditImg2.author[language]}</i></li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(15, "icon")}><i>{pageTexts.creditIcon16[language]}</i> &ndash; www.pngegg.com &ndash; <i>{pageTexts.creditImg2.author[language]}</i></li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(16, "icon")}><i>{pageTexts.creditIcon17[language]}</i> &ndash; www.pngegg.com &ndash; <i>{pageTexts.creditImg2.author[language]}</i></li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(17, "icon")}><i>{pageTexts.creditIcon18[language]}</i> &ndash; www.thenounproject.com &ndash; Miguel C. Balandrano</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(18, "icon")}><i>{pageTexts.creditIcon19[language]}</i> &ndash; www.thenounproject.com &ndash; Marius Edel</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(19, "icon")}><i>{pageTexts.creditIcon20[language]}</i> &ndash; www.thenounproject.com &ndash; Vectors Point</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(20, "icon")}><i>{pageTexts.creditIcon21[language]}</i> &ndash; www.thenounproject.com &ndash; Uswa KDT</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(21, "icon")}><i>{pageTexts.creditIcon22[language]}</i> &ndash; www.thenounproject.com &ndash; Eliricon</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(22, "icon")}><i>{pageTexts.creditIcon23[language]}</i> &ndash; Appventure Games &ndash; Guillem Espías</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(23, "icon")}><i>{pageTexts.creditIcon24[language]}</i> &ndash; Appventure Games &ndash; Guillem Espías</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(24, "icon")}><i>{pageTexts.creditIcon25[language]}</i> &ndash; Dream Big Association &ndash; Guillem Espías</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(25, "icon")}><i>{pageTexts.creditIcon26[language]}</i> &ndash; Dream Big Association &ndash; Guillem Espías</li>
                                    </ul>
                                </div>
                                <div className="laserbox__creditBox--right">
                                    <img src={creditImg} alt="" className={`laserbox__creditImg laserbox__creditImg--pic laserbox__creditImg--${creditVisibility.pictures}`}/>
                                    <img src={creditImg} alt="" className={`laserbox__creditImg laserbox__creditImg--${creditVisibility.icons}`}/>
                                </div>
                            </div>

                            <div className="laserbox__btnWrapper">
                                <button className={`laserbox__btn laserbox__btn--${creditVisibility.pictures}`} onClick={() => handleCreditVisibility("pictures")}>{pageTexts.creditBtn1[language]}</button>
                                <button className={`laserbox__btn laserbox__btn--${creditVisibility.icons}`} onClick={() => handleCreditVisibility("icons")}>{pageTexts.creditBtn2[language]}</button>
                            </div>
                        </div>
                    }
                </div>
            </LaserBox>
        </section>
    )
}

export default ThePage;