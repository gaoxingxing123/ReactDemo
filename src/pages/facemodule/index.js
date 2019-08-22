import React, { Component} from 'react';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {actionCreators} from './store'
import {myimg,mytakephone,myvideo}from './style'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
let MediaStreamTrack=''
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;  
window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;  
class Facemodule extends Component{
    constructor(props){
        super(props);
        this.state={
          
        }
      }  
      componentDidMount(){
        var video = document.getElementById('video');
    //媒体对象
       navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        navigator.getMedia({
        video: true, //使用摄像头对象
        audio: false  //不适用音频
     }, function(strem){
         console.log(strem)
         MediaStreamTrack = strem.getTracks()[0];
        console.log(MediaStreamTrack)
        video.srcObject=strem;
        video.play();
        //video.src = vendorUrl.createObjectURL(strem);
        //video.play();
     }, function(error) {
        console.log(error);
     });
      }
      shutdown(){
        //媒体对象     
            MediaStreamTrack && MediaStreamTrack.stop();
      }
     takephoto() { 
        var video = document.getElementById('video');
        var canvas = document.getElementById('canvas'),
        img1 = document.getElementById('img');
        //绘制canvas图形
        canvas.getContext('2d').drawImage(video, 0, 0, 400, 300);
        //把canvas图像转为img图片
        img1.src = canvas.toDataURL("image/png");
        let url='http://localhost:8080/face/compare.do'
        let img = new FormData();
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
            }
        };
        img.append('img',canvas.toDataURL("image/png"));
        axios.post(url, img, config   
        ).then((res)=>{
            alert("相似置信度为："+res.data.grade)                  
        }).catch((error)=>{
            alert(error)
        });
    }   
    render(){
        let {login}=this.props
        if(login){
            return (
                <div>
                    <div className="booth">
                        <video id="video" style={myvideo}></video>
                        <button id='takephone' style={mytakephone} onClick={this.takephoto}> 拍照</button>  
                        <button id='shutdown' style={mytakephone} onClick={this.shutdown}> 关闭</button>    
                        <canvas id='canvas' width='400' height='300' style={{display: 'none'}}></canvas>
                        <img id='img' src='' style={myimg} alt=''/>
                    </div>
                          
                </div>
            )
        }else{
            return <Redirect to='/'/>
        }
        
    }
}

const mapState=(state)=>({
    login:state.getIn(['login','login']),
    
  })
  const mapDispatch=(dispatch)=>{
    return{
        FaceIdentify(){
            dispatch(actionCreators.FaceIdentify())
        }
    }
  }


export default  connect(mapState,mapDispatch)(Facemodule);
