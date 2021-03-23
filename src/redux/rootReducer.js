import { combineReducers } from 'redux';
import { userReducer} from './user/user';

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer;