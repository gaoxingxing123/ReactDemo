import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import './style.css'

import Search from './component/search';
import MyTable from './component/mytable';
class Enterprise extends Component{  
    render(){
        const {login}=this.props;
        if(login){
            return (
              <div>
                <Search/>
                <div style={{height:30}}></div>
                <MyTable/>
              </div>      
            )
        }else{
            return <Redirect to='/'/>
        }
        
    }
}
const mapState=(state)=>({
    login:state.getIn(['login','login']),
    data:state.getIn(['enterprise','data']),
    loading:state.getIn(['enterprise','loading'])
    
  })


export default  connect(mapState,null)(Enterprise);


