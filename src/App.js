// import React, { useState, useEffect } from 'react';
import React from 'react';

// import logo from './logo.svg';
// import './App.css';
// import * as API from "./utils/API";
import SearchBar from './components/SearchBar';
import Header from './components/Header'

function App() {
  // const [developerState, setDeveloperState] = useState({
   
  // });

  // useEffect(() => {
  //   // For demonstration purposes, we mock an API call.
  //   API.getDeveloper.then((res) => {
  //     setDeveloperState(res);
  //     console.log("Developer State:");
  //     console.log(developerState);
  //   });
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        
      </header>
        
      <div><SearchBar /></div>
    </div>
  );
}

export default App;
