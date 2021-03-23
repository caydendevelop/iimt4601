import React from 'react';
import './SignUpPage.css';
import { Button, Input, Space, AutoComplete } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function SignUpPage() {
    return (
        <div className="positioning">
            <img src="/images/logo1.png" alt="logo here" className="logodesign" ></img>
            <div>
                <h1>SIGN UP</h1>
                <div className="parent">
                    <Input className="FirstNameInput" placeholder="First Name" />
                    <Input className="LastNameInput" placeholder="Last Name" />
                    <Input className="SignUpInput" placeholder="Username" />
                    <Input.Group compact>
                        <AutoComplete
                            className="SignUpInput"
                            placeholder="Email"
                        />
                    </Input.Group>
                    <Space direction="vertical">
                        <Input.Password
                            className="PasswordInput"
                            placeholder="Password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <Input.Password
                            className="PasswordInput"
                            placeholder="Confirm Password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Space>
                    <div className="buttonsPositioning">
                        <Button type="primary" className="antd-button-primary">Create Account</Button>
                        <Button type="primary" className="antd-button-primary">Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default SignUpPage;
