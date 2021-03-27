import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './CList.css'
import { Layout } from 'antd';
import { Table, Space, Input } from 'antd';

const { Content} = Layout;
const onSearch = value => console.log(value);
const { Search } = Input;
const columns = [
  {
    title: 'Course Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Reviews',
    dataIndex: 'reviews',
    key: 'reviews',
  },
  {
    title: 'Rating',
    dataIndex: 'stars',
    key: 'stars',
  },
  {
    title: 'Description',
    dataIndex: 'desc',
    key: 'desc',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Enrol Details',
    dataIndex: 'details',
    key: 'details',
    render: text => <a>{text}</a>,
  },

];

const data = [
  {
    key: '1',
    name: 'ACCT1101 Introduction to Financial Accounting',
    reviews: 3,
    stars: '***',
    desc: 'Desc (Hyperlink)',
    details: 'Select',
  },
  {
    key: '2',
    name: 'ACCT2102 Intermediate Financial Accounting I',
    stars: '**',
    reviews: 4,
    desc: 'Desc (Hyperlink)',
    details: 'Select',
  },
  {
    key: '3',
    name: 'ACCT2105 Introduction to Management Accounting',
    stars: '*',
    reviews: 5,
    desc: 'Desc (Hyperlink)',
    details: 'Select',
  },
  {
    key: '4',
    name: 'IIMT4601 Information Systems Project Management',
    stars: '****',
    reviews: 1,
    desc: 'Desc (Hyperlink)',
    details: 'Select',
  },
];


function CList() {
  return (
    <div>
    <Layout style={{ background: '#fefbefff' }}>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 , background: '#fefbefff'}}>
    <Space direction="vertical"><Search className="InputBox" placeholder="input search text" onSearch={onSearch} enterButton /></Space>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <Table dataSource={data} columns={columns}/>
      </div>
    </Content>
  </Layout>,
  </div>
  );
}


export default CList;
