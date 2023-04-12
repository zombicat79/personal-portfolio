import React, { useState, useEffect } from 'react';

function LaserBox(props) {
    const [topBorderStatus, setTopBorderStatus] = useState(["invisible"]);
    const [rightBorderStatus, setRightBorderStatus] = useState(["invisible"]);
    const [bottomBorderStatus, setBottomBorderStatus] = useState(["invisible"]);
    const [leftBorderStatus, setLeftBorderStatus] = useState(["invisible"]);
    const [pointerStatus, setPointerStatus] = useState([false, false, false, false]);
    
    const drawLaserbox = () => {
        setPointerStatus([true, false, true, false]);
        setTopBorderStatus("printing-horizontal");
        setBottomBorderStatus("printing-horizontal");
        setTimeout(() => {
            setPointerStatus([false, true, false, true]);
            setTopBorderStatus("completed-horizontal");
            setBottomBorderStatus("completed-horizontal");
            setRightBorderStatus("printing-vertical");
            setLeftBorderStatus("printing-vertical");
            setTimeout(() => {
                setPointerStatus([false, false, false, false]);
                setRightBorderStatus("completed-vertical");
                setLeftBorderStatus("completed-vertical");
                setTimeout(() => {
                    setTopBorderStatus("top-glowing");
                    setRightBorderStatus("right-glowing");
                    setBottomBorderStatus("bottom-glowing");
                    setLeftBorderStatus("left-glowing");
                }, 500)
            }, 2500)
        }, 2500)
    }
    
    useEffect(() => {
        drawLaserbox();
    }, [])
    
    return (
        <section className="page-body">
            <div className={`advancing-border advancing-border--top advancing-border--${topBorderStatus}`}>
                <div className={`advancing-border__pointer advancing-border__pointer--right advancing-border__pointer--${pointerStatus[0]}`}></div>
            </div>
            <div className={`advancing-border advancing-border--right advancing-border--${rightBorderStatus}`}>
                <div className={`advancing-border__pointer advancing-border__pointer--bottom advancing-border__pointer--${pointerStatus[1]}`}></div>
            </div>
            <div className={`advancing-border advancing-border--bottom advancing-border--${bottomBorderStatus}`}>
                <div className={`advancing-border__pointer advancing-border__pointer--left advancing-border__pointer--${pointerStatus[2]}`}></div>
            </div>
            <div className={`advancing-border advancing-border--left advancing-border--${leftBorderStatus}`}>
                <div className={`advancing-border__pointer advancing-border__pointer--top advancing-border__pointer--${pointerStatus[3]}`}></div>
            </div>

            <p>{props.children}</p>
        </section>
    )
}

export default LaserBox;