import ubLogo from "./../../src/images/icos/infoItems/ub.png";
import uocLogo from "./../../src/images/icos/infoItems/uoc.png";
import salleLogo from "./../../src/images/icos/infoItems/salle.png";
import ironhackLogo from "./../../src/images/icos/infoItems/ironhack.png";

import worldImg from "./../../src/images/icos/infoItems/world.png";
import saturnImg from "./../../src/images/icos/infoItems/saturn.png";

const infoItems = {
    education: [
        {
            id: "epa1",
            moment: "past",
            name: "criminology",
            imgType: "element",
            src: ubLogo
        }, 
        {
            id: "epa2",
            moment: "past",
            name: "tourism",
            imgType: "element",
            src: uocLogo
        },
        {
            id: "epa3",
            moment: "past",
            name: "social-media",
            imgType: "element",
            src: salleLogo
        },
        {
            id: "epr3",
            moment: "present",
            name: "coding",
            imgType: "element",
            src: ironhackLogo
        },
    ],
    work: [],
    projects: [],
    location: [
        {
            id: "lpa1",
            moment: "past",
            name: "barcelona",
            imgType: "background",
            src: ""
        }, 
        {
            id: "lpa2",
            moment: "past",
            name: "manchester",
            imgType: "background",
            src: "",
        },
        {
            id: "lpr1",
            moment: "present",
            name: "dubai",
            imgType: "background",
            src: ""
        },
        {
            id: "lfu1",
            moment: "future",
            name: "world",
            imgType: "element",
            src: worldImg
        },
        {
            id: "lfu2",
            moment: "future",
            name: "space",
            imgType: "element",
            src: saturnImg
        }
    ]
}

export default infoItems;