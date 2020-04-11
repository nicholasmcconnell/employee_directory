import React from 'react';
import Cards from '../Cards/index'
import '../Table/style.css';


function Table({ employeeList, handleSort}) {
    // console.log(prop)
    // let employeeList = Array.from(prop);
    console.log(employeeList)
    if (employeeList.length === 0) {

    }
    return (


        <table className="sortable">
            <thead>
                <tr>
                    <th>Image:</th>
                    <button className="btn" onClick={handleSort}>
                        <i className="fas fa-sort"></i>Name:
                    </button>
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
                    //give each card an id -- this may not be accessing it!
                    <Cards key={employee.email} employee={employee} />
                ))}
                {/* </tr> */}
            </tbody>
        </table>


    );
}

export default Table;