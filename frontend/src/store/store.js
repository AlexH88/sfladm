import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import userReducer from '../reducers/userReducer';
import modalReducer from '../reducers/modalReducer';
import articleReducer from '../reducers/articleReducer';


const store = createStore(
	combineReducers({
		auth: authReducer,
		user: userReducer,
		modal: modalReducer,
		article: articleReducer
	}),
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;