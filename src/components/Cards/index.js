import React from 'react'
import '../Cards/style.css';

function Cards(props) {
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
                <tr>
                    <td><img src={props.employee.picture.thumbnail} alt="" border="3" height="125" width="125" ></img> </td>
                    <td>{props.employee.name.first} {props.employee.name.last}</td>
                    <td>{props.employee.phone}</td>
                    <td>{props.employee.dob.date}</td>
                </tr>
            </tbody>
        </table>




        // <div className="card">
        //     <div className="img-container">

        //     </div>
        //     <div className="content">
        //         <ul>
        //             <li>
        //                 <strong>Photo:{props.employee.picture.thumbnail}</strong>
        //             </li>
        //             <li>
        //                 Name: {props.employee.name.title} {props.employee.name.first} {props.employee.name.last}
        //             </li>
        //             <li>
        //                 <strong>phone:{props.employee.phone}</strong>
        //             </li>
        //             <li>
        //                 <strong>Dob: {props.employee.dob.date}</strong>
        //             </li>
        //         </ul>
        //     </div>
        //     <span > Span</span>
        // </div>
    );
}

export default Cards;