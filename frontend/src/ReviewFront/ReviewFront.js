import React from 'react';
import './ReviewFront.css';
import { Input, Space, Button } from 'antd';

const { Search } = Input;

const onSearch = value => console.log(value);


function ReviewFront() {
  return (
    <div className="FListParent">
        <Space direction="vertical">
          <Search placeholder="Search by course code / course title" allowClear onSearch={onSearch} className="SearchBar" />
        </Space>

        <div className="FacultyList">
            <h2>Browse by Faculty:</h2>
            <Button type="text" className="antd-button-text">Faculty of Arts</Button>
            <Button type="text" className="antd-button-text"  href="./CList">Faculty of Business and Economics</Button>
            <Button type="text" className="antd-button-text">Faculty of Dentistry</Button>
            <Button type="text" className="antd-button-text">Faculty of Education</Button>
            <Button type="text" className="antd-button-text">Faculty of Engineering</Button>
            <Button type="text" className="antd-button-text">Faculty of Law</Button>
            <Button type="text" className="antd-button-text">Lee Ka Shing Faculty of Medicine</Button>
            <Button type="text" className="antd-button-text">Faculty of Science</Button>
            <Button type="text" className="antd-button-text">Faculty of Social Science</Button>
        </div>
    </div>
    );
}

  export default ReviewFront;
