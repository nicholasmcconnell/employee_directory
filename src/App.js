import React, { useState, useEffect } from 'react';
// import React from 'react';

// import logo from './logo.svg';
// import './App.css';
import * as API from "./utils/API";
import SearchBar from './components/SearchBar';
import Header from './components/Header'
import Cards from './components/Cards';
import { titleCase } from 'title-case';

function App() {
  let [employeeList, setEmployeeList] = useState([]);
  const [employeeListMaster, setEmployeeListMaster] = useState([]);
  const [search, setSearch] = useState("");
  // const [error, setError] = useState("");
  //1. user is typing
  //2. as search fills names are filtered to match search
  //3. once complete only matches name

  // console.log("search " + search)

  // useEffect(() => console.log(employeeList), [employeeList]);
  // useEffect(() => console.log(employeeListMaster), [employeeListMaster]);
  useEffect(() => {

    if (!search) {

      setEmployeeList([...employeeListMaster]);
      return;
    }

    let fullName = titleCase(search).split(" ");
    // let fullName[0].charAt(0) = fullName[0].charAt(0).toUpperCase();
    // let fullName[1].charAt(0).toUpperCase();
    // new RegExp('^' + query, 'i');
    
    setEmployeeList(employeeListMaster.filter(employee => {
      // let first = employee.name.first;
      // let last = employee.name.last;
      // let regex = new RegExp(' /' + first + '|' + last + '/g');
      // return event.target.value.match(regex);

      // return fullName.includes(employee.name.first) || fullName.includes(employee.name.last); //// THIS WORKS!

      console.log(employee.name.first, fullName[0]);
     console.log(employee.name.first.startsWith(fullName[0]));
      // console.log(employee.name.first.match(new RegExp('^' + fullName[0], 'i')));
      // return fullName.filter(name => employee.name.first.match(new RegExp('^' + name, 'i'))||employee.name.last.match(new RegExp('^' + name, 'i')));
      // return employee.name.first.match(new RegExp('^' + fullName[0], 'i'));
      // return employee.name.first.startsWith(fullName[0]); 

    }));

  }, [search]);

  useEffect(() => {

    // if (!search) {
    // return;
    // }

    API.search()
      .then(res => {
        setEmployeeList(res.data.results);
        setEmployeeListMaster(res.data.results);
      })
      .catch(err => console.log("error"));


  }, []);



  const handleInputChange = event => {
    console.log("in handleInputChange");
    // setSearch(event.target.value);
    // console.log(event.target.value)
    // 1 get that user has types;
    //2. filter employeelistMaster
    //3. for employes matching first or last name of what user has typed
    //4. set employeelist (not master) to new filtered array
    //5. check it .target is empty string, display employee list master - set employess list to equal employeelistMaster

    //   console.log((event.target.value).charAt(0).toUpperCase());
    //   console.log("in if " + event.target.value)
    //  if(event.target.value.length === 1){

    //    (event.target.value).charAt(0) = event.target.value.charAt(0).toUpperCase();
    //  }
    setSearch(event.target.value);


    // {return employee.name.first === event.target.value || employee.name.last === event.target.value}

    // var matches = str.match( /word1|word2/g );


    // setEmployeeList(employeeListMaster.filter(employee => {
    //   // let first = employee.name.first;
    //   // let last = employee.name.last;
    //   // let regex = new RegExp(' /' + first + '|' + last + '/g');
    //   // return event.target.value.match(regex);
    //   return employee.name.first === event.target.value || employee.name.last === event.target.value

    // }));
    // console.log(employeeList);

    // if (!event.target.value) {
    //   // setEmployeeList([...employeeListMaster])
    //   setSearch("");
    // }

    //Vince -- maybe include results that include empe.titel and .first and .last and see if any of those are equal than show them
    // use include '==' to see if part ot word exists in event.target.value --
  }

  return (

    <div className="App">
      <header className="App-header">
        <Header />

      </header>

      <SearchBar
        // handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        result={search}
      />
      {/* <div><SearchBar /></div> */}
      {employeeList.map(employee => (

        <Cards key={employee.id.value} employee={employee} />
      ))}
    </div>
  );
}

export default App;
