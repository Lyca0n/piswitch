
import * as ActionTypes from '../constants/ActionTypes';

const pinsReducerDefaultState = [

];

export default (state = pinsReducerDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PINS:
            return action.pins;
        default:
            return state;
    }

}