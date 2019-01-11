import * as ActionTypes from '../constants/ActionTypes';
import * as API from '../constants/API';

export const addPins = (pins)=>({
    type: ActionTypes.ADD_PINS,
    pins
});

export const startAddPins=()=>{
    return (dispatch,getState) => {
        fetch(API.BASE_URL+'/pins').then(
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
        .then(pins =>{
            dispatch(addPins(pins.pins));              
        })
        .catch(error=> dispatch(pinsFailed(error.message)));
    }
};

export const pinsFailed=(error)=>({
    type: ActionTypes.PINS_FAILED,
    error
});