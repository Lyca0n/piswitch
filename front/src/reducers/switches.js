import * as ActionTypes from '../constants/ActionTypes';

const switchesReducerDefaultState = [
    {
        label: "Pump",
        pin: 2,
        state: true
    },
    {
        label: "Lamp",
        pin: 4,
        state: false
    }
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
        case ActionTypes.REMOVE_SWITCH:
    return state.filter(({ pin }) => pin !== action.pin);
        default:
    return state;
}

}