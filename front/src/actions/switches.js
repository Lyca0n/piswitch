import * as ActionTypes from '../constants/ActionTypes';
import * as API from '../constants/API';


export const addSwitches = (switches) => ({
    type: ActionTypes.ADD_SWITCHES,
    switches
});

export const addSwitch = (switchinfo) => ({
    type: ActionTypes.ADD_SWITCH,
    switch: switchinfo
});

export const removeSwitch = ({ id } = {}) => ({
    type: ActionTypes.REMOVE_SWITCH,
    id
});

export const editSwitch = (id, data) => ({
    type: ActionTypes.EDIT_SWITCH,
    pin: id,
    data: data
});

export const switchesFailed = (error) => ({
    type: ActionTypes.SWITCHES_FAILED,
    error
});

export const toggleSwitch = (pin) => ({
    type:ActionTypes.TOGGLE_SWITCH,
    pin   
});
export const startAddSwitches = () => {
    return (dispatch, getState) => {
        fetch(API.BASE_URL + '/switches').then(
            response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ':' + response.statusText);
                    error.response = response;
                    throw error;
                }

            }, error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(itms => dispatch(addSwitches(itms.switches)))
            .catch(error => dispatch(switchesFailed(error.message)));
    }
};


export const startAddSwitch = (switchinfo = {}) => {
    return (dispatch, getState) => {
        const {
            label = '',
            pin = 0,
            state = false
        } = switchinfo;
        const switchitm = { label, pin, state };
        return fetch(API.BASE_URL + '/switches', {
            method: "POST",
            body: JSON.stringify(switchitm),

            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.json())
        .then(switchitm => dispatch(addSwitch(switchitm)))        
        .catch(error =>  { console.log('post switches', error.message); alert('Your switch could not be posted\nError: '+error.message); });
    }
};


export const startEditSwitch = (id, switchinfo) => {
    return (dispatch, getState) => {
        const {
            label = '',
            pin = 0,
            state = false
        } = switchinfo;
        const switchitm = { label, pin, state };
        return fetch(API.BASE_URL + '/switches/'+id, {
            method: "PUT",
            body: JSON.stringify(switchitm),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.json())
        .then(switchitm => dispatch(editSwitch(id,switchitm)))        
        .catch(error =>  { console.log('post switches', error.message); alert('Your switch could not be posted\nError: '+error.message); });
    }
};

export const startToggleSwitch= (pin) => {
    return (dispatch, getState) => {
        return fetch(API.BASE_URL + '/switches/'+pin+'/toggle', {
            method: "PUT",            
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.json())
        .then(switchitm => dispatch(toggleSwitch(switchitm.pin)))        
        .catch(error =>  { console.log('toggle switch', error.message); alert('Your switch could not be toggled\nError: '+error.message); });
    }
};


