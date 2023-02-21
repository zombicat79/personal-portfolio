import React, {useState} from 'react';

import './App.scss';

import logo from './images/zombiecat-trans-logo.png';
import logoHover from './images/zombiecat-hover-logo.png';

import submitBtn from './images/icos/cat-paw-hollow-trans.png';
import submitBtnPressed from './images/icos/cat-paw-full-trans.png';

import WelcomeSeal from './components/WelcomeSeal';
import VisitorQuestionnaire from './components/VisitorQuestionnaire';
import Header from './components/Header';
import FeatureSection from './components/FeatureSection';
import DisplaySection from './components/DisplaySection';
import RangeSlider from './components/RangeSlider';

import wSealTexts from './texts/welcomeSeal_texts';
export const LangContext = React.createContext(null);

const viewport = document.getElementById("root");

function App() {
  const [language, setLanguage] = useState("eng");
  const handleLanguage = (lang) => {
    setLanguage(lang);
  }
  
  const [initSealIsShrunk, setInitSealIsShrunk] = useState(false);
  const handleSealState = () => {
    setInitSealIsShrunk((prevState) => {
        return !prevState;
    })
  }

  const [headerIsUnfolded, setHeaderIsUnfolded] = useState(false);
  const handleHeaderState = () => {
    setHeaderIsUnfolded((prevState) => {
        return !prevState;
    })
  }

  const [hasVisitorInfo, setHasVisitorInfo] = useState(false);
  const [visitorInfo, setVisitorInfo] = useState({name: "", org: ""});

  const [moment, setMoment] = useState("present");
  const handleTimeline = (value) => {
    console.log(value)
    switch(value) {
      case "1":
        setMoment("past");
        break;
      case "2":
        setMoment("present")
        break;
      default:
        setMoment("future")
    }
  }

  return (
    <LangContext.Provider value={language}>
      <main className="App">
        {
          !initSealIsShrunk &&
          <WelcomeSeal 
            logoImages={[logo, logoHover]} 
            logoAlt={"Cartoon-like logo depicting a cat"} 
            tradeName={"ZombieCat"}
            role={wSealTexts.role[language]}
            actionTexts={wSealTexts.actionTexts[language]}
            viewport={viewport}
            initSealIsShrunk={initSealIsShrunk}
            handleSealState={handleSealState}
            handleLanguage={handleLanguage}
          />
        }
        {
          initSealIsShrunk &&
          !hasVisitorInfo &&
          <VisitorQuestionnaire 
            btnSubmitIcons={[submitBtn, submitBtnPressed]} 
            submitBtnAlt={"Cat paw"}
            setHasVisitorInfo={setHasVisitorInfo}
            setVisitorInfo={setVisitorInfo}
          />
        }
        
        {
          initSealIsShrunk &&
          hasVisitorInfo &&
          <div>
            <Header
              headerIsUnfolded={headerIsUnfolded}
              logoSrc={logo}
              logoSize={50}
              logoAlt={"Cartoon-like logo depicting a cat"}
              burgerSize={40} 
              burgerColor={"#fff"}
              handleHeaderState={handleHeaderState}
              handleSealState={handleSealState}
            />
            <DisplaySection 
              logoSrc={logo}
              logoAlt={"Cartoon-like logo depicting a cat"}
              visitorInfo={visitorInfo}
              subsection="location"
              moment={moment}
              handleHeaderState={handleHeaderState}
            />
            <RangeSlider 
              min={1}
              max={3} 
              size={"big"}
              name={"time"} 
              stepOptions={["past", "present", "future"]}
              initialStep={1}
              handleTimeline={handleTimeline}
            />
            <FeatureSection 
              burgerSize={40} 
              burgerColor={"#000"}
            />
          </div>
        }
      </main>
    </LangContext.Provider>
  );
}

export default App;
