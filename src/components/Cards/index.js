import React from 'react'
// import "style.css";

function Cards(props) {
    return (
    <div className="card">
            <div className="img-container">

            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Photo:{props.employee.picture.thumbnail}</strong>
                    </li>
                    <li>
                        Name: {props.employee.name.title}
                    </li>
                    <li>
                        <strong>phone:{props.employee.phone}</strong>
                    </li>
                    <li>
                        <strong>Dob: {props.employee.dob.date}</strong>
                    </li>
                </ul>
            </div>
            <span > Span</span>
        </div>
    );
}

export default Cards;