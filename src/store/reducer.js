import {combineReducers} from 'redux-immutable';
import  {reducer as loginReducer} from '../pages/login/store'
import  {reducer as enterpriseReducer} from '../pages/enterprise/store'
const reducer= combineReducers({
    login:loginReducer,
    enterprise:enterpriseReducer
})
export default reducer;