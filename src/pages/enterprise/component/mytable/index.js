import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Table, Button } from 'antd';
import { MyTableContent } from '../../style';
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
              width: 150,
              
            },
            {
              title: '用户职务',
             
              width: 150,
           
            },
            {
              title: '用户职务',
           
              width: 150,
             
            },
            {
              title: '用户职务',
             
              width: 150,
           
            },
            {
              title: '用户职务',
            
              width: 150,
              
            },
            {
              title: '用户职务',
             
              width: 150,
           
            },
            {
              title: '用户职务',
            
              width: 150,
             
            },
            {
              title: '用户职务',
             
           
            },
            {
              title: '详情',             
              width: 80,
              fixed:'right',              
           
              render: () => <div >action</div> ,
            },
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
                scroll={{ x:'130%',y: 240 }} 
                />           
            </MyTableContent>
             <Button style={{float:'right'}}>新增</Button> 
       </div>    
            )
          
      }
  }
  const mapState=(state)=>({
      login:state.getIn(['login','login']),
      data:state.getIn(['enterprise','data']),
      
    })
  
  export default  connect(mapState,null)(MyTable);