import React, { Component} from 'react';
import { List ,Typography, Button} from 'antd';
import 'antd/dist/antd.css';
const data = [
    {title:'大连理工大学',theme:'客户名称：'},
    {title:'31809120',   theme:'客户号：     '},
    {theme:'客户经理工号：',title:'012345'},
    {theme:'客户经理姓名：',title:'李四'},
    {theme:'借款证件号码：',title:'21421421412'}

];

class Creditrate extends Component{
    render(){
        return (
            <div>
            <div style={{ float:'left',width:'50%'}}>
            <h3 style={{ marginBottom: 16 }}>业务信息</h3>
            <List
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item>
                     <Typography.Text mark>{item.theme}</Typography.Text> 
                     <div style={{marginLeft:'60%'}}>
                     {item.title}
                     </div>
                </List.Item>
              )}
            />         
           
          </div>
          <div style={{ float:'right',width:'40%'}}>
          <h3 style={{ marginBottom: 16 }}>评级结果</h3> 
          <Button>评级结果</Button>
             </div>
         </div>
        )
    }
}
export default Creditrate;