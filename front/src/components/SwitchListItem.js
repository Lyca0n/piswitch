import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
const ExpenseListItem = (props) => (
    <div className="list-item" >
        <div>
            <h3 className="list-item__title">{props.itm.label}</h3>
            <span >Port: {props.itm.pin}</span>
        </div>
        <div className="list-item__data">
            {props.itm.state === true ? 
            (<button onClick={()=>props.startToggleSwitch(props.itm.pin)} className="button  button--appliance button--active">On</button> ): 
            (<button onClick={()=>props.startToggleSwitch(props.itm.pin)} className="button  button--appliance  button--unactive">Off</button>)}
            <Link to={`/edit/${props.itm.pin}`} className="button">Edit</Link>
        </div>

    </div>
);

export default ExpenseListItem;