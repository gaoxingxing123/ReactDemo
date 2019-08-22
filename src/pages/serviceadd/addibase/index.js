import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { Form,  Input, Button,Select,Menu } from 'antd';
import {MyFormContent} from '../style'
import 'antd/dist/antd.css';
import axios from 'axios'
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
      data:[],
      list:[]
    };
  }
  componentDidMount(){
      if((this.props.match.params.id==='null')||(this.props.match.params.id==='undefined')){
        let url='http://192.168.3.236:8088/peasantClients?limit='+1000+'&page='+(0)
        axios.get(url    
        ).then((res)=>{
            console.log(res.data);
            this.setState({           
              list:res.data.list, 
              total:res.data.total      
              });                 
        }).catch((error)=>{
            alert(error)
        });
      }else{
        let url='http://192.168.3.236:8088/peasantClient/'+this.props.match.params.id
        axios.get(url    
        ).then((res)=>{        
            let data=res.data
            this.setState({           
              data:data,  
              });  
              this.props.form.setFieldsValue({
                name:data.name,
                cardNumber:data.cardNumber,
                clientNumber:data.clientNumber,
                contactInformation:data.contactInformation,
                employeesNumber:data.employeesNumber,
                departments:data.departments,
                industry:data.industry,
                privateLending:data.privateLending,
                privateReputation:data.privateReputation,
                governmentBackground:data.governmentBackground,
                productLevel:data.productLevel,
                nationalPatents:data.nationalPatents,
                productSales:data.productSales,
                yearToLive:data.yearToLive,
                guaranteeAmountOne:data.guaranteeAmountOne,
                currencyOne:data.currencyOne,
                guaranteedPledgeMethodOne:data.guaranteedPledgeMethodOne,
                guaranteeAmountTwo:data.guaranteeAmountTwo,
                currencyTwo:data.currencyTwo,
                guaranteedPledgeMethodTwo:data.guaranteedPledgeMethodTwo ,
                managementCharacteristics: data.managementCharacteristics,
                planBeginningYear: data.planBeginningYear,
                yearEndCreditLimit: data.yearEndCreditLimit,
                planCompress: data.planCompress,
                nonPerformingBalance: data.nonPerformingBalance,
                classificationAdjustment: data.classificationAdjustment,
                organiser: data.organiser,
                associatedCustomers: data.associatedCustomers,
                planBeginningYearReal: data.planBeginningYearReal     
      });               
        }).catch((error)=>{
            alert(error)
        });
       
      }
   
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
   
  saveChange(data){    
    let url='http://192.168.3.236:8088/peasantClient/'+this.props.form.getFieldValue('name')
    axios.get(url    
    ).then((res)=>{
        console.log(res.data);
        let data=res.data
        this.setState({           
          data:data,  
          });  
          this.props.form.setFieldsValue({
            cardNumber:data.cardNumber,
            clientNumber:data.clientNumber,
            contactInformation:data.contactInformation,
            employeesNumber:data.employeesNumber,
            departments:data.departments,
            industry:data.industry,
            privateLending:data.privateLending,
            privateReputation:data.privateReputation,
            governmentBackground:data.governmentBackground,
            productLevel:data.productLevel,
            nationalPatents:data.nationalPatents,
            productSales:data.productSales,
            yearToLive:data.yearToLive,
            guaranteeAmountOne:data.guaranteeAmountOne,
            currencyOne:data.currencyOne,
            guaranteedPledgeMethodOne:data.guaranteedPledgeMethodOne,
            guaranteeAmountTwo:data.guaranteeAmountTwo,
            currencyTwo:data.currencyTwo,
            guaranteedPledgeMethodTwo:data.guaranteedPledgeMethodTwo ,
            managementCharacteristics: data.managementCharacteristics,
            planBeginningYear: data.planBeginningYear,
            yearEndCreditLimit: data.yearEndCreditLimit,
            planCompress: data.planCompress,
            nonPerformingBalance: data.nonPerformingBalance,
            classificationAdjustment: data.classificationAdjustment,
            organiser: data.organiser,
            associatedCustomers: data.associatedCustomers,
            planBeginningYearReal: data.planBeginningYearReal     
  });               
    }).catch((error)=>{
        alert(error)
    });
   
   
  }
  render() {
    const { Option} = Select;
    const {data}=this.state
    const { getFieldDecorator } = this.props.form;
    const options = this.state.list.map(d => <Option key={d.id}>{d.name}</Option>);
        return (
            <MyFormContent > 
            <div key={this.props.location.key}>
                <Menu
                                theme="black"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{ lineHeight: '40px',float:'left',marginLeft:'2%',height:'4vh'}}
                                >
                                <Menu.Item key="1"> 客户基本信息 </Menu.Item>
                                <Menu.Item key="2"> 客户贷款信息 </Menu.Item>
                                <Menu.Item key="3">进展信息</Menu.Item>                     
                </Menu>
                <div style={{height:'80px'}}></div>  
            <Form  {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
            <div>
            <div style={{float:'left',width:'40%',marginLeft:'8%'}}>                 
                <Form.Item label='用户名'>
                {getFieldDecorator('name', { 
                    rules: [],
                })(
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a individua"
                        optionFilterProp="children" 
                                                        
                    >
                       {options}
                    </Select>
                )}
                </Form.Item> 
                <Form.Item label='客户号'>
                {getFieldDecorator('clientNumber', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='联系方式'>
                {getFieldDecorator('contactInformation', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='证件号码'>
                {getFieldDecorator('cardNumber', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
               
                <Form.Item label='企业员工人数'>
                {getFieldDecorator('employeesNumber', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='不同部门的员工人数'>
                {getFieldDecorator('departments', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='行业'>
                {getFieldDecorator('industry', {
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='是否有民间借贷'>
                {getFieldDecorator('privateLending', {
                    rules: [],
                })(
                  <Select    readOnly
                  //onChange={this.handleSelectChange}
                >            
                    <Option value="1">是</Option>
                    <Option value="0">否</Option>
                </Select>,
                )}
                </Form.Item> 
                <Form.Item label='客户民间声誉情况'>
                {getFieldDecorator('privateReputation', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='企业法人是否有政府背景'>
                {getFieldDecorator('governmentBackground', {
                    rules: [],
                })(
                  <Select readOnly>            
                    <Option value="1">是</Option>
                    <Option value="0">否</Option>
                  </Select>,
                )}
                </Form.Item> 
                
                
                <Form.Item label='新产品认定级别'>
                {getFieldDecorator('productLevel', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='国家级专利个数'>
                {getFieldDecorator('nationalPatents', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='产品销售范围'>
                {getFieldDecorator('productSales', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='法人代表本地居住年限'>
                {getFieldDecorator('yearToLive', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='法人代表汽车及不动产价值总额'>
                {getFieldDecorator('totalValue', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                </div>
                <div style={{float:'right',width:'40%'}}>
                <Form.Item label='担保金额1'>
                {getFieldDecorator('guaranteeAmountOne', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='币种1'>
                {getFieldDecorator('currencyOne', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item>
                <Form.Item label='担保质押方式1'>
                {getFieldDecorator('guaranteedPledgeMethodOne', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item>
                <Form.Item label='担保金额2'>
                {getFieldDecorator('guaranteeAmountTwo', {
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item> 
                <Form.Item label='币种2'>
                {getFieldDecorator('currencyTwo', {
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item>
                <Form.Item label='担保质押方式2'>
                {getFieldDecorator('guaranteedPledgeMethodTwo', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item>
                <Form.Item label='关联客户数'>
                {getFieldDecorator('associatedCustomers', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item>
                <Form.Item label='主办机构'>
                {getFieldDecorator('organiser', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item>
                <Form.Item label='年初固定授信额度'>
                {getFieldDecorator('planBeginningYearReal', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item>
                <Form.Item label='年初计划授信额度'>
                {getFieldDecorator('planBeginningYear', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item>
                <Form.Item label='年末信用额度'>
                {getFieldDecorator('yearEndCreditLimit', {
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item>
                <Form.Item label='计划压缩授信额度'>
                {getFieldDecorator('planCompress', {
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item>
                <Form.Item label='不良贷款余额'>
                {getFieldDecorator('nonPerformingBalance', {
                    rules: [],
                })(
                    <Input readOnly
                    />,
                )}
                </Form.Item>
                <Form.Item label='分类调整'>
                {getFieldDecorator('governmentBackground', {
                    rules: [],
                })(
                  <Select readOnly>            
                    <Option value="1">是</Option>
                    <Option value="0">否</Option>
                  </Select>,
                )}
                </Form.Item > 
                <Button style={{marginRight:'23%',marginLeft:'20%'}} onClick={ ()=>this.saveChange(this.state.data)}
                   htmlType="submit"  >
                    自动录入
                  </Button>
                  <Button> <Link to={'/addiloan/'+data.id}>下一步</Link></Button> 
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
    username:state.getIn(['login','username'])

})
const mapDispath=(dispatch)=>{
    return{
        
        
    }
}
export default connect(mapState,mapDispath)(AddBase);