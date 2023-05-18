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
import atoomLogo from './../../src/images/logos/atoom.png';

import worldImg from "./../../src/images/icos/infoItems/world.png";
import saturnImg from "./../../src/images/icos/infoItems/saturn.png";

const infoItems = {
    education: [
        {
            id: "epa1",
            moment: "past",
            name: "criminology",
            imgType: "element",
            src: ubLogo,
            size: "regular"
        }, 
        {
            id: "epa2",
            moment: "past",
            name: "tourism",
            imgType: "element",
            src: uocLogo,
            size: "regular"
        },
        {
            id: "epa3",
            moment: "past",
            name: "social-media",
            imgType: "element",
            src: salleLogo,
            size: "regular"
        },
        {
            id: "epr3",
            moment: "present",
            name: "coding",
            imgType: "element",
            src: ironhackLogo,
            size: "big"
        },
        {
            id: "efu1",
            moment: "future",
            name: "future-coding",
            imgType: "element",
            src: ironhackLogo,
            size: "big"
        }
    ],
    work: [
        {
            id: "wpa1",
            moment: "past",
            name: "supermarket",
            imgType: "element",
            src: storeImg,
            size: "big"
        }, 
        {
            id: "wpa2",
            moment: "past",
            name: "lifeguard",
            imgType: "element",
            src: guardImg,
            size: "big"
        },
        {
            id: "wpa3",
            moment: "past",
            name: "kitchen",
            imgType: "element",
            src: kitchenImg,
            size: "big"
        },
        {
            id: "wpa4",
            moment: "past",
            name: "waiter",
            imgType: "element",
            src: waiterImg,
            size: "big"
        },
        {
            id: "wpa5",
            moment: "past",
            name: "handling",
            imgType: "element",
            src: handlingImg,
            size: "big"
        },
        {
            id: "wpa6",
            moment: "past",
            name: "call-center",
            imgType: "element",
            src: callcenterImg,
            size: "big"
        },
        {
            id: "wpa7",
            moment: "past",
            name: "hotel",
            imgType: "element",
            src: hotelImg,
            size: "big"
        },
        {
            id: "wpa8",
            moment: "past",
            name: "control",
            imgType: "element",
            src: controlImg,
            size: "big"
        },
        {
            id: "wpr1",
            moment: "present",
            name: "atoom",
            imgType: "element",
            src: atoomLogo,
            size: "regular"
        }
    ],
    projects: [],
    location: [
        {
            id: "lpa1",
            moment: "past",
            name: "barcelona",
            imgType: "background",
            src: "",
            size: null
        }, 
        {
            id: "lpa2",
            moment: "past",
            name: "manchester",
            imgType: "background",
            src: "",
            size: null
        },
        {
            id: "lpr1",
            moment: "present",
            name: "dubai",
            imgType: "background",
            src: "",
            size: null
        },
        {
            id: "lfu1",
            moment: "future",
            name: "world",
            imgType: "element",
            src: worldImg,
            size: null
        },
        {
            id: "lfu2",
            moment: "future",
            name: "space",
            imgType: "element",
            src: saturnImg,
            size: null
        }
    ]
}

export default infoItems;