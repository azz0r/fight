import { combineReducers } from 'redux';
import competitors from './competitors';
import fight from './fight';

const rootReducer = combineReducers({
	competitors,
	fight
});

export default rootReducer;
