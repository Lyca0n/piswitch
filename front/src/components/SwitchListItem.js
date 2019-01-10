import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
const ExpenseListItem = ({ label, pin, state }) => (
    <div className="list-item" >
        <div>
            <h3 className="list-item__title">{label}</h3>
            <span >Port: {pin}</span>
        </div>
        <div className="list-item__data">
            {state === true ? <button className="button  button--appliance button--active">On</button> : <button className="button  button--appliance  button--unactive">Off</button>}
            <Link to={`/edit/${pin}`} className="button">Edit</Link>
        </div>

    </div>
);

export default ExpenseListItem;