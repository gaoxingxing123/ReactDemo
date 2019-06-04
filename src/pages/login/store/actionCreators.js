import * as constants from './constants'
import axios from 'axios'
const changeLogin=(accout)=>({
    type:constants.CHANGE_LOGIN,
    value:true,
    username:accout
})
const FistTransLogin=(login,username)=>({
    type:constants.CHANGE_FISTLOGIN,
    login:login,
    username:username
})
export const TransFormData=(login,username)=>{
    return(dispatch)=>{
        login=sessionStorage.getItem('login')==='true'?true:false
        username = sessionStorage.getItem('username');
        dispatch(FistTransLogin(login,username));
    }
     
}
export const login=(accout,password)=>{
    //axios.defaults.headers.post['Content-Type']='application/json'
    //let url='http://localhost:8080/user/login3.do'
    // axios.post(url, {
    //    username:accout,
    //    password:password
    let url='/api/login.json'
    return(dispatch)=>{
        axios.get(url).then((res)=>{
            console.log('Post请求到:');
            console.log(res);
            const result=res.data.login;
            if(result){
                dispatch(changeLogin(accout))
            }else{
                alert('账号或密码错误')
            }
        }).catch((error)=>{
            alert('post失败')
            console.log(error);
        });

    }
}
export const logout=()=>({
    type:constants.CHANGE_LOGOUT,
    value:false
})
