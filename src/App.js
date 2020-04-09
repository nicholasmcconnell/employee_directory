import React, { useEffect } from 'react';
// import React from 'react';

// import logo from './logo.svg';
// import './App.css';
import * as API from "./utils/API";
import SearchBar from './components/SearchBar';
import Header from './components/Header'

function App() {
  // const [employeeList, setEmployeeList] = useState({
    // const [error, setError] = useState("");
   
  // });

  useEffect(() => {

    API.search()
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log("error"));
  });

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
