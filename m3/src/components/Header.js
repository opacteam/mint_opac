import React from "react";

import { Layout, Menu } from "antd";
const { Header } = Layout;
import { OnPageContext } from "../context";
import { LINK } from "../services";
class PageHeader extends React.Component {
  render() {
    return (
      <>
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={this.context}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1" onClick={_ => (window.location = LINK.home)}>
              Home
            </Menu.Item>
            <Menu.Item key="2" onClick={_ => (window.location = LINK.museum)}>
              Museum
            </Menu.Item>
            <Menu.Item key="3" onClick={_ => (window.location = LINK.library)}>
              Library
            </Menu.Item>
            <Menu.Item key="4" onClick={_ => (window.location = LINK.archive)}>
              Archive
            </Menu.Item>
          </Menu>
        </Header>
      </>
    );
  }
}
PageHeader.contextType = OnPageContext;
export default PageHeader;
