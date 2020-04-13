import React from 'react'
import '../Cards/style.css';

function Cards(props) {

    return (

        <tr >
            <td><img src={props.employee.picture.thumbnail} alt="" border="3" height="125" width="125" ></img> </td>
            <td>{props.employee.name.first} {props.employee.name.last}</td>
            <td>{props.employee.phone}</td>
            <td>{props.employee.dob.date}</td>
        </tr>
    );
}

export default Cards;