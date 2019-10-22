import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import './style.css'
import MyTable from './component/mytable/index'
import MyTable1 from './component/mytable1/index'
import MyUpload from './component/upload/index'
import MyList from './component/list/MyList';
class Dinput extends Component{  
    render(){
        const {login}=this.props;
        if(login){
            return (
              <div>
                <div style={{float:'left',width:'60%'}}>
                  <MyTable/>
                  <MyTable1/>      
                </div>
                <div style={{float:'right',width:'40%'}}>
                  <MyUpload/>
                  <MyList/>
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
    data:state.getIn(['dinput','data']),
    loading:state.getIn(['dinput','loading'])
    
  })


export default  connect(mapState,null)(Dinput);


