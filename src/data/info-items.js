import ubLogo from "./../../src/images/icos/infoItems/ub.png";
import uocLogo from "./../../src/images/icos/infoItems/uoc.png";
import salleLogo from "./../../src/images/icos/infoItems/salle.png";
import ironhackLogo from "./../../src/images/icos/infoItems/ironhack.png";

import storeImg from './../../src/images/icos/infoItems/supermarket.png';
import guardImg from './../../src/images/icos/infoItems/lifeguard.png';
import kitchenImg from './../../src/images/icos/infoItems/kitchen.png';
import waiterImg from './../../src/images/icos/infoItems/waiter.png';
import handlingImg from './../../src/images/icos/infoItems/handling.png';
import callcenterImg from './../../src/images/icos/infoItems/call-center.png';
import hotelImg from './../../src/images/icos/infoItems/hotel.png';
import controlImg from './../../src/images/icos/infoItems/control.png';

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
        {
            id: "efu1",
            moment: "future",
            name: "future-coding",
            imgType: "element",
            src: ironhackLogo
        }
    ],
    work: [
        {
            id: "wpa1",
            moment: "past",
            name: "supermarket",
            imgType: "element",
            src: storeImg
        }, 
        {
            id: "wpa2",
            moment: "past",
            name: "lifeguard",
            imgType: "element",
            src: guardImg
        },
        {
            id: "wpa3",
            moment: "past",
            name: "kitchen",
            imgType: "element",
            src: kitchenImg
        },
        {
            id: "wpa4",
            moment: "past",
            name: "waiter",
            imgType: "element",
            src: waiterImg
        },
        {
            id: "wpa5",
            moment: "past",
            name: "handling",
            imgType: "element",
            src: handlingImg
        },
        {
            id: "wpa6",
            moment: "past",
            name: "call-center",
            imgType: "element",
            src: callcenterImg
        },
        {
            id: "wpa7",
            moment: "past",
            name: "hotel",
            imgType: "element",
            src: hotelImg
        },
        {
            id: "wpa8",
            moment: "past",
            name: "control",
            imgType: "element",
            src: controlImg
        }
    ],
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