import {combineReducers} from 'redux' ; 
import userReducer from './user';
import AdminReducer from './Admin';
import productReducer from'./product';

const rootReducer = combineReducers({userReducer,AdminReducer,productReducer})

export default rootReducer ;