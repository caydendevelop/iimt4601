import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

// const { SubMenu } = Menu;

class NavBar extends React.Component {
  state = {
    current: "FrontPage",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="Clist">
          <Link to="/CList">CList</Link>
        </Menu.Item>

        <Menu.Item key="ReviewFront">
          <Link to="/ReviewFront">CourseReviewFront</Link>
        </Menu.Item>

        <Menu.Item key="CReview">
          <Link to="/CReview">CReview</Link>
        </Menu.Item>

        <Menu.Item key="FrontPage">
          <Link to="/">FrontPage</Link>
        </Menu.Item>

        <Menu.Item key="LoginPage">
          <Link to="/LoginPage">LoginPage</Link>
        </Menu.Item>

        <Menu.Item key="AddReview">
          <Link to="/AddReview">AddReview</Link>
        </Menu.Item>

        <Menu.Item key="Timetable">
          <Link to="/Timetable">Timetable</Link>
        </Menu.Item>

        <Menu.Item key="SignUp">
          <Link to="/SignUp">SignUpPage</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
