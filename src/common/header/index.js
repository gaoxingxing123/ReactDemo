import React, { Component } from 'react';
import {LogoutButton,UserInfo, Theme,LeftHead,Logo} from './style';
import {connect} from 'react-redux';
import {actionCreators as loginactionCreators} from '../../pages/login/store'
import {Layout,Menu, Button,Icon} from 'antd'
import 'antd/dist/antd.css';
//list.map((item)=>{
  //  return <SearchInfoItem key={item}>{item}</SearchInfoItem>
//})
//ref获取真实dom节点
const {Header} = Layout;
class Head extends Component{
    render(){
        const{login,logout,username}=this.props;
        let hello=" ,您好         "
        let blankspace=" "
        if(login){
            return(
                <Header className="header">              
                    <UserInfo >
                        <span>
                        <Icon type="user"style={{color:'white'}} />
                        {blankspace}{username}{hello}
                        <Button onClick={logout} style={LogoutButton}>退出</Button>
                        </span>
                    </UserInfo>                   
                    <LeftHead>
                        <Logo>LOGO </Logo>  
                        <Theme >CRM大数据中心</Theme> 
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px',float:'left',marginLeft:'2%'}}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </LeftHead>                   
                </Header>
            )
        }else{
            return<div></div>
        }
        
    }   
}
const mapState=(state)=>{//state to props
    return{
       //focused:state.get('header').get('focused')//immutable语法,获取focused与上一行代码等价
       //focused//采用reducer拆分的方法，此时调用focused必须多一层state.header
       login:state.getIn(['login','login']),//login下login字段
       username:state.getIn(['login','username'])
    }
}
const mapDispath=(dispatch)=>{
    return{
        logout(){
            dispatch( loginactionCreators.logout())
        }
    }
}

export default connect(mapState,mapDispath)(Head);