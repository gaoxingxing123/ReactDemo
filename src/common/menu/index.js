import React, { Component} from 'react';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import { Menu, Icon, Layout} from 'antd';
import {connect} from 'react-redux';
import {SubMeunFontSize,ChildMeunFontSize} from './style'
const { SubMenu }  = Menu;
const {Sider} = Layout;
class Lmenu extends Component {
  constructor(props){
    super(props)
    this.state={
      theme: 'light',
      current: '1',
      collapsed: false,
    }
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    const {login2}=this.props
    if(login2){
      return (
        <div >
         <Sider 
         width={218} 
         style={{background: '#001529',minHeight:'91vh'}}
         collapsible collapsed={this.state.collapsed} 
         onCollapse={this.onCollapse}
         >                   
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              theme='dark'
            >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span style={SubMeunFontSize}>客户信息管理模块</span>
                </span>
              }
             >
              <Menu.Item style={ChildMeunFontSize} key="1"><Link to={'/enterprise'}>小微企业信息</Link></Menu.Item>
              <Menu.Item style={ChildMeunFontSize} key="2"><Link to={'/individua'}>个人信息</Link></Menu.Item>             
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  <span style={SubMeunFontSize}>贷款信息模块</span>
                </span>
              }
            >
              <Menu.Item style={ChildMeunFontSize} key="3"><Link to={'/myservice'}>我的业务</Link></Menu.Item>
              <Menu.Item style={ChildMeunFontSize} key="4"><Link to={'/servicesearch'}>查询业务</Link></Menu.Item>
              <Menu.Item style={ChildMeunFontSize} key="5"><Link to={'/serviceadd'}>新增业务</Link></Menu.Item>            
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span style={SubMeunFontSize}>
                  <Icon type="notification" />
                  <span>信用评级模块</span>
                </span>
              }
            >
              <Menu.Item style={ChildMeunFontSize} key="6">信用评级</Menu.Item>         
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span style={SubMeunFontSize}>
                  <Icon type="notification" />
                  <span>人工智能模块</span>
                </span>
              }
            >
              <Menu.Item style={ChildMeunFontSize} key="7"><Link to={'/facemodule'}>人脸识别</Link></Menu.Item>
              <Menu.Item style={ChildMeunFontSize} key="8">数据分析</Menu.Item>         
            </SubMenu>
          </Menu>
        </Sider>
        </div>
      );
    }else{
      return<div></div>
    }
    
  }
}
const mapState=(state)=>({
  login2:state.getIn(['login','login'])
})
export default connect(mapState,null)(Lmenu);
