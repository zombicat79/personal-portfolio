import React from 'react';
import { Outlet } from 'react-router-dom';

import WelcomeSeal from "./../WelcomeSeal";
import VisitorQuestionnaire from "./../VisitorQuestionnaire";
import Header from './../Header';
import Footer from './../Footer';

import wSealTexts from './../../texts/welcomeSeal_texts';

const viewport = document.getElementById("root");

function Layout(props) {
    const { state } = props;
    const { methods } = props;
    const { assets } = props;
    
    return(
        <main className="App">
            {
                !state.initSealIsShrunk &&
                <WelcomeSeal 
                    logoImages={[assets.logo, assets.logoHover]} 
                    logoAlt={"Cartoon-like logo depicting a cat"} 
                    tradeName={"ZombieCat"}
                    role={wSealTexts.role[state.language]}
                    actionTexts={wSealTexts.actionTexts[state.language]}
                    viewport={viewport}
                    initSealIsShrinking={state.initSealIsShrinking}
                    initSealIsShrunk={state.initSealIsShrunk}
                    handleSealState={methods.handleSealState}
                    handleLanguage={methods.handleLanguage}
                />
            }
            {
                state.initSealIsShrunk &&
                !state.hasVisitorInfo &&
                <VisitorQuestionnaire 
                    btnSubmitIcons={[assets.submitBtn, assets.submitBtnPressed]} 
                    submitBtnAlt={"Cat paw"}
                    setHasVisitorInfo={methods.setHasVisitorInfo}
                    setVisitorInfo={methods.setVisitorInfo}
                />
            }
            {
                state.initSealIsShrunk &&
                state.hasVisitorInfo &&
                <div id="main-page">
                    <Header
                        headerIsUnfolded={state.headerIsUnfolded}
                        headerBrandImages={[assets.logo, assets.logoHover]}
                        headerBrandImgAlt={"Cartoon-like logo depicting a cat"} 
                        logoSize={50}
                        handleHeaderState={methods.handleHeaderState}
                        handleSealState={methods.handleSealState}
                        /* handleMainComponentsVisibility={handleMainComponentsVisibility} */
                    />
                    <Outlet />
                    <Footer 
                        footerBrandImages={[assets.logo, assets.logoHover]} 
                        footerBrandImgAlt={"Cartoon-like logo depicting a cat"} 
                        logoSize={100}
                        handleHeaderState={methods.handleHeaderState}
                     />
                </div>
            }
        </main>
    )
}

export default Layout;