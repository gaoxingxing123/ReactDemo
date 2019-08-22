import React, { Component} from 'react';
import MyTable from './component/mytable';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
class Enterprise extends Component{  
    render(){
      if(this.props.login) {
        return (
          <div>
           
            
            <MyTable/>        
          </div>
        )
      } else{
        return <Redirect to='/'/>
      }  
        
      }    
         
      
}
const mapState=(state)=>({
  login:state.getIn(['login','login']),
  data:state.getIn(['enterprise','data']),
  loading:state.getIn(['enterprise','loading'])
  
})


export default connect(mapState,null) (Enterprise);