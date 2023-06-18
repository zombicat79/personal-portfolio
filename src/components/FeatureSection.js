import React, { useState, useEffect } from 'react';

import MilestoneSlider from './subcomponents/feature/MilestoneSlider';

function FeatureSection(props) {
    const [componentVisibility, setComponentVisibility] = useState("disappearing");
    const handleVisibility = (action) => {
        setComponentVisibility(action);
    }
    useEffect(() => {
        setTimeout(() => {
            handleVisibility("appearing");
        }, 500);
    })

    if (props.activeSubsection) {
        return (
            <section className={`feature-section feature-section--${props.moment} feature-section--${componentVisibility}`}>
                <MilestoneSlider
                    moment={props.moment}
                    activeSubsection={props.activeSubsection}
                    activeInfoItem={props.activeInfoItem} 
                    handleActiveInfoItem={props.handleActiveInfoItem}
                />
            </section>
        )
    }
}

export default FeatureSection;