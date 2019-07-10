import * as constants from './constants'
import {fromJS} from 'immutable'
//immutable库将focused变为不可直接变更
//从session中读取登陆信息防止刷新时丢失
const defaultState= fromJS({
    login:[],
    username:''
});

export default (state=defaultState,action)=>{
    if(action.type===constants.CHANGE_LOGIN){
        sessionStorage.setItem('login',action.value)
        sessionStorage.setItem('username',action.username)
        return state.merge({
            login:fromJS(action.value),
            username:fromJS(action.username)
            })
    }
    if(action.type===constants.CHANGE_LOGOUT){
        sessionStorage.setItem('login',action.value)
        sessionStorage.setItem('username','' )
        console.log(action.value)
        return state.merge({
            login:fromJS(action.value),
            username:fromJS('')
            })
    }
    if(action.type===constants.CHANGE_FISTLOGIN){
        return state.merge({
            login:fromJS(action.login),
            username:fromJS(action.username)
            })
    }
    
    return state;
}