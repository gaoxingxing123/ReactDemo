import {combineReducers} from 'redux-immutable';
import  {reducer as loginReducer} from '../pages/login/store'
import  {reducer as dinputReducer} from '../pages/dinput/store'
const reducer= combineReducers({
    login:loginReducer,
    dinput:dinputReducer
})
export default reducer;