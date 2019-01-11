import * as ActionTypes from '../constants/ActionTypes';

const switchesReducerDefaultState = [

];


export default (state = switchesReducerDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SWITCH:
            return [...state, action.switch];
        case ActionTypes.ADD_SWITCHES:
            return action.switches;
        case ActionTypes.EDIT_SWITCH:
            return state.map((itm) => {
                if (itm.pin == action.pin) {
                    return {
                        ...itm,
                        ...action.data
                    }
                } else {
                    return itm;
                }
            });
        case ActionTypes.TOGGLE_SWITCH:
            return state.map((itm) => {
                if (itm.pin == action.pin) {
                    const state = !itm.state
                    return {
                        ...itm,
                        ...{state}
                    }
                } else {
                    return itm;
                }
            });
        case ActionTypes.REMOVE_SWITCH:
            return state.filter(({ pin }) => pin !== action.pin);
        default:
            return state;
    }

}