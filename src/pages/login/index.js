import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {LoginBox} from './style';
import {Link} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import {actionCreators} from './store'
import {myimg,myvideo}from './style'
import axios from 'axios'
/**
 * 测试暂存
 */
let MediaStreamTrack=''
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;  
window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;  
class LoginFrom extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  componentDidMount(){
 /*   var video = document.getElementById('video');
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
 });*/
  }
  shutdown(){
    //媒体对象     
        MediaStreamTrack && MediaStreamTrack.stop();
  }
 facelogin() { 
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
        this.shutdown();                
    }).catch((error)=>{
        alert(error)
    });
}   
  render() {
    const { getFieldDecorator } = this.props.form;
    const {login1}=this.props;
    
    if(!login1){
        return (
            <div>
            <div className="booth">
            <video id="video" style={myvideo}></video> 
            <canvas id='canvas' width='400' height='300' style={{display: 'none'}}></canvas>
            <img id='img' src='' style={myimg} alt=''/>
            </div>
            <LoginBox>
               
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input 
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="用户名"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住账号</Checkbox>)}
                    <Link to={''} className="login-form-forgot" >
                        忘记密码
                    </Link>
                    <Button onClick={()=>this.props.login(
                        this.props.form.getFieldsValue().username,
                        this.props.form.getFieldsValue().password)
                    } type="primary" htmlType="submit" className="login-form-button" >
                        登录
                    </Button>
                    <Button onClick={()=>this.facelogin()
                    } type="primary" htmlType="submit" className="login-form-button" >
                        刷脸登录
                    </Button>
                    Or <Link to={''}  >立即注册!</Link>
                    </Form.Item>
                </Form>
          </LoginBox>
          </div>
        );
    }else{
        return <Redirect to='/home'/>
    }

  }
}
const Login = Form.create()(LoginFrom);
const mapState=(state)=>({
    login1:state.getIn(['login','login']),
    username:state.getIn(['login','username'])

})
const mapDispath=(dispatch)=>{
    return{
        login(accountElem,passwordElem){
            dispatch(actionCreators.login(accountElem,passwordElem))
        }
        
    }
}
export default connect(mapState,mapDispath)(Login);