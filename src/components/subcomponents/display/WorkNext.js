import React, { useState, useEffect, useContext } from 'react';

import { LangContext } from "../../../App";
import { workNext } from "../../../texts/displaySection_texts";

import cloudImg from "./../../../images/icos/cloud.png";
import sunImg from "./../../../images/icos/smiling-sun.png";

function WorkNext(props) {
    const language = useContext(LangContext);

    // Manages opacities within the interactive cloud image composition
    const initialOpacities = {
        cloud: {opacity: 1},
        sun: {opacity: 0},
        orgText: {opacity: 0}
    }
    const [imgOpacities, setImgOpacities] = useState(initialOpacities);
    const handleOpacities = (cloudOpacity, sunOpacity, textOpacity) => {
        if (cloudOpacity === 1 && sunOpacity === 0 && textOpacity === 0) {
            setImgOpacities(initialOpacities);
        } else {
            setImgOpacities({
                cloud: {opacity: cloudOpacity},
                sun: {opacity: sunOpacity},
                orgText: {opacity: textOpacity}
            })
        }
    }

    // Determines position of cloud image before and while dragging
    const [dragStart, setDragStart] = useState({x: null, y: null});
    const [dragPosition, setDragPosition] = useState({x: null, y: null});
    const calculateDrag = (event, mode) => {
        if (mode === "start") {
            setDragStart({
                x: event.screenX,
                y: event.screenY
            })
        } 
        if (mode === "move")  {
            setDragPosition({
                x: event.screenX,
                y: event.screenY
            })
        }
    }

    // Sets cloud image composition opacities relative to drag increase-decrease
    const calculateDragOpacities = () => {
        /* Establish viewport size and diagonal value of its rectangle according to 
        the Pythagorean theorem ----> D = √(height² + width²) */
        const viewportSize = {x: window.innerWidth, y: window.innerHeight};
        const viewportDiagonal = Math.sqrt((viewportSize.x ** 2 + viewportSize.y ** 2));
        
        /* Establish drag surface size and diagonal value of its rectangle according to 
        the Pythagorean theorem ----> D = √(height² + width²) */
        const dragSurfaceSize = {
            x: Math.abs(dragStart.x) - Math.abs(dragPosition.x),
            y: Math.abs(dragStart.y) - Math.abs(dragPosition.y)
        }
        const dragSurfaceDiagonal = Math.sqrt((dragSurfaceSize.x ** 2 + dragSurfaceSize.y ** 2));
        
        /* Establish an actionable ratio between viewport diagonal and drag surface diagonal. 
        Aim is to dynamically apply it to calculate changing opacities  */
        const opacityRatio = (dragSurfaceDiagonal / viewportDiagonal) * 6;
        let formattedOpacityRatio = +opacityRatio.toFixed(2);
        if (formattedOpacityRatio > 1) formattedOpacityRatio = 1
        
        setImgOpacities({
            cloud: {opacity: 1 - formattedOpacityRatio},
            sun: {opacity: 0 + formattedOpacityRatio},
            // orgText: {opacity: initialOpacities.orgText},
            orgText: {opacity: 0 + formattedOpacityRatio}
        })
    }

    // Recalculate image composition opacities every time the cloud gets dragged
    useEffect(calculateDragOpacities, [dragPosition])

    const [textPosition, setTextPosition] = useState("hiding");
    const handleTextPosition = (mode) => {
        setTextPosition(mode)
    }

    return (
        <div className="display-section__textBox" onDragLeave={(e) => {handleTextPosition("showing"); handleOpacities(0, 0, 1)}}>
            <p className="display-section__title">{workNext.workplace[language]}</p>
            <br></br>
            <p>{workNext.intro[language].paragraph1}</p>
            <br></br>
            <p>{workNext.intro[language].paragraph2}</p>
            <br></br>
            <p>{workNext.intro[language].paragraph3}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workNext.intro[language].technology1}</li>
                <li>{workNext.intro[language].technology2}</li>
                <li>{workNext.intro[language].technology3}</li>
                <li>{workNext.intro[language].technology4}</li>
                <li>{workNext.intro[language].technology5}</li>
                <li>{workNext.intro[language].technology6}</li>
                <li>{workNext.intro[language].technology7}</li>
            </ul>
            <br></br>
            <p>{workNext.intro[language].paragraph4}</p>
            <br></br>
            <ul className="display-section__bulletList">
                <li>{workNext.intro[language].wish1}</li>
                <li>{workNext.intro[language].technology2}</li>
                <li>{workNext.intro[language].technology3}</li>
                <li>{workNext.intro[language].technology4}</li>
                <li>{workNext.intro[language].technology5}</li>
                <li>{workNext.intro[language].technology6}</li>
                <li>{workNext.intro[language].technology7}</li>
            </ul>
            <br></br>
            <p>{workNext.intro[language].paragraph7}</p>
            <br></br>
            <div>
                <div className="display-section__logoBox org-name-wrapper">
                    <img className="cover-img cover-img--sun" 
                         src={sunImg} 
                         alt="cartoon-like smiling sun"
                         style={imgOpacities.sun}
                    />
                    <img className="cover-img" 
                         src={cloudImg} 
                         alt="view blocking cloud"
                         style={imgOpacities.cloud}
                         onDragStart={(e) => calculateDrag(e, "start")}
                         onDrag={(e) => calculateDrag(e, "move")}
                         onDragEnd={(e) => {handleTextPosition(); handleOpacities(1, 0, 0)}}
                    />
                    <p className={`beating-title beating-title--${textPosition}`} 
                       style={imgOpacities.orgText}>
                       
                       {props.visitorInfo.org}
                       
                    </p>
                </div>  
            </div>
        </div>
    )
}

export default WorkNext;