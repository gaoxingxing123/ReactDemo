import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import 'antd/dist/antd.css';
import { HashRouter as Router,Route} from'react-router-dom'
import Home from "./home"
import AddEBase from './addebase'
import AddIBase from './addibase'
import AddILoan from './addiloan'
import AddELoan from './addeloan'
import AddIOther from './addiother'
import AddEOther from './addeother'
class ServiceAdd extends Component {
    render() {
      const {login}=this.props;
        if(login){
                return (
                    <div>                  
                    <Router>          
                        <Route path="/" exact component={Home}/>
                        <Route path="/addibase/:id" exact component={AddIBase}/>
                        <Route path="/addebase/:id" exact component={AddEBase}/>
                        <Route path="/addiloan/:id" exact component={AddILoan}/>
                        <Route path="/addeloan/:id" exact component={AddELoan}/>
                        <Route path="/addiother/:id" exact component={AddIOther}/>
                        <Route path="/addeother/:id" exact component={AddEOther}/>
                    </Router>
                    </div>
                );
        }else{
          return <Redirect to='/'/>
        }
    }
}
const mapState=(state)=>({
    login:state.getIn(['login','login']),   
  })


export default  connect(mapState,null)(ServiceAdd);
