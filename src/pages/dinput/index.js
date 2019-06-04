import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import './style.css'
import MyTable from './mytable/index'
import MyTable1 from './mytable1/index'
class Dinput extends Component{  
    render(){
        const {login}=this.props;
        if(login){
            return (
              <div>
                <MyTable/>
                <MyTable1/>      
              </div>       
            )
        }else{
            return <Redirect to='/'/>
        }
        
    }
}
const mapState=(state)=>({
    login:state.getIn(['login','login']),
    data:state.getIn(['dinput','data']),
    loading:state.getIn(['dinput','loading'])
    
  })


export default  connect(mapState,null)(Dinput);


