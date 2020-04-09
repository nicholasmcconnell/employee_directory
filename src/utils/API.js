
import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export const search = () => {
    return axios.get(
      "https://randomuser.me/api/?results=200"
    );
  };

// Including/Excluding fields
// Sometimes, maybe you want some random names and not extraneous data such as location, phone, etc.
// Using the inc and exc parameters, you can specify which fields to include or exclude respectively.

// By specifying only the fields you want, the generator can save time by skipping CPU intensive fields like "login" for example.

// These parameters accept the following values in a comma delimited list

// gender
// name
// location
// email
// login
// registered
// dob
// phone
// cell
// id
// picture
// nat
// If you only wanted the names,genders,and nats of users:

// https://randomuser.me/api/?inc=picture,name,phone,dob


//////CALL SYNTAX
// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   })