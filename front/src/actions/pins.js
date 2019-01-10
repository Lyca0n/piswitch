import * as ActionTypes from '../constants/ActionTypes';

export const addPins = (pins)=>({
    type: ActionTypes.ADD_PINS,
    pins
});