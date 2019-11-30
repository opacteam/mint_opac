import React from "react";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;
import { OnPageContext } from "../context";
class PageSider extends React.Component {
  render() {
    return (
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu
          mode="inline"
          defaultSelectedKeys={[this.context]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          <Menu.Item key="1">
            <Icon type="home" theme="filled" />
            Home
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="bank" theme="filled" />
            Museum
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="read" theme="filled" />
            Library
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="container" theme="filled" />
            Archive
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
PageSider.contextType = OnPageContext;
export default PageSider;
