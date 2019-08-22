import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
class Home extends Component{  
    render(){
      const {login}=this.props;
      if(login) {
        console.log('success')
        return (
          <div > 
           <div style={{height:'30px',fontSize:'50px'}}>
             欢迎来到CRM大数据中心
             </div>                                        
         
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


export default   connect(mapState,null)(Home);