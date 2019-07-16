import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Table} from 'antd';
import {Link} from 'react-router-dom'
class MyTable extends Component{  
   
  
      render(){
          const {data}=[[1,'1234551','陕西大同集团','2018-9-11'],[2,'1234551','陕西大同集团','2018-9-01']]
          const columns = [
            {
              title: '序号',                  
              width: 100,            
            },
            {
              title: '流水单号',       
              width: 100,
             
            },
            {
              title: '客户名称',             
              width:100,
              
            },          
            {
              title: '办理日期',             
              width: 80,                     
             
            },
            {
              title: '详情查看',             
              width: 80,                        
              render: (record) =>
                (
                   <Link to={'/check'}>查看{record.id}</Link>   //查看页面为同步加载页面                                
                )
            }                                
          ]; 
        
    return (
      <div>
            
            <Table  pagination={false}
                bordered  
                columns={columns} 
                dataSource={(data)}                
                size="middle"              
                />                   
       </div>    
            )
          
      }
  }
  const mapState=(state)=>({
      login:state.getIn(['login','login']),
      data:state.getIn(['individua','data']),
      
    })
  
  export default  connect(mapState,null)(MyTable);