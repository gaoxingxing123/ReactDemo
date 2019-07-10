import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Table, Input, Button, Icon,Spin } from 'antd';
import Highlighter from 'react-highlight-words';
import {actionCreators} from '../../store'
class MyTable1 extends Component{  
    constructor(props){
      super(props);
      this.state={
        searchText:''
      }
    }
    componentWillMount(){
        this.props.ListShow1()
    }
    getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      filterIcon: filtered => (
        <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
      },
      render: text => (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ),
    });
  
    handleSearch = (selectedKeys, confirm) => {
      confirm();
      this.setState({ searchText: selectedKeys[0] });
    };
  
    handleReset = clearFilters => {
      clearFilters();
      this.setState({ searchText: '' });
    };
  
      render(){
          const {data,loading}=this.props;
          const columns = [
            {
              title: '编号',
              dataIndex: 'id',
              key: 'id',
              width: '10%',
              ...this.getColumnSearchProps('id'),
            },
            {
              title: '工资',
              dataIndex: 'salay',
              key: 'salay',
              width: '10%',
              ...this.getColumnSearchProps('salay'),
            },
            {
              title: '用户职务',
              dataIndex: 'userType',
              key: 'userType',
              width: '10%',
              ...this.getColumnSearchProps('userType'),
            },
          ]; 
        
    return (   <div>
        <div>同步加载</div>
        {
            loading?
            <Table   style={{width:'50%',textAlign:'center'}} columns={columns} dataSource={(data).toJS()} rowKey='id' size="small" />
            :<Spin size="small" /> 
        }
                </div>
                               
            )
          
      }
  }
  const mapState=(state)=>({
      data:state.getIn(['enterprise','data1']),
      loading:state.getIn(['enterprise','loading'])
      
    })
  
  const mapDispatch=(dispatch)=>{
    return{
        ListShow1(){
            dispatch(actionCreators.ListShow1())
        }
    }
  }
  export default  connect(mapState,mapDispatch)(MyTable1);