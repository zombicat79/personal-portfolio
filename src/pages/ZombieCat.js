import React, { useContext } from 'react';

import LaserBox from './../components/layout/LaserBox';
import { LangContext } from "./../App";

function ZombieCat(props) {
    const language = useContext(LangContext);

    return (
        <section className="page-body">
            <LaserBox>
                <div className="content-wrapper">
                    
                </div>
            </LaserBox>
        </section>
    )
}

export default ZombieCat;