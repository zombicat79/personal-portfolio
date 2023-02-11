import React, {useState} from 'react';

function WelcomeSeal(props) {
    const availableTexts = props.actionTexts;
    const [actionText, setActionText] = useState("");

    const handleTouchpoint = (index) => {
        setActionText(availableTexts[index]);
        handleCtaState();
    }

    const [ctaState, setCtaState] = useState("u-hide");
    const handleCtaState = () => {
        setCtaState("u-show");
    }

    const handleView = () => {
        if (props.viewport.requestFullscreen) {
            props.viewport.requestFullscreen();
        }
    }
    
    return (
        <section className="welcomeSeal u-absolute-center">
            <div className="welcomeSeal__heading">
                <img src={props.logoSrc} alt={props.logoAlt}></img>
                <h1>{props.tradeName}</h1>

                <div className="welcomeSeal__touchPoint welcomeSeal__touchPoint--p1" onClick={(e) => handleTouchpoint(0)}></div>
                <div className="welcomeSeal__touchPoint welcomeSeal__touchPoint--p2" onClick={(e) => handleTouchpoint(1)}></div>
                <div className="welcomeSeal__touchPoint welcomeSeal__touchPoint--p3" onClick={(e) => handleTouchpoint(2)}></div>
            </div>
            <div className="welcomeSeal__subtitle u-blockElm-h-center">
                <h2>{props.role}</h2>
            </div>
            <div className="welcomeSeal__cta u-blockElm-h-center">
                <button className={"btn-primary" + " " + ctaState} onClick={(e) => handleView()}>{actionText}</button>
            </div>
        </section>
    )
}

export default WelcomeSeal;