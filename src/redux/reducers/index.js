import { combineReducers } from 'redux';
import Signup from './sign-up';
import Login from './login';

const rootReducers = combineReducers({ Signup, Login });
export default rootReducers;
