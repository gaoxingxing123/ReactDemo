import React, { Component} from 'react';
import {connect} from 'react-redux';

import Search from './component/search';
import MyTable from './component/mytable';
class Home extends Component{  
    render(){    
            return (
              <div>
                <Search/>
                <div style={{height:30}}></div>
                <MyTable/>
              </div>      
            )
        }      
}
//111111
const mapState=(state)=>({
    login:state.getIn(['login','login']),
    data:state.getIn(['enterprise','data']),
    loading:state.getIn(['enterprise','loading'])
    
  })


export default  connect(mapState,null)(Home);


