import './App.scss';

import RangeSlider from './components/RangeSlider';

function App() {
  return (
    <div className="App">
      {<RangeSlider 
        min={1}
        max={3} 
        size={"big"}
        name={"time"} 
        stepOptions={["Past", "Present", "Future"]}
        initialStep={1}
      />}
      {/* <RangeSlider 
        min={1}
        max={10} 
        size={"big"}
        name={"time"} 
        stepOptions={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        initialStep={0} 
      /> */}
    </div>
  );
}

export default App;
