import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Table,Button,Modal,Input} from 'antd';
import axios from 'axios'
import {withRouter} from "react-router-dom";
import * as constants from '../../../store/constants'
import { MyHeader } from '../../../style';
class MyTable extends Component{  
  constructor(props){
    super(props);
    this.state={
      data:[],
      pageNumber:1,
      pageSize:5,
      total:0,
      visible: false,
      selectedRowKeys:[],
      name:'',
      number:'',
      username:'',
      waterNumber:''
    }
  }  
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(this.state.selectedRowKeys);
    this.setState({
      visible: false,
    });let url='http://192.168.3.236:8088/transfer?accountManagerName='+this.state.name+'&loanId='+this.state.selectedRowKeys+'&type=1'
    axios.get(url    
    ).then((res)=>{
      let url1='http://192.168.3.236:8088/peasantLoanInfos?limit='+this.state.pageSize+'&page='+this.state.pageNumber+'&type=1'
      axios.get(url1    
      ).then((res)=>{
        console.log(res.data.list)
          this.setState({           
            data:res.data.list,       
            }); 
            alert('移交成功')                
      }).catch((error)=>{
          alert(error)
      });                 
    }).catch((error)=>{
        alert(error)
    });
    
  };
    SearchByName(){
      let url='http://192.168.3.236:8088/peasantLoanInfos'
      axios.get(url ,{params:{
        pipelineNumber:this.state.waterNumber,
        type:1,
        page:this.state.pageNumber,
        limit:this.state.pageSize,
        name:this.state.username
  
      }}   
      ).then((res)=>{
        console.log(res.data.list)
          this.setState({           
            data:res.data.list,       
            });                 
      }).catch((error)=>{
          alert(error)
      });
    }
  changename=(e)=>{
    this.setState({
      name:e.target.value,
    })
  }
  userName=(e)=>{
    this.setState({
      username:e.target.value,
    })
  }
  waterNumber=(e)=>{
    this.setState({
      waterNumber:e.target.value,
    })
  }
  changenumber=(e)=>{
    console.log(e.target.value)
    this.setState({
      number:e.target.value,
    })
  }
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
   componentDidMount(){
    let url='http://192.168.3.236:8088/peasantLoanInfos?limit='+this.state.pageSize+'&page='+this.state.pageNumber+'&type=1'
    axios.get(url    
    ).then((res)=>{
      console.log(res.data.list)
        this.setState({           
          data:res.data.list,       
          });                 
    }).catch((error)=>{
        alert(error)
    });
  }
  onPageChange = (page) => {
    let url='http://192.168.3.236:8088/peasantLoanInfos?limit='+this.state.pageSize+'&page='+page+'&type=1'
    axios.get(url    
    ).then((res)=>{
        console.log(res.data.list);
        this.setState({           
          data:res.data.list,       
          });                 
    }).catch((error)=>{
        alert(error)
    });
  }
  
      render(){
        const rowSelection = {
          onChange: (selectedRowKeys, selectedRows) => {
            this.setState({
              selectedRowKeys:selectedRowKeys
            })
          },
          getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
          }),
        };
        
        const {data}=this.state
        const columns = [
          {
            title: '流水单号',
            dataIndex: 'pipelineNumber',
            key: 'pipelineNumber',         
          },
          
          {
            title: '客户名称',
            dataIndex: 'name',
            key: 'name',         
          },
          {
            title: '办理日期',
            dataIndex: 'createTime',
            key: 'createTime',         
          },
          {
            title: '详情查看',             
            width: 80,                        
            render: (record) =>
              (
               <Button onClick={()=>this.props.OnSave(record.id,this.props.history)}>查看</Button>   //查看页面为同步加载页面                                
              )
          }                                
        ]; 
        
    return (
      <div>
             <MyHeader>
                客户名称：
                
                <Input  style={{ width: '15%',marginRight:'15%',marginLeft:'5%' }} placeholder="请输入客户名称" onChange={this.userName} />
                流水号：
                <Input  style={{ width: '15%',marginRight:'20%' }} onChange={this.waterNumber} placeholder="请输入流水单号" />
               <Button  onClick={ ()=>this.SearchByName()} icon="search">查询</Button><br/>
            </MyHeader>
            <div style={{height:30}}></div>
            <Table  
             pagination={{ pageSize:this.state.pageSize ,total:this.state.total,onChange:this.onPageChange}}
                bordered 
                rowSelection={rowSelection} 
                columns={columns} 
                dataSource={(data)}                
                size="middle"     
                rowKey='id'          
                /> 
                <div>
            <Button type="primary" onClick={this.showModal}>
              业务移交
            </Button>
            <Modal
              title="业务移交"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
                <span> 移交对象姓名<Input onChange={this.changename}/></span> 
              <span> 移交对象工号<Input onChange={this.changenumber}/></span>  
            </Modal>
          </div>                  
       </div>    
            )
          
      }
  }
  const Save=(id)=>({
    type:constants.SAVE_INDIVIDUAID,
    individuaId:id
})
export const OnSave=(id)=>{   
    return(dispatch)=>{      
             dispatch(Save(id))          
                            
    }   
}

    const mapDispath=(dispatch)=>{
      return{
        OnSave(individuaId,Myrouter){
          dispatch(OnSave(individuaId))
          Myrouter.push('/ibaseinfo')     
      }       
          
      }
  }
  
  
  export default  connect(null,mapDispath)(withRouter(MyTable));