import React from 'react';
import './FrontPage.css'
import { Input, Space, Button } from 'antd';

const { Search } = Input;

const onSearch = value => console.log(value);

function FrontPage() {
  return (
    <>
        <img src="/images/logo1.png" alt="logo here" className="logo" style={{width:150, height:100, marginBottom: 10}}></img>
        <div className="positioning">
            <Space direction="vertical" className="SearchBar">
                <Search placeholder="Search here" allowClear onSearch={onSearch} size="middle" className="design" />
            </Space>
            <Button type="text" className="ButtonDesign" href="./LoginPage">Sign In</Button>
        </div>
        
        <img src="/images/banner1.png" alt="banner here" className="banner" style={{marginBottom: 1}}></img>

        <div className="positioning" style={{marginTop: 50}}>
            <a href="./ReviewFront">
                <figure>
                    <img src="/images/cinfo.png" alt="Course Information and Review" className="icon"></img>
                    <figcaption>Course Information and Review</figcaption>
                </figure>
            </a>
            <a href="./Timetable">
                <figure>
                    <img src="/images/planner.png" alt="Timetable Planner" className="icon"></img>
                    <figcaption>Timetable Planner</figcaption>
                </figure>
            </a>
        </div>
    </>
    );
}

  export default FrontPage;
