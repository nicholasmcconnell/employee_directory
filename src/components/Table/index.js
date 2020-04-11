import React from 'react';
import Cards from '../Cards/index'
import '../Table/style.css';


function Table(prop) {
    console.log(prop)
    let employeeList = Array.from(prop);

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
                {employeeList.map(employee => (

                    <Cards key={employee.id.value} employee={employee} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;