import React, { useState, useEffect } from 'react';
// import React from 'react';

// import logo from './logo.svg';
// import './App.css';
import * as API from "./utils/API";
import SearchBar from './components/SearchBar';
import Header from './components/Header'
import Cards from './components/Cards';

function App() {
  const [employeeList, setEmployeeList] = useState([]);
  // const [employeeListMaster, setEmployeeListMaster] = useState([]);
  const [search, setSearch] = useState("");
  // const [error, setError] = useState("");
  //1. user is typing
  //2. as search fills names are filtered to match search
  //3. once complete only matches name

  useEffect(() => console.log(employeeList), [employeeList]);
  // useEffect(() => console.log(employeeListMaster), [employeeListMaster]);
  useEffect(() => {

    // if (!search) {
    //   return;
    // }

    API.search()
      .then(res => {
        setEmployeeList(res.data.results);
        // setEmployeeListMaster(res.data.results);

        // console.log(res);
      })
      .catch(err => console.log("error"));


  }, []);

  const handleInputChange = event => {
    console.log("in handleInputChange");
    setSearch(event.target.value);
    console.log(event.target.value)
    //1 get that user has types;
    //2. filter employeelistMaster
    //3. for employes matching first or last name of what user has typed
    //4. set employeelist (not master) to new filtered array
    //5. check it .target is empty string, display employee list master - set employess list to equal employeelistMaster

    // if (!event.target.value) {
    //   setEmployeeList([...employeeListMaster])
    // }

    // const { name, value } = event.target;

    
    // Updating the input's state


  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />

      </header>

      <div><SearchBar /></div>
      {employeeList.map(employee => (

        <Cards key={employee.id.value} employee={employee} />
      ))}

      <SearchBar
        // handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        results={search} 
        />

    </div>
  );
}

export default App;
