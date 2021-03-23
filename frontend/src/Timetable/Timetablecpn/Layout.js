import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Calender from "./Calendar.js";
import Card1 from "./Card.js";
const { Header, Content, Footer } = Layout;

function Layout1() {
    return(
    <>
    <Layout className="layout">
    <Content style={{ padding: '0 50px', background: '#fefbefff' }}>
      <div className="site-layout-content">
      <div id="left">
      <Calender />
      </div>
      <div id="right">
      <Card1 />
      </div>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center', background: '#fefbefff' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </>
    );    
}
export default Layout1;
