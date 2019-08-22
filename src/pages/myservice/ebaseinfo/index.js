import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { Form,  Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import axios from 'axios'
import { Menu} from 'antd';
import {MyFormContent} from '../../serviceadd/style'
const formItemLayout = {
    labelCol: {
      xs: { span: 0 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 0 },
      sm: { span: 13 },
    },
  };
class Base extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: {
        value: '123456789',
      },
      data:[]
    };
  }
  componentDidMount(){
    
    let url='http://192.168.3.236:8088/businessDetails?loanId='+this.props.enterpriseId+'&type=2'
    axios.get(url    
    ).then((res)=>{
        console.log(res);
        this.setState({           
          data:res.data.customer,       
          });                 
    }).catch((error)=>{
        alert(error)
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { Option} = Select;
    const { getFieldDecorator } = this.props.form;
        return (
            <MyFormContent > 
            <div key={this.props.location.key}>
                <Menu
                                theme="black"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{ lineHeight: '40px',float:'left',marginLeft:'2%',height:'4vh'}}
                                >
                                <Menu.Item key="1"><Link to={'/ebaseinfo'}> 客户基本信息 </Link></Menu.Item>
                                <Menu.Item key="2"><Link to={'/eloaninfo'}> 客户贷款信息 </Link></Menu.Item>
                                <Menu.Item key="3"><Link to={'/eprogressinfo'}> 客户其他信息 </Link></Menu.Item>                     
                </Menu>
                <div style={{height:'80px'}}></div>  
            <Form  {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
            <div>
            <div style={{float:'left',width:'40%',marginLeft:'8%'}}>                 
                <Form.Item label='企业名'>
                {getFieldDecorator('clientName', {initialValue: this.state.data.clientName,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='客户号'>
                {getFieldDecorator('clientNumber', {initialValue: this.state.data.clientNumber,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='联系方式'>
                {getFieldDecorator('contactInformation', {initialValue: this.state.data.contactInformation,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='证件号码'>
                {getFieldDecorator('cardNumber', {initialValue: this.state.data.cardNumber,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
               
                <Form.Item label='企业员工人数'>
                {getFieldDecorator('employeesNumber', {initialValue: this.state.data.employeesNumber,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='不同部门的员工人数'>
                {getFieldDecorator('departments', {initialValue: this.state.data.departments,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='行业'>
                {getFieldDecorator('industry', {initialValue: this.state.data.industry,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='是否有民间借贷'>
                {getFieldDecorator('privateLending', {initialValue: this.state.data.privateLending===0?'否':'是',
                    rules: [],
                })(
                  <Select     
                  //onChange={this.handleSelectChange}
                >            
                    <Option value="1">是</Option>
                    <Option value="0">否</Option>
                </Select>,
                )}
                </Form.Item> 
                <Form.Item label='客户民间声誉情况'>
                {getFieldDecorator('privateReputation', {initialValue: this.state.data.privateReputation,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='企业法人是否有政府背景'>
                {getFieldDecorator('governmentBackground', {initialValue: this.state.data.governmentBackground===0?'否':'是',
                    rules: [],
                })(
                  <Select>            
                    <Option value="1">是</Option>
                    <Option value="0">否</Option>
                  </Select>,
                )}
                </Form.Item> 
                
                
                <Form.Item label='新产品认定级别'>
                {getFieldDecorator('productLevel', {initialValue: this.state.data.productLevel,
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='国家级专利个数'>
                {getFieldDecorator('nationalPatents', {initialValue: this.state.data.nationalPatents,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='产品销售范围'>
                {getFieldDecorator('productSales', {initialValue: this.state.data.productSales,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='法人代表本地居住年限'>
                {getFieldDecorator('yearToLive', {initialValue: this.state.data.yearToLive,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='法人代表汽车及不动产价值总额'>
                {getFieldDecorator('totalValue', {initialValue: this.state.data.totalValue,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                </div>
                <div style={{float:'right',width:'40%'}}>
                <Form.Item label='担保金额1'>
                {getFieldDecorator('guaranteeAmountOne', {initialValue: this.state.data.guaranteeAmountOne,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='币种1'>
                {getFieldDecorator('currencyOne', {initialValue: this.state.data.currencyOne,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='担保质押方式1'>
                {getFieldDecorator('guaranteedPledgeMethodOne', {initialValue: this.state.data.guaranteedPledgeMethodOne,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='担保金额2'>
                {getFieldDecorator('guaranteeAmountTwo', {initialValue: this.state.data.guaranteeAmountOne,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='币种2'>
                {getFieldDecorator('currencyTwo', {initialValue: this.state.data.currencyOne,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='担保质押方式2'>
                {getFieldDecorator('guaranteedPledgeMethodTwo', {initialValue: this.state.data.guaranteedPledgeMethodOne,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='关联客户数'>
                {getFieldDecorator('associatedCustomers', {initialValue: this.state.data.associatedCustomers,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='主办机构'>
                {getFieldDecorator('organiser', {initialValue: this.state.data.organiser,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='年初固定授信额度'>
                {getFieldDecorator('planBeginningYearReal', {initialValue: this.state.data.planBeginningYearReal,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='年初计划授信额度'>
                {getFieldDecorator('planBeginningYear', {initialValue: this.state.data.planBeginningYear,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='年末信用额度'>
                {getFieldDecorator('yearEndCreditLimit', {initialValue: this.state.data.yearEndCreditLimit,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='计划压缩授信额度'>
                {getFieldDecorator('planCompress', {initialValue: this.state.data.planCompress,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='不良贷款余额'>
                {getFieldDecorator('nonPerformingBalance', {initialValue: this.state.data.nonPerformingBalance,
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='分类调整'>
                {getFieldDecorator('governmentBackground', {initialValue: this.state.data.governmentBackground===0?'否':'是',
                    rules: [],
                })(
                  <Select>            
                    <Option value="1">是</Option>
                    <Option value="0">否</Option>
                  </Select>,
                )}
                </Form.Item> 
                <Button style={{marginRight:'23%',marginLeft:'20%'}} onClick={ ()=>this.saveChange(this.props.form.getFieldsValue())}
                   htmlType="submit"  >
                     <Link to={'/eloaninfo'}> 下一步</Link>
                  </Button> 
                  <Button>                    
                      <Link to={'/'}>返回</Link>
                  </Button>
                  <div style={{height:'10px'}}></div>
                </div>                                    
                </div>                                      
          </Form>
          </div>
          </MyFormContent>
        );
        
  }
  
}
const AddBase = Form.create()(Base);
const mapState=(state)=>({
    login1:state.getIn(['login','login']),
    username:state.getIn(['login','username']),
    enterpriseId:state.getIn(['myservice','enterpriseId'])===''?state.getIn(['login','enterpriseId']):state.getIn(['myservice','enterpriseId'])
})


 
export default connect(mapState,null)((props)=><AddBase {...props} key={props.location.pathname+"ee"} />);