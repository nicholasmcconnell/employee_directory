import React, { useState, useEffect } from 'react';
import * as API from "./utils/API";
import SearchBar from './components/SearchBar';
import Header from './components/Header'
import Table from './components/Table'
import { titleCase } from 'title-case';

function App() {
  let [employeeList, setEmployeeList] = useState([]);
  const [employeeListMaster, setEmployeeListMaster] = useState([]);
  const [search, setSearch] = useState("");
  let [click, setClick] = useState("1");

  useEffect(() => {
    if (click === "1") {
      click = "0";
      setEmployeeList(employeeList.sort((a, b) => {
        if (a.name.first > b.name.first) { return -1; }
        if (a.name.first < b.name.first) { return 1; }
        return 0;
      }));
      setEmployeeList(setEmployeeList);

    } else if (click === "0") {
      click = "1";
      setEmployeeList(employeeList.sort((a, b) => {
        if (a.name.first < b.name.first) { return -1; }
        if (a.name.first > b.name.first) { return 1; }
        return 0;
      }));
      setEmployeeList(setEmployeeList);
    }
  }, [click]);

  useEffect(() => {
    if (!search) {
      setEmployeeList([...employeeListMaster]);
      return;
    }

    let fullName = titleCase(search).split(" ");

    setEmployeeList(employeeListMaster.filter(employee => {
      if (fullName.length === 0) {
        return;
      } else if (fullName.length === 1) {
        return employee.name.first.includes(fullName[0]) || employee.name.last.includes(fullName[0]);
      } else if (fullName.length === 2) {
        return employee.name.first.includes(fullName[0]) && employee.name.last.includes(fullName[1]);
      }
    }));
  }, [search]);

  useEffect(() => {
    API.search()
      .then(res => {
        setEmployeeList(res.data.results);
        setEmployeeListMaster(res.data.results);
      })
      .catch(err => console.log("error"));
  }, []);

  const handleSort = () => {
    setClick(click);

    if (click === "1") {
      click = "0";
      setClick(click);
    } else if (click === "0") {
      click = "1";
      setClick(click);
    }
  }

  const handleInputChange = event => {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <SearchBar
        handleInputChange={handleInputChange}
        result={search}
      />
      <Table
        employeeList={employeeList}
        handleSort={handleSort}
      />
    </div>
  );
}

export default App;
