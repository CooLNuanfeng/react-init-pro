import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import todos from '../reducers/todos' 
import user from '../reducers/loginReg'

const rootReducres = combineReducers({
  todos,
  user
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducres,
    composeEnhancers(
      applyMiddleware(thunk)
    )
);


export default store;