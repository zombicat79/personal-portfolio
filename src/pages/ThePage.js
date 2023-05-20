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
import matrixImg from './../images/future-coding.jpg';
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
        // setContentState("invisible");
        setActiveContent((prevState) => {
            return prevState === 0 ? prevState+1 : prevState-1;
        })
        handleContentState(0, 3000);
    }

    const imgArray = [crimeImg, tropicalImg, appsImg, codingImg, matrixImg, storeImg, lifeguardImg, 
        kitchenImg, waiterImg, airportImg, callcenterImg, hotelImg, aisleImg, gamblingImg, barcelonaImg, 
        manchesterImg, dubaiImg, worldImg, marsImg];
    const [creditImg, setCreditImg] = useState(null);
    const handleCreditImg = (imgIndex) => {
        setCreditImg(imgArray[imgIndex]);
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
                        <div>
                            <p className="laserbox__link" onClick={() => handleActiveContent()}>
                                <span>{"\u2190"} Go back</span>
                            </p>
                            <br></br>
                            
                            <div className="laserbox__creditBox">
                                <div className="laserbox__creditBox--left" onMouseOut={() => handleCreditImg(null)}>
                                    <ul className="laserbox__bulletList">
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(0)}>{pageTexts.creditImg1[language]} &ndash; www.unsplash.com &ndash; Cottonbro Studio</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(1)}>{pageTexts.creditImg2.title[language]} &ndash; www.pixabay.com &ndash; <i>{pageTexts.creditImg2.author[language]}</i></li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(2)}>{pageTexts.creditImg3[language]} &ndash; www.pixabay.com &ndash; Pixelkult</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(4)}>{pageTexts.creditImg4[language]} &ndash; www.pixabay.com &ndash; Markus Spiske</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(5)}>{pageTexts.creditImg5[language]} &ndash; www.unsplash.com &ndash; Claudio Schwarz</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(6)}>{pageTexts.creditImg6[language]} &ndash; www.unsplash.com &ndash; Edmar Gonçalves</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(7)}>{pageTexts.creditImg7[language]} &ndash; www.unsplash.com &ndash; Vince Fleming</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(8)}>{pageTexts.creditImg8[language]} &ndash; www.pexels.com &ndash; Ketut Subiyanto</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(9)}>{pageTexts.creditImg9[language]} &ndash; www.unsplash.com &ndash; Patrick Campanale</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(10)}>{pageTexts.creditImg10[language]} &ndash; www.unsplash.com &ndash; Kenny Eliason</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(11)}>{pageTexts.creditImg11[language]} &ndash; www.pexels.com &ndash; Andrea Piacquadio</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(12)}>{pageTexts.creditImg12[language]} &ndash; www.unsplash.com &ndash; Mohammad Arrahmanur</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(13)}>{pageTexts.creditImg13[language]} &ndash; www.unsplash.com &ndash; Joakim Honkasalo</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(14)}>{pageTexts.creditImg14[language]} &ndash; www.pexels.com &ndash; Alexey Komissarov</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(16)}>{pageTexts.creditImg15[language]} &ndash; www.pexels.com &ndash; Mo Ismail</li>
                                        <li className="laserbox__creditItem" onMouseOver={() => handleCreditImg(18)}>{pageTexts.creditImg16[language]} &ndash; www.pexels.com &ndash; SpaceX</li>
                                    </ul>
                                </div>
                                <div className="laserbox__creditBox--right">
                                    <img src={creditImg} alt="" />
                                </div>
                            </div>

                            <br></br>
                            <p>Images</p>
                        </div>
                    }
                </div>
            </LaserBox>
        </section>
    )
}

export default ThePage;