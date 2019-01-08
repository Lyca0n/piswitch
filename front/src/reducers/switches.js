import * as ActionTypes from '../constants/ActionTypes';

const switchesReducerDefaultState = [
    {
      label: "Pump",
      pin: 2,
      state: false
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
        default:
            return state;
    }

}