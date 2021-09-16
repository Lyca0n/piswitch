import React from 'react';
import { Link } from 'react-router-dom';
import { useToggleApplianceByIdMutation } from '../services/switches';

const startToggleSwitch = ()=>{}
const SwitchListItem = ({appliance}) => {

    const [toggleAppliance] = useToggleApplianceByIdMutation();

    return(
    <div className="list-item" >
        <div>
            <h3 className="list-item__title">{appliance.label}</h3>
            <span >Port: {appliance.pin}</span>
        </div>
        <div className="list-item__data">
            {appliance.state === true ? 
            (<button onClick={()=>toggleAppliance(appliance.id)} className="button  button--appliance button--active">On</button> ): 
            (<button onClick={()=>toggleAppliance(appliance.id)} className="button  button--appliance  button--unactive">Off</button>)}
            <Link to={`/edit/${appliance.id}`} className="button">Edit</Link>
        </div>

    </div>);
};

export default SwitchListItem;