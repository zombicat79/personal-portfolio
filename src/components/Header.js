import React from 'react';

function Header(props) {
    return (
        <section className="header">
            <div>
                <img src={props.logoSrc} alt={props.logoAlt} width={props.logoSize} height={props.logoSize}/>
            </div>
            <div>
                <svg width={props.burgerSize} height={props.burgerSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_429_11066)">
                <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke={props.burgerColor} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_429_11066">
                <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"/>
                </clipPath>
                </defs>
                </svg>
            </div>
        </section>
    )
}

export default Header;