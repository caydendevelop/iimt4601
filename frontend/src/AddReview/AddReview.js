import { Typography } from 'antd';
import 'antd/dist/antd.css';
import './AddReview.css';
import { Layout, Breadcrumb, Space, Input, Row, Col, Divider, Button, Menu, Dropdown, message} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const onSearch = value => console.log(value);
const { Search } = Input;
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

const grademenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        A+
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        A
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        A-
      </Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        B+
      </Menu.Item>
      <Menu.Item key="5" icon={<UserOutlined />}>
        B
      </Menu.Item>
      <Menu.Item key="6" icon={<UserOutlined />}>
        B-
      </Menu.Item>
      <Menu.Item key="7" icon={<UserOutlined />}>
        C+
      </Menu.Item>
      <Menu.Item key="8" icon={<UserOutlined />}>
        C
      </Menu.Item>
      <Menu.Item key="9" icon={<UserOutlined />}>
        C-
      </Menu.Item>
      <Menu.Item key="10" icon={<UserOutlined />}>
        D+
      </Menu.Item>
      <Menu.Item key="11" icon={<UserOutlined />}>
        D
      </Menu.Item>
      <Menu.Item key="12" icon={<UserOutlined />}>
        D-
      </Menu.Item>
      <Menu.Item key="13" icon={<UserOutlined />}>
        F
      </Menu.Item>
    </Menu>
  );

  const workloadmenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3
      </Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        4
      </Menu.Item>
      <Menu.Item key="5" icon={<UserOutlined />}>
        5
      </Menu.Item>
    </Menu>
  );

function AddReview() {
    return (
      <div className="background">
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Space direction="vertical"><Search className="InputBox" placeholder="Search here" onSearch={onSearch} enterButton /></Space>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <h2> IIMT4601 Information Systems Project Management </h2>
        <div className="formatting">
	<span className="spanformatting">What grade did you get?</span>
	<span className="spanformatting"><Dropdown overlay={grademenu}>
      <Button>
        Grade <DownOutlined />
      </Button>
    </Dropdown></span>
</div>
<div className="formatting">
	<div className="spanformatting">How was the workload? (1: light, 5: heavy)</div>
	<div className="spanformatting"><Dropdown overlay={workloadmenu}>
      <Button>
        Workload <DownOutlined />
      </Button>
    </Dropdown></div>
</div>
        <Input className="cmbox" size="medium" placeholder="Add a comment..." prefix={<UserOutlined />}/>
        <Row>
        <Col flex={100}></Col>
        <Col flex={1}><Button className="antd-button-primary" type="primary">Submit</Button></Col>
        <Col flex={1}><Button className="antd-button-primary" type="primary">Cancel</Button></Col>
          </Row>
        </div>
      </Content>
    </div>
    );
  }

  export default AddReview;
