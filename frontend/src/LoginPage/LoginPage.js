import React from 'react';
import './LoginPage.css'
import { Button, Input, AutoComplete, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function LoginPage() {
  return (
    <div className="positioning">
      <img src="/images/logo1.png" alt="logo here" className="logodesign"></img>
      <div>
        <h1>LOGIN</h1>
        <div className="parent">
          <Input.Group compact>
          <AutoComplete
            className="InputBox"
            placeholder="Email"
            options={[{ value: 'text 1' }, { value: 'text 2' }]}
          />
          </Input.Group>

          <Space direction="vertical">
            <Input.Password
              className="InputBox"
              placeholder="Password"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Space>

          <div className="buttonsPositioning">
            <Button type="primary" className="antd-button-primary">Login</Button>
            <Button type="primary" className="antd-button-primary">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
