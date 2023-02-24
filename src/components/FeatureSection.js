import React, { useState, useEffect } from 'react';

import MilestoneSlider from './subcomponents/feature/milestoneSlider';

function FeatureSection() {
    const [componentVisibility, setComponentVisibility] = useState("disappearing");
    const handleVisibility = (action) => {
        setComponentVisibility(action);
    }
    useEffect(() => {
        setTimeout(() => {
            handleVisibility("appearing");
        }, 3000);
    })

    return (
        <section className={"feature-section" + " " + "feature-section--"+componentVisibility}>
            <MilestoneSlider />
        </section>
    )
}

export default FeatureSection;