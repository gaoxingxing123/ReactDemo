import React, { Component} from 'react';
import {connect} from 'react-redux';
import MyTable from './component/mytable';
class Individua extends Component{  
    render(){
       
        return (
          <div>
            
            <MyTable/>
           
          </div>      
        )
      }    
            
}
//111111
const mapState=(state)=>({
    login:state.getIn(['login','login']),  
  })


export default  connect(mapState,null)(Individua);