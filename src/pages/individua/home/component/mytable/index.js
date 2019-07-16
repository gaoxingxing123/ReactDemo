import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Table} from 'antd';
import { MyTableContent } from '../../../style';
import {Link} from 'react-router-dom'
class MyTable extends Component{  
   
  
      render(){
          const {data}=this.props;
          const columns = [
            {
              title: '编号',
              dataIndex: 'id',
              key: 'id',
              width: 100,
              fixed:'left'
             
            },
            {
              title: '姓名',
              dataIndex: 'salay',
              key: 'salay',
              width:100,
              fixed:'left',
              
            },
            {
              title: '用户职务',
              dataIndex: 'userType',
              key: 'userType',
              width: 120,
              
            },
            {
              title: '用户职务',
             
              width: 120,
           
            },
            {
              title: '用户职务',
           
              width: 120,
             
            },
            {
              title: '用户职务',
             
              width: 120,
           
            },
            {
              title: '用户职务',
            
              width: 120,
              
            },
            {
              title: '用户职务',
             
              width: 120,
           
            },
            {
              title: '用户职务',
            
              width: 120,
             
            },
            {
              title: '用户职务',
             
           
            },
            {
              title: '详情',             
              width: 80,
              fixed:'right',            
              render: (record) =>
                (
                   <Link to={'/check'}>查看{record.id}</Link>   //查看页面为同步加载页面                                
                )
            }
            
              
            
          ]; 
        
    return (
      <div>
            <MyTableContent>
            <Table  pagination={false}
                bordered  
                columns={columns} 
                dataSource={(data).toJS()} 
                rowKey='id' 
                size="middle" 
                scroll={{ x:1200,y: '43vh' }} 
                />           
            </MyTableContent>
            <Link style={{float:'right'}} to={'/add'}>新增</Link>
       </div>    
            )
          
      }
  }
  const mapState=(state)=>({
      login:state.getIn(['login','login']),
      data:state.getIn(['individua','data']),
      
    })
  
  export default  connect(mapState,null)(MyTable);