import React from 'react';
import Cards from '../Cards/index'
import '../Table/style.css';


function Table({ employeeList }) {
    // console.log(prop)
    // let employeeList = Array.from(prop);
    console.log("in table " + typeof employeeList)
    if(employeeList.length === 0){

    }
    return (
        <table className="sortable">
            <thead>
                <tr>
                    <th>Image:</th>
                    <th>Name:</th>
                    <th>Phone:</th>
                    <th>DOB:</th>
                </tr>
            </thead>
            <tbody>

                {/* <tr> */}
                    {/* <td><img src={prop.picture} alt="" border="3" height="125" width="125" ></img> </td> */}
                   
                    {/* <td>{props.employee.name.first} {props.employee.name.last}</td>
                    <td>{props.employee.phone}</td>
                    <td>{props.employee.dob.date}</td> */}
                {employeeList.map(employee => (

                    <Cards key={employee.id.value} employee={employee} />
                ))}
                {/* </tr> */}
            </tbody>
        </table>
    );
}

export default Table;