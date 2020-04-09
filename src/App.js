import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        
      <div><SearchBar /></div>
      </header>
        
    </div>
  );
}

export default App;
