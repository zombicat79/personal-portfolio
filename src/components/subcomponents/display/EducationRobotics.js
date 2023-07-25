import React, { useContext } from 'react';

import { LangContext } from "../../../App";
import { educationRobotics } from "../../../texts/displaySection_texts";

import droneIcon from './../../../images/icos/drone.png';
import robotarmIcon from './../../../images/icos/industrial-arm.png';
import robotcleanIcon from './../../../images/icos/cleaning-robot.png';

function EducationRobotics(props) {
    const language = useContext(LangContext)

    return (
        <div className="display-section__textBox">
            <p className="display-section__title">{educationRobotics.degreeName[language]}</p>
            <p className="display-section__subtitle">{educationRobotics.institution[language]}</p>
            <br></br>
            <p>{educationRobotics.intro[language].paragraph1}</p>
            <br></br>
            <p>{educationRobotics.intro[language].paragraph2}</p>
            <br></br>
            <p>{educationRobotics.intro[language].paragraph3}</p>
            <br></br>
            <p>{educationRobotics.intro[language].paragraph4}</p>
            <div>
                <div className="display-section__logoBox">
                    <img className="display-section__logoItem display-section__logoItem--extra-big" src={droneIcon} alt="Robot drone"/>
                    <img className="display-section__logoItem display-section__logoItem--extra-big" src={robotarmIcon} alt="Industrial robot arm"/>
                </div>
                <div className="display-section__logoBox">
                    <img className="display-section__logoItem display-section__logoItem--extra-big" src={robotcleanIcon} alt="Cleaning robot"/>
                </div>
            </div>
            <p>{educationRobotics.intro[language].paragraph5}</p>
        </div>
    )
}

export default EducationRobotics;