import { Upload, message, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import React, { Component} from 'react';
const props = {
  name: 'file',
  action: 'http://localhost:8080/user/fileupload.do',
  
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
class MyUpload extends Component{
    
      render(){
        return(
            <Upload {...props}>
              <Button>
                <Icon type="upload" />上传文件
              </Button>
            </Upload>
        )
      }
   
}
export default MyUpload;

