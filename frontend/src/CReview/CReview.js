import { Typography } from 'antd';
import 'antd/dist/antd.css';
import './CReview.css';
import { Layout, Menu, Breadcrumb, Space, Input, Row, Col, Divider, Button} from 'antd';

const onSearch = value => console.log(value);
const { Search } = Input;
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;


function CReview() {
    return (
      <div className="background">
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Space direction="vertical"><Search className="InputBox" placeholder="input search text" onSearch={onSearch} enterButton /></Space>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <h1> IIMT4601 Information Systems Project Management </h1>
        <Row>
      <Col span={12}><Title style={{color: 'purple'}}> A+</Title> </Col> 
      <Col span={12}><Title style={{color: 'purple'}}> 4/5</Title></Col>
    </Row>
    <Row>
    <Col span={12}><Title level = {4}> Average Grade</Title> </Col>
    <Col span={12}><Title level = {4}> Average Workload</Title> </Col>
        </Row>
        <Button className="antd-button-primary" type="primary" block style ={{width: 800}} href="./AddReview">
      Add a Review
    </Button>
    <Input size="medium" placeholder="User123
8 February 2021
Very good!
" disabled="true"/>
        </div>
      </Content>
    </div>
    );
  }
  
  
  export default CReview;