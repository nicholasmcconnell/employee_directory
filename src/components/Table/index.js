import React from 'react';
import Cards from '../Cards/index'
import '../Table/style.css';


function Table({ employeeList, handleSort }) {
    
    if (employeeList.length === 0) {

    }
    return (

        <table className="sortable">
            <thead>
                <tr>
                    <th><i className="fas fa-sort"></i>Image:</th>
                    <button className="btn" onClick={handleSort}>
                        <i className="fas fa-sort"></i>Name:
                    </button>
                    <th><i className="fas fa-sort"></i>Phone:</th>
                    <th><i className="fas fa-sort"></i>DOB:</th>
                </tr>
            </thead>
            <tbody>


                {employeeList.map(employee => (

                    <Cards key={employee.email} employee={employee} />
                ))}

            </tbody>
        </table>
    );
}

export default Table;