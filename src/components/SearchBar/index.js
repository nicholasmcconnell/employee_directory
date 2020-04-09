import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar(props) {
  return (
    <div className="container">

      <form className="search">
        <div className="form-group">
          <label htmlFor="language">Search:</label>
          <input type="password" className="form-control" id="search" placeholder="Search"></input>
          <button type="submit" className="btn btn-primary">Search</button>


        </div>
      </form>
    </div>


//API call function needs to be converted to newer syntax
// searchMovies = query => {
//     API.search(query)
//       .then(res => this.setState({ result: res.data }))
//       .catch(err => console.log(err));
//   };
    //API week 20 activity 10

//     <form>
//       <div class="form-group">
//         <label for="exampleInputEmail1">Email address</label>
//         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//           <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
// </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1">Password</label>
//           <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
// </div>
//           <div class="form-group form-check">
//             <input type="checkbox" class="form-check-input" id="exampleCheck1">
//               <label class="form-check-label" for="exampleCheck1">Check me out</label>
// </div>
//             <button type="submit" class="btn btn-primary">Submit</button>
// </form>

  );
}

export default SearchBar;
