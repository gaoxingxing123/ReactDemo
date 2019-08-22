import { Form,  Input, Button} from 'antd';
import React, { Component} from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import { TreeSelect } from 'antd';

class MyChange extends Component {
    constructor(props){
        super(props);
        this.state={
          treeData:[],
          name:'',  
          description:'' ,
          value:[]
        }
      }
      roleNameChange=(event)=>{
        this.setState({
          name:event.target.value
        })
      }
        roledChange=(event)=>{
          this.setState({
            description:event.target.value
          })
      }
      onChange = value => {
        console.log('onChange ', value);
        this.setState({ value });
      };
      componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://192.168.3.236:8088/treeSysPermission')
        .then(function (res) {
          _this.setState({            
            treeData:res.data        
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            error:error
          })
        })
      }
      componentWillMount(){
        
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://192.168.3.236:8088/sysRole/'+this.props.match.params.id)
        .then(function (res) {
          _this.setState({           
            name:res.data.name,
            description:res.data.description
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            error:error
          })
        })

        axios.get('http://192.168.3.236:8088/sysRolePermission/getPermissionList?roleId='+this.props.match.params.id)
        .then(function (res) {            
             let temp=[]
             res.data.map((item)=>
             temp.push(item.sgPermissionEntity.id)
						)
          _this.setState({          
            value:temp
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            error:error
          })
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
  ChangeRole(){
    let url='http://192.168.3.236:8088/sysRole?ids='+this.state.value
        axios.post(url,{
            ids:this.state.value,
            name:this.state.name,
            description:this.state.description,
            id:this.props.match.params.id    
        }       
        ).then((res)=>{
            console.log(res);
            const result=res.data;
            
           if(result.msg==="操作成功"){
                alert("修改成功")
                this.props.history.push('/') 
            }else{
              alert("修改失败")
            }  
                           
        }).catch((error)=>{
            alert(error)
        });
  }


  render() {
    const {treeData}=this.state;
    const tProps = {
      treeData,
      showCheckedStrategy:TreeSelect.SHOW_ALL,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      searchPlaceholder: '请选择',
      defaultExpandAll:true,
      autoExpandParent: true,
      expandedKeys:['287'],
      style: {
        width: 400,
      },
    };
    return (
      <div>
      <Input placeholder="角色名" onChange={this.roleNameChange} value={this.state.name} />
      <Input placeholder="角色描述" onChange={this.roledChange} value={this.state.description}/>
      <TreeSelect {...tProps} />
      <Button onClick={()=>{this.ChangeRole()}}>修改</Button>
      </div>)
  }
}

const RoleInfoChange = Form.create({ name: 'normal_login' })(MyChange)
export default RoleInfoChange;