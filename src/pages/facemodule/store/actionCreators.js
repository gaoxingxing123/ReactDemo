import * as constants from './constants'
import axios from 'axios'
const Identify=(data)=>({
    type:constants.FACEIDENTIFY,
    data:(data),//将数据变为immutable类型传递,
})
export const FaceIdentify=()=>{
    let url='https://api-cn.faceplusplus.com/facepp/v3/compare'
    let key='_DABPSxs2xM0kNEXHuwsd2opQrlbz3Nv'
    let secret='4rZKyvoMt19xqcci66JhWMr72TB4Dbw5'
    let url1='http://pic157.nipic.com/file/20180310/21572168_075518082001_2.jpg'
    let url2='http://pic157.nipic.com/file/20180310/21572168_075518082001_2.jpg'
    return(dispatch)=>{
        axios.post(url,{
            api_key:key,
            api_secret:secret,
            image_url1:url1,
            image_url2:url2
        }       
        ).then((res)=>{
            const result=res.data;
            console.log(result)
                dispatch(Identify(result))           
        }).catch((error)=>{
            alert('查询失败，请检查服务器')
        });

    }
}


