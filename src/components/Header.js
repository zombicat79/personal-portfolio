import React from 'react';

function Header(props) {
    return (
        <section className={"header" + " " + "header--"+props.headerIsUnfolded}>
            <div className="header__upper">
                <div>
                    <img 
                        className="header__logo" src={props.logoSrc} alt={props.logoAlt} 
                        width={props.logoSize} height={props.logoSize}
                        onClick={(e) => {
                                props.handleHeaderState();
                                setTimeout(() => {
                                    props.handleSealState()
                                }, 1500);
                            }
                        }
                    />
                </div>
                <nav>
                    <ul className="header__linkList">
                        <li className="header__link">Settings</li>
                        <li className="header__link">About this page</li>
                        <li className="header__link">About myself</li>
                        <li className="header__link">About ZombieCat</li>
                        <li className="header__link">Contact</li>
                        <li className="header__link">Download CV</li>
                    </ul>
                </nav>
            </div>

            <div className="header__lower">
                <div className="header__movingBar">
                    <div className="header__fluctuatingLight"></div>
                </div>
            </div>
        </section>
    )
}

export default Header;