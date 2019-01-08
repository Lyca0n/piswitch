
import database from '../firebase/firebase';
import * as moment from 'moment';
import * as ActionTypes from '../constants/ActionTypes';

export const startAddList = (listData={})=>{
    return(dispatch, getState)=>{
        const uid = getState().auth.uid;
        const{
            event= '',
            desc= '',
            owner= '',
            createdat=  moment().format(),    
        }= listData;
        const list = {event,desc,owner,createdat};
        return database.ref(`users/${uid}/lists`).push(list).then((ref)=>{
            dispatch(addList({
                id: ref.key,
                ...list
            }));
        });
    };
};

export const setLists=(lists)=>({
    type:ActionTypes.ADD_LISTS,
    lists
});

export const startSetLists = ()=>{
    return(dispatch, getState)=>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/lists`).once('value').then((snapshot)=>{
            const lists= [];
            snapshot.forEach((childSnapshot)=>{
                lists.push({
                   id: childSnapshot.key, 
                    ...childSnapshot.val()
                });
            });
            dispatch(setLists(lists));
        });
    };
};