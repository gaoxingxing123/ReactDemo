import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { Form,  Input, Button } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Menu} from 'antd';
import { DatePicker} from 'antd';
import moment from 'moment'
import {MyFormContent} from '../style'
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
class Loan extends Component {
  constructor(props) {
    super(props);

    this.state = {
     id:'',
     loanid:''
    };
  }
  componentDidMount(){
    this.setState({
        id:this.props.match.params.id
    })
  
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
   //type 2为企业
    let url='http://192.168.3.236:8088/loanDetails'
        axios.post(url,{
            accountManager: data.accountManager,          
            accountNumber: data.accountNumber,
            borrowerIdNumber: data.borrowerIdNumber,
            borrowingNumber: data.borrowingNumber,
            businessInstitutions: data.businessInstitutions,
            cellphoneNumber: data.cellphoneNumber,
            clientNumber: data.clientNumber,
            contractNo: data.contractNo,
            corporateInfoId: this.state.id,          
            discountedStatus: data.discountedStatus,
            endDate: moment(data.endDate).format('x'),
            homePhone:data.homePhone,          
            interestRate:data.interestRate,
            loanAccount: data.loanAccount,
            loanAmount: data.loanAmount,
            loanBalance: data.loanBalance,
            loanDate: moment(data.loanDate).format('x'),
            loanForm: data.loanForm,
            loanMethod: data.loanMethod,
            loanNature: data.loanNature,
            loanUse: data.loanUse,
            marketingPersonnel: data.marketingPersonnel,
            maturityDate: moment(data.maturityDate).format('x'),
            offSheetArrears: data.offSheetArrears,
            onSheetArrears: data.onSheetArrears,
            pipelineNumber: data.pipelineNumber,
            povertyAlleviation: data.povertyAlleviation,
            rolloverDueDate: moment(data.rolloverDueDate).format('x'),
            useDetails: data.useDetails ,
            type:2          
        }       
        ).then((res)=>{
            console.log(res);
            const result=res.data;
            
           if(result===''){
                alert("新增失败")
            }else{
              this.setState({
                  loanid:result
                 
              })
              alert("新增成功")
            }  
                           
        }).catch((error)=>{
            alert(error)
        });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const {loanid}=this.state
        return (
            <MyFormContent>
            <div key={this.props.location.key}>
                <Menu
                                theme="black"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '40px',float:'left',marginLeft:'2%',height:'4vh'}}
                                >
                                 <Menu.Item key="1"> 客户基本信息</Menu.Item>
                                <Menu.Item key="2"> 客户贷款信息 </Menu.Item>
                                <Menu.Item key="3"> 进展信息 </Menu.Item>                   
                </Menu>
                <div style={{height:'80px'}}></div>  
            <Form  {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
            <div>
            <div style={{float:'left',width:'40%',marginLeft:'8%'}}>                 
                <Form.Item label='借据号'>
                {getFieldDecorator('borrowingNumber', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='业务机构'>
                {getFieldDecorator('businessInstitutions', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='借款金额'>
                {getFieldDecorator('loanAmount', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='贷款余额'>
                {getFieldDecorator('loanBalance', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
               
                <Form.Item label='表内欠息'>
                {getFieldDecorator('onSheetArrears', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='表外欠息'>
                {getFieldDecorator('offSheetArrears', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='借款日期'>
                {getFieldDecorator('loanDate', {
                    rules: [],
                })(
                    <DatePicker  showTime/>
                )}
                </Form.Item> 
                <Form.Item label='到期日期'>
                {getFieldDecorator('maturityDate', {
                    rules: [],
                })(
                    <DatePicker  showTime/>
                )}
                </Form.Item> 
                <Form.Item label='展期到期日'>
                {getFieldDecorator('rolloverDueDate', {
                    rules: [],
                })(                                    
                   <DatePicker  showTime onChange={onChange} />
                )}
                </Form.Item> 
                <Form.Item label='息止日期'>
                {getFieldDecorator('endDate', {
                    rules: [],
                })(
                    <DatePicker  showTime/>
                )}
                </Form.Item> 
                
                
                <Form.Item label='贷款方式'>
                {getFieldDecorator('loanMethod', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='贷款性质'>
                {getFieldDecorator('loanNature', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='贷款用途'>
                {getFieldDecorator('loanUse', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='用途明细'>
                {getFieldDecorator('useDetails', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='贷款形态'>
                {getFieldDecorator('loanForm', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                </div>
                <div style={{float:'right',width:'40%'}}>
                <Form.Item label='利率'>
                {getFieldDecorator('interestRate', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='贷款账号'>
                {getFieldDecorator('loanAccount', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='合同号'>
                {getFieldDecorator('contractNo', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='客户经理'>
                {getFieldDecorator('accountManager', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='营销人员'>
                {getFieldDecorator('marketingPersonnel', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='手机号码'>
                {getFieldDecorator('cellphoneNumber', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='家庭电话'>
                {getFieldDecorator('homePhone', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='借款人身份号码'>
                {getFieldDecorator('borrowerIdNumber', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='贴现状态'>
                {getFieldDecorator('discountedStatus', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='年初计划授信额度'>
                {getFieldDecorator('planBeginningYear', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='科目号'>
                {getFieldDecorator('accountNumber', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='扶贫带动人数'>
                {getFieldDecorator('povertyAlleviation', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>         
                <Button style={{marginRight:'23%',marginLeft:'20%'}} onClick={ ()=>this.saveChange(this.props.form.getFieldsValue())}
                   htmlType="submit"  >
                    保存
                  </Button> 
                  <Button>                    
                      <Link to={ '/addeother/'+loanid }>下一步</Link>
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
function onChange(value, dateString) {
  
    
  }
const AddELoan = Form.create()(Loan);
const mapState=(state)=>({
    login1:state.getIn(['login','login']),
    username:state.getIn(['login','username']),
    enterpriseId:state.getIn(['myservice','enterpriseId'])===''?state.getIn(['login','enterpriseId']):state.getIn(['myservice','enterpriseId'])
})


 
export default connect(mapState,null) (AddELoan);