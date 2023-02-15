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
import RangeSlider from './components/RangeSlider';

const viewport = document.getElementById("root");

function App() {
  const [initSealIsShrunk, setInitSealIsShrunk] = useState(false);
  const handleSealState = () => {
      setInitSealIsShrunk((prevState) => {
          return !prevState;
      })
  }

  const [hasVisitorInfo, setHasVisitorInfo] = useState(false);
  const [visitorInfo, setVisitorInfo] = useState({name: "", org: ""});

  console.log(visitorInfo);

  return (
    <main className="App">
      {
        !hasVisitorInfo &&
        <WelcomeSeal 
          logoImages={[logo, logoHover]} 
          logoAlt={"Cartoon-like logo depicting a cat"} 
          tradeName={"ZombieCat"}
          role={"Full Stack Developer"}
          actionTexts={["Activate cat-enhanced view", "Go see (zombie)cat stuff", "Choose your cat dialect"]}
          viewport={viewport}
          initSealIsShrunk={initSealIsShrunk}
          handleSealState={handleSealState}
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
            logoSrc={logo}
            logoSize={50}
            logoAlt={"Cartoon-like logo depicting a cat"}
            burgerSize={40} 
            burgerColor={"#fff"}
          />
          <FeatureSection />
          <RangeSlider 
            min={1}
            max={3} 
            size={"big"}
            name={"time"} 
            stepOptions={["Past", "Present", "Future"]}
            initialStep={1}
          />
        </div>
      }
    </main>
  );
}

export default App;
