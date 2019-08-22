import { Form,  Input, Button,Select} from 'antd';
import React, { Component} from 'react';
import 'antd/dist/antd.css';
import {FormBox} from '../style.js'
import {withRouter} from 'react-router-dom'
class MyHome extends Component {
  state = {
    data:0
  };
  handleProvinceChange = value => {
    console.log(value)
    this.setState({
      data:value
    });
  };
  changePage(data){
    if(data==='0'){
      this.props.history.push('/addibase/'+null)
    }else{
      this.props.history.push('/addebase/'+null)
    }
  }

  render() {
    const { Option } = Select;
    const { getFieldDecorator } = this.props.form;
    return (
      <FormBox>
        <div style={{float:'left',width:'100%',height:'4vh',
        background:'#CCCCCC',textIndent:'1em',lineHeight:'2vh',padding:'5px 0 0 0'}}>新增业务</div><br/><br/>
      <Form labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}onSubmit={this.handleSubmit} >
        <Form.Item label="流水单号">
          {getFieldDecorator('username', {
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="业务类型">
          {getFieldDecorator('gender', {
            rules: [],
          })(
            <Select          
              style={{ width: 120 }}
              onChange={this.handleProvinceChange}
            >
               <Option value='0'>个人</Option>
               <Option value='1'>小微企业</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>           
          <Button onClick={()=>{this.changePage(this.state.data)}} style={{marginLeft:'30%'}}type="primary" htmlType="submit" className="login-form-button">
          创建
          </Button>        
        </Form.Item>
      </Form>
      </FormBox>
    );
  }
}

const Home = Form.create({ name: 'normal_login' })(MyHome)
export default ((withRouter) (Home));