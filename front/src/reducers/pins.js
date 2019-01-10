
import * as ActionTypes from '../constants/ActionTypes';

const pinsReducerDefaultState = [
    {
        "number": 2
    },
    {
        "number": 3
    },
    {
        "number": 4
    },
    {
        "number": 9
    },
    {
        "number": 10
    },
    {
        "number": 17
    },
    {
        "number": 22
    },
    {
        "number": 27
    }
];

export default (state = pinsReducerDefaultState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PINS:
            return action.pins;
        default:
            return state;
    }

}