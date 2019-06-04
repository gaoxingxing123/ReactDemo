import React, { Component} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Dcollection extends Component{
    render(){
        const {login}=this.props
            if(login){
                return<div>Dcollection</div>                
            }else{
                return <Redirect to='/'/>
            }
            
    }
}
const mapState=(state)=>({
    login:state.getIn(['login','login']),
    
  })


export default  connect(mapState,null)(Dcollection);