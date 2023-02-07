import './App.scss';

import logo from './images/zombiecat-trans-logo.png'

import Header from './components/Header';
import FeatureSection from './components/FeatureSection';
import RangeSlider from './components/RangeSlider';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
