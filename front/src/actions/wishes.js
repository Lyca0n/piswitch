import uuid from 'uuid';
import database from '../firebase/firebase';
import * as ActionTypes from '../constants/ActionTypes';

export const  addList = (list) => ({
    type:ActionTypes.ADD_LIST,
    list:list
})