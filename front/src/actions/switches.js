import * as ActionTypes from '../constants/ActionTypes';

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

export const startAddSwitch = (switchinfo)=>{
    return (dispatch, getState)=>{
        //Axios call        
        dispatch(addSwitch(switchinfo));
    }
};