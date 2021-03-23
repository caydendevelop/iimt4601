import React from "react";
import {Card} from 'antd';

function Card1(){
  return(
    <React.Fragment>
    <Card title="Course selected" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>COMP3359</p>
      <p>COMP1117</p>
      <p>Card content</p>
      </Card>
      <Card title="Course clashed" style={{ width: 300 }}>
      <p>COMP3359</p>
      <p>COMP1117</p>      
      </Card>
  </React.Fragment>
  );
}

export default Card1;