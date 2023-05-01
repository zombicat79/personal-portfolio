import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import Layout from './components/layout/Layout';

import Home from './pages/Home';
import ThePage from './pages/ThePage';
import Myself from './pages/Myself';
import Contact from './pages/Contact';
import ZombieCat from './pages/ZombieCat';

import logo from './images/zombiecat-trans-logo.png';
import logoHover from './images/zombiecat-hover-logo.png';

import submitBtn from './images/icos/cat-paw-hollow-trans.png';
import submitBtnPressed from './images/icos/cat-paw-full-trans.png';

export const LangContext = React.createContext(null);

function App() {
  // *** General state + methods ***
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

  // *** Common use helper functions ***
  // Function used to include the visitor's name in selected content paragraphs
  const personalizeParagraph = (insertInfo, searchTerm, paragraph) => {
    if (insertInfo === "name") {
        return paragraph.replace(searchTerm, `${searchTerm}, ${visitorInfo.name}`);
    } else {
        return paragraph.replace(searchTerm, `${searchTerm} ${visitorInfo.org}`);
    }
  } 

  // *** Props packages to be passed down to the different routes ***
  const state = {
    language: language,
    initSealIsShrinking: initSealIsShrinking,
    initSealIsShrunk: initSealIsShrunk,
    hasVisitorInfo: hasVisitorInfo,
    visitorInfo: visitorInfo,
    moment: moment,
    activeSubsection: activeSubsection,
    hoverSubsection: hoverSubsection,
    activeInfoItem: activeInfoItem,
    headerIsUnfolded: headerIsUnfolded
  }

  const methods = {
    handleSealState: handleSealState,
    handleLanguage: handleLanguage,
    setHasVisitorInfo: setHasVisitorInfo,
    setVisitorInfo: setVisitorInfo,
    handleHeaderState: handleHeaderState,
    handleActiveSubsection: handleActiveSubsection,
    handleHoverSubsection: handleHoverSubsection,
    handleActiveInfoItem: handleActiveInfoItem,
    handleTimeline: handleTimeline,
    personalizeParagraph: personalizeParagraph
  }

  const assets = {
    logo: logo,
    logoHover: logoHover,
    submitBtn: submitBtn,
    submitBtnPressed: submitBtnPressed
  }

  return (
    <LangContext.Provider value={language}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout state={state} methods={methods} assets={assets} />} >
            <Route index element={<Home state={state} methods={methods} assets={assets} />} />
            <Route path="about">
              <Route index element={<Myself />} />
              <Route path="thispage" element={<ThePage state={state} methods={methods} />} />
              <Route path="myself" element={<Myself assets={assets}/>} />
              <Route path="zombiecat" element={<ZombieCat />} />
            </Route>
            <Route path="contact" element={<Contact methods={methods} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangContext.Provider>
  );
}

export default App;
