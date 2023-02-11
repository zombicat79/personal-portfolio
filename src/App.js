import './App.scss';

import logo from './images/zombiecat-trans-logo.png'

import WelcomeSeal from './components/WelcomeSeal';
import Header from './components/Header';
import FeatureSection from './components/FeatureSection';
import RangeSlider from './components/RangeSlider';

const viewport = document.getElementById("root");

function App() {
  return (
    <main className="App">
      <WelcomeSeal 
        logoSrc={logo} 
        logoAlt={"Cartoon-like logo depicting a cat"} 
        tradeName={"ZombieCat"}
        role={"Full Stack Developer"}
        actionTexts={["Activate cat-enhanced view", "Go see cat stuff", "Choose your language"]}
        viewport={viewport}
      />
      {/* <Header
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
      /> */}
    </main>
  );
}

export default App;
