import React, { Component} from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router,Route} from'react-router-dom'
import {Redirect} from 'react-router-dom'
import Individua from './individua';
import Enterprise from './enterprise';
import AddBase from './ebaseinfo'
import AddLoan from './eloaninfo'
import AddOther from './eprogressinfo'
import IBase from './ibaseinfo'
import ILoan from './iloaninfo'
import Iprogress from './iprogressinfo'
import { Menu} from 'antd';
import {Link} from 'react-router-dom'
class MyService extends Component{  
    render(){
      const {login}=this.props;
      if(login) {
        console.log('success')
        return (
          <div > 
           <div style={{height:'30px'}}></div>                                        
          <Router>  
                      <Menu
                        theme="black"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '40px',float:'left',marginLeft:'2%',height:'4vh'}}
                        >
                        <Menu.Item key="1"><Link to={'/'}> 企业信息 </Link></Menu.Item>
                        <Menu.Item key="2"><Link to={'/individua'}> 个人信息 </Link></Menu.Item> 
                                             
                        </Menu>  
              <Route path="/" exact component={Enterprise}/>                                                                                                                                                 
              <Route path="/individua" exact component={Individua}/>                                        
              <Route path="/ebaseinfo" exact component={AddBase}/> 
              <Route path="/eloaninfo" exact component={AddLoan}/> 
              <Route path="/eprogressinfo" exact component={AddOther}/>
              <Route path="/ibaseinfo" exact component={IBase}/> 
              <Route path="/iloaninfo" exact component={ILoan}/> 
              <Route path="/iprogressinfo" exact component={Iprogress}/>                        
          </Router>      
      </div>     
        )
      } else{
        return <Redirect to='/'/>
      }  
            
        }      
}
//111111
const mapState=(state)=>({
    login:state.getIn(['login','login']),
    data:state.getIn(['enterprise','data']),
    loading:state.getIn(['enterprise','loading'])
    
  })


export default   connect(mapState,null)(MyService);


