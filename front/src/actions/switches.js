import * as ActionTypes from '../constants/ActionTypes';
import * as API from '../constants/API';


export const addSwitches = (switches)=>({
    type: ActionTypes.ADD_SWITCHES,
    switches
});

export const addSwitch = (switchinfo)=>({
    type: ActionTypes.ADD_SWITCH,
    switch: switchinfo
});

export const removeSwitch = ({ id } = {}) => ({
    type: ActionTypes.REMOVE_SWITCH,
    id
});

export const startAddSwitches = ()=>{    
    return (dispatch,getState)=>{
        fetch(API.BASE_URL+'/switches').then(
            response => {                
                if(response.ok){                    
                    return response;
                }else {
                    var error = new Error('Error ' +response.status+':'+response.statusText);
                    error.response= response;
                    throw error;
                }
                
            }, error => {
                let errmess=new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())        
            .then(itms => dispatch(addSwitches(itms.switches)))
            .catch(error => dispatch(switchesFailed(error.message)));
    }
};


export const startAddSwitch = (switchinfo={})=>{
    return (dispatch, getState)=>{
        const{
            label='',
            pin=0,
            state=false
        }= switchinfo;        
        const switchitm = {label,pin,state};        
        dispatch(addSwitch(switchitm));
    }
};

export const editSwitch=(id,data)=>({
    type: ActionTypes.EDIT_SWITCH,
    pin:id,
    data:data
});

export const startEditSwitch = (id, data)=>{
    return(dispatch, getState)=>{
        dispatch(editSwitch(id,data));
    }
};

export const switchesFailed=(error)=>({
    type: ActionTypes.SWITCHES_FAILED,
    error
});