import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { Form,  Input, Button } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Menu} from 'antd';
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
class AddOhter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: {
        value: '123456789',
      },
     loanid:'',
     id:''
    };
  }
  componentDidMount(){
      console.log(this.props)
    this.setState({
        loanid:this.props.match.params.id
    })
    console.log('loanid'+this.props.match.params.id)
    let url='http://192.168.3.236:8088/businessDetails?loanId='+this.props.match.params.id+'&type=2'
    axios.get(url    
    ).then((res)=>{
        console.log(res.data);
        this.setState({           
         id:res.data.loanInfo.corporateInfoId
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
  saveChange(data){
   
    let url='http://192.168.3.236:8088/businessDetails'
        axios.post(url,{
            loanid:this.state.loanid,
            describe:data.describe,
            mainManager:data.mainManager,
            secondManager:data.secondManager           
        }       
        ).then((res)=>{
            console.log(res);
            const result=res.data;
            
           if(result===1){
                alert("新增成功")
            }else{
              this.setState({
                  loanid:result
              })
            }  
                           
        }).catch((error)=>{
            alert(error)
        });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    
        return (
            <MyFormContent>
            <div key={this.props.location.key}>
                <Menu
                                theme="black"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '40px',float:'left',marginLeft:'2%',height:'4vh'}}
                                >
                                 <Menu.Item key="1"> 客户基本信息 </Menu.Item>
                                <Menu.Item key="2"> 客户贷款信息 </Menu.Item>
                                <Menu.Item key="3"> 进展信息</Menu.Item>                   
                </Menu>
                <div style={{height:'80px'}}></div>  
            <Form  {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
           
            <Form.Item label='贷款进度描述'>
                {getFieldDecorator('describe', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='主客户经理'>
                {getFieldDecorator('mainManager', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
               
                <Form.Item label='次客户经理'>
                {getFieldDecorator('secondManager', {
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
                      <Link to={ '/'}>返回新增首页</Link>
                  </Button>
                  <div style={{height:'10px'}}></div>
                                                
                                                   
          </Form>
          </div>
          </MyFormContent>
        );
        
  }
  
}
const AddEOther = Form.create()(AddOhter);
const mapState=(state)=>({
    login1:state.getIn(['login','login']),
    username:state.getIn(['login','username']),
    enterpriseId:state.getIn(['myservice','enterpriseId'])===''?state.getIn(['login','enterpriseId']):state.getIn(['myservice','enterpriseId'])
})


 
export default connect(mapState,null) (AddEOther);