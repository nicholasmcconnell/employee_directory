import React from 'react';
import Cards from '../Cards/index'
import './style.css';


function Table({ employeeList, handleSort }) {

    if (employeeList.length === 0) {

    }
    return (
        <div className="container">
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


                    {employeeList.map(employee => (

                        <Cards key={employee.email} employee={employee} />
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Table;