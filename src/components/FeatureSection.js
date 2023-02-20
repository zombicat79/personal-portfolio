import React, { useState, useEffect } from 'react';

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

        </section>
    )
}

export default FeatureSection;