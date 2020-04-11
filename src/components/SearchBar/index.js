import React from "react";
import "./style.css";


function SearchBar(props) {
  console.log('in searchbar');
  console.log(props.handleInputChange);


  return (

    <form className="search">
      <div className="form-group">
        <h3>Search:</h3>
        <input
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchBar;
