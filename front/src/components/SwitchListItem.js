import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
const ExpenseListItem = ({ label, pin , state }) => (
    <Link className="list-item" to={`/edit/${pin}`}>
        <div>
            <h3 className="list-item__title">{label}</h3>       
            <span >Port: {pin}</span>   
        </div>
        <div className="list-item__data">
            { state === true ? <button className="button">turn off</button>: <button className="button">turn on</button> }
        </div>
    </Link>
);

export default ExpenseListItem;