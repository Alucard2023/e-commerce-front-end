import {combineReducers} from 'redux' ; 
import userReducer from './user';
import AdminReducer from './Admin';


const rootReducer = combineReducers({userReducer,AdminReducer})

export default rootReducer ;