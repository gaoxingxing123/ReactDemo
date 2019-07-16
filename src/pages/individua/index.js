import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import { HashRouter as Router,Route} from'react-router-dom'
import Home from "./home";
import Add from "./add"
import Check from './check';
class Individual extends Component {
    render() {
      const {login}=this.props;
        if(login){
                return (
                    <Router>          
                        <Route path="/" exact component={Home}/>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/add" exact component={Add}/>
                        <Route path="/check" exact component={Check}/>
                    </Router>
                );
        }else{
          return <Redirect to='/'/>
        }
    }
}
const mapState=(state)=>({
    login:state.getIn(['login','login']),   
  })


export default  connect(mapState,null)(Individual);


