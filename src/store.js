import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import posts from './reducers/postReducer';

export default createStore(
    combineReducers({ posts }),
    {},
    applyMiddleware(logger)
);
