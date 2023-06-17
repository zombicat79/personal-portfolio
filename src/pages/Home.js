import React from 'react';

import DisplaySection from './../components/DisplaySection';
import RangeSlider from './../components/RangeSlider';
import FeatureSection from "./../components/FeatureSection";

function Home(props) {
    const { state } = props;
    const { methods } = props;
    const { assets } = props;

    return (
        <>
            <DisplaySection 
                logoSrc={assets.logo}
                logoAlt={"Cartoon-like logo depicting a cat"}
                visitorInfo={state.visitorInfo}
                moment={state.moment}
                activeSubsection={state.activeSubsection}
                hoverSubsection={state.hoverSubsection}
                activeInfoItem={state.activeInfoItem}
                handleActiveSubsection={methods.handleActiveSubsection}
                handleHoverSubsection={methods.handleHoverSubsection}
                handleHeaderState={methods.handleHeaderState}
                handleActiveInfoItem={methods.handleActiveInfoItem}
                handleTimeLine={methods.handleTimeline}
                personalizeParagraph={methods.personalizeParagraph}
                /* mainComponentsVisibility={mainComponentsVisibility}
                handleMainComponentsVisibility={handleMainComponentsVisibility} */
            />
            <RangeSlider 
                min={1}
                max={3} 
                size={"big"}
                name={"time"} 
                initialStep={1}
                activeSubsection={state.activeSubsection}
                handleTimeline={methods.handleTimeline}
                handleActiveInfoItem={methods.handleActiveInfoItem}
                moment={state.moment}
            />
            { state.activeSubsection !== "home" &&
              <FeatureSection
                moment={state.moment}
                activeSubsection={state.activeSubsection}
                activeInfoItem={state.activeInfoItem}
                handleActiveInfoItem={methods.handleActiveInfoItem}
              />
            }
        </>
    )
}

export default Home;