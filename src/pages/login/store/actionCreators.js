import * as constants from './constants'
import axios from 'axios'
const changeLogin=(accout,userId,token)=>({
    type:constants.CHANGE_LOGIN,
    value:true,
    username:accout,
    userId:userId,
    token:token
})
const changeMenu=(menu)=>({
    type:constants.CHANGE_MENU,
    menu:menu
})
const FistTransLogin=(login,username,menu,enterpriseId,individuaId,token)=>({
    type:constants.CHANGE_FISTLOGIN,
    login:login,
    username:username,
    menu:menu,
    enterpriseId:enterpriseId,
    individuaId:individuaId,
    token:token
})
export const TransFormData=(login,username,menu,enterpriseId,individuaId,token)=>{
    return(dispatch)=>{
        login=sessionStorage.getItem('login')==='true'?true:false
        username = sessionStorage.getItem('username');
        enterpriseId=sessionStorage.getItem('enterpriseId')
        individuaId=sessionStorage.getItem('individuaId')
        token=sessionStorage.getItem('token')
        menu =sessionStorage.getItem('menu')===''?'':JSON.parse(sessionStorage.getItem('menu'));
        dispatch(FistTransLogin(login,username,menu,enterpriseId,individuaId,token));
    }
     
}
export const login=(accout,password)=>{
   // axios.defaults.headers.post['Content-Type']='application/json'
    let url='http://192.168.3.236:8088/login'
    return(dispatch)=>{
        axios.post(url,{
            username:accout,
            password:password
        }       
        ).then((res)=>{
            if(res.data.msg==='登录成功'){
                const result=res.data;
                const userId=result.data.userId
                const token=result.token.token
                
                console.log(token)
                let url='http://192.168.3.236:8088/sysPermission/userPermissions/'+res.data.data.userId                 
                axios.defaults.headers.common['token'] = token;
                axios.get(url    
                ).then((res)=>{             
                  let menu=res.data.data
                  dispatch(changeMenu(menu))              
                }).catch((error)=>{
                    
                });
                dispatch(changeLogin(accout,userId,token))
            }else{
                alert(res.data.msg)
            }                  
        }).catch((error)=>{         
        });

    }   



}
export const logout=()=>{
    let url='http://192.168.3.236:8088/loginOut'
    return(dispatch)=>{
        axios.get(url    
            ).then((res)=>{                   
            }).catch((error)=>{
                alert(error)
            });
         dispatch(mylogout())     
    }
       
 }
export const mylogout=()=>({
    type:constants.CHANGE_LOGOUT,
    value:false
})
