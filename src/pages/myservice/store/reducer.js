import * as constants from './constants'
import {fromJS} from 'immutable'
//immutable库将focused变为不可直接变更
const defaultState=fromJS({
    enterpriseId:'',
    individuaId:''
});
export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.SAVE_ID:{
            sessionStorage.setItem('enterpriseId',action.enterpriseId)
            return state.merge({
                enterpriseId:fromJS(action.enterpriseId),             
                })
        }
        case constants.SAVE_INDIVIDUAID:{
            sessionStorage.setItem('individuaId',action.individuaId)
            return state.merge({
                individuaId:fromJS(action.individuaId),             
                })
        }
        default:{

        }
    }
    return state;
}