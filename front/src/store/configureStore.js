import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import pinsReducer from '../reducers/pins';
import switchesReducer from '../reducers/switches';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({      
      pins: pinsReducer,
      switches: switchesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
