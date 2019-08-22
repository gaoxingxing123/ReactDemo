import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { Form, } from 'antd';
import 'antd/dist/antd.css';

import axios from 'axios'
import { Menu} from 'antd';
import { Table } from 'antd';

class Loan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[]
    };
  }

  componentDidMount(){
    
    let url='http://192.168.3.236:8088/businessDetails?loanId='+this.props.individuaId+'&type=1'
    axios.get(url    
    ).then((res)=>{
        console.log(res.data.loanInfo.pipelineNumber );
        let result=res.data.businessProgress
        this.setState({           
          data:[result], 
          pipelineNumber:res.data.loanInfo.pipelineNumber      
          });                
    }).catch((error)=>{
        alert(error)
    });
  }


  
  render() {
    const columns = [
        {
          title: '日期',
          dataIndex: 'date',
          key: 'date',         
        },
        {
          title: '流水号',
          dataIndex: 'pipelineNumber',
          key: 'pipelineNumber',         
        },
        {
          title: '描述',
          dataIndex: 'describe',
          key: 'describe',         
        },
        {
          title: '主客户经理',
          dataIndex: 'mainManager',
          key: 'mainManager',         
        },
        {
          title: '次客户经理',
          dataIndex: 'secondManaager',
          key: 'secondManaager',         
        },
                       
      ]; 
        return (
            <div key={this.props.location.key}>
                <Menu
                                theme="black"
                                mode="horizontal"
                                defaultSelectedKeys={['3']}
                                style={{ lineHeight: '40px',float:'left',marginLeft:'2%',height:'4vh'}}
                                >
                                <Menu.Item key="1"><Link to={'/ibaseinfo'}> 个人基本信息 </Link></Menu.Item>
                                <Menu.Item key="2"><Link to={'/iloaninfo'}> 个人贷款信息 </Link></Menu.Item>
                                <Menu.Item key="3"><Link to={'/iprogressinfo'}> 进度信息 </Link></Menu.Item>                   
                </Menu>
                <div style={{height:'80px'}}></div>            
           <Table  pagination={false}
               bordered 
               columns={columns} 
               dataSource={this.state.data }                
               size="middle"     
               rowKey="loanId"         
               /> 
          </div>
        );
        
  }
  
}
const Iprogress = Form.create()(Loan);
const mapState=(state)=>({
    login1:state.getIn(['login','login']),
    username:state.getIn(['login','username']),
    individuaId:state.getIn(['myservice','individuaId'])===''?state.getIn(['login','individuaId']):state.getIn(['myservice','individuaId'])
})
export default connect(mapState,null)((props)=><Iprogress {...props} key={props.location.pathname+"ee"} />);