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
import Footer from './components/Footer';

import wSealTexts from './texts/welcomeSeal_texts';
export const LangContext = React.createContext(null);

const viewport = document.getElementById("root");

function App() {
  const [language, setLanguage] = useState("eng");
  const handleLanguage = (lang) => {
    setLanguage(lang);
  }
  
  const [initSealIsShrinking, setInitSealIsShrinking] = useState(false);
  const [initSealIsShrunk, setInitSealIsShrunk] = useState(false);
  const handleSealState = (state) => {
    if (state === "shrinking") {
      setTimeout(() => {
        setInitSealIsShrunk((prevState) => {
          return !prevState;
        })
      }, 2000);
      
      setInitSealIsShrinking((prevState) => {
        return !prevState;
      });
    }

    if (state === "shrunk") {
      setTimeout(() => {
        setInitSealIsShrinking((prevState) => {
          return !prevState;
        })
      }, 1000);
      
      setInitSealIsShrunk((prevState) => {
        return !prevState;
      });
    }
  }

  const [hasVisitorInfo, setHasVisitorInfo] = useState(false);
  const [visitorInfo, setVisitorInfo] = useState({name: "", org: ""});

  const [moment, setMoment] = useState("present");
  const handleTimeline = (value) => {
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

  const [activeSubsection, setActiveSubsection] = useState("home");
  const handleActiveSubsection = (section) => {
    setActiveSubsection(section);
  }

  const [hoverSubsection, setHoverSubsection] = useState("");
  const handleHoverSubsection = (section) => {
    setHoverSubsection(section);
  }

  const [activeInfoItem, setActiveInfoItem] = useState("");
  const handleActiveInfoItem = (item) => {
    setActiveInfoItem(item);
  }


  /* const [mainComponentsVisibility, setMainComponentsVisibilty] = useState({
    display: "disappearing",
    slider: "disappearing",
    feature: "disappearing"
  });
  const handleMainComponentsVisibility = (component) => {
    if (mainComponentsVisibility[component] === "disappearing") {
      setMainComponentsVisibilty(() => {
        for (let mainComponent in mainComponentsVisibility) {
          if (mainComponent === component) {
            mainComponentsVisibility[mainComponent] = "appearing";
          }
        }
        return mainComponentsVisibility;
      })
    }

    if (mainComponentsVisibility[component] === "appearing") {
      setMainComponentsVisibilty(() => {
        for (let mainComponent in mainComponentsVisibility) {
          if (mainComponent === component) {
            mainComponentsVisibility[mainComponent] = "disappearing";
          }
        }
        return mainComponentsVisibility;
      })
    }
  } */

  const [headerIsUnfolded, setHeaderIsUnfolded] = useState(false);
  const handleHeaderState = () => {
    setHeaderIsUnfolded((prevState) => {
        return !prevState;
    })
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
            initSealIsShrinking={initSealIsShrinking}
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
          <div id="main-page">
            <Header
              headerIsUnfolded={headerIsUnfolded}
              headerBrandImages={[logo, logoHover]}
              headerBrandImgAlt={"Cartoon-like logo depicting a cat"} 
              logoSize={50}
              handleHeaderState={handleHeaderState}
              handleSealState={handleSealState}
              /* handleMainComponentsVisibility={handleMainComponentsVisibility} */
            />
            <DisplaySection 
              logoSrc={logo}
              logoAlt={"Cartoon-like logo depicting a cat"}
              visitorInfo={visitorInfo}
              moment={moment}
              activeSubsection={activeSubsection}
              hoverSubsection={hoverSubsection}
              activeInfoItem={activeInfoItem}
              handleActiveSubsection={handleActiveSubsection}
              handleHoverSubsection={handleHoverSubsection}
              handleHeaderState={handleHeaderState}
              handleActiveInfoItem={handleActiveInfoItem}
              /* mainComponentsVisibility={mainComponentsVisibility}
              handleMainComponentsVisibility={handleMainComponentsVisibility} */
            />
            <RangeSlider 
              min={1}
              max={3} 
              size={"big"}
              name={"time"} 
              initialStep={1}
              activeSubsection={activeSubsection}
              handleTimeline={handleTimeline}
              handleActiveInfoItem={handleActiveInfoItem}
            />
            { activeSubsection !== "home" &&
              <FeatureSection
                moment={moment}
                activeSubsection={activeSubsection}
                activeInfoItem={activeInfoItem}
                handleActiveInfoItem={handleActiveInfoItem}
              />
            }
            <Footer footerBrandImages={[logo, logoHover]} footerBrandImgAlt={"Cartoon-like logo depicting a cat"} logoSize={100} />
          </div>
        }
      </main>
    </LangContext.Provider>
  );
}

export default App;
