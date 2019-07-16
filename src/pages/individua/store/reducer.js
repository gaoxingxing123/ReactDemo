import * as constants from './constants'
import {fromJS} from 'immutable'
//immutable库将focused变为不可直接变更
const defaultState=fromJS({
    data: [],
    loading:false
});
export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_LIST:{
            return state.merge({
                data:fromJS(action.data),
                })          
        }    
        default:{

        }
    }
    return state;
}