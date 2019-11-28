import React from "react";

import { Layout, Menu } from "antd";
const { Header } = Layout;

class PageHeader extends React.Component {
  render() {
    return (
      <>
        {" "}
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={"1"}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Museum</Menu.Item>
            <Menu.Item key="3">Library</Menu.Item>
            <Menu.Item key="4">Archive</Menu.Item>
          </Menu>
        </Header>
      </>
    );
  }
}

export default PageHeader;
