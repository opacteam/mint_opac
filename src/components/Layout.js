import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sider from "./Sider";
import { Layout, Menu } from "antd";
import Breadcrumb from "./Breadcrumb";
const { Content } = Layout;
import { BackTop } from "antd";
class PageLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb pages={["Home"]} />
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider />
            <Content style={{ padding: "0 24px", minHeight: "60vh" }}>
              {this.props.children}
            </Content>
            <BackTop />
          </Layout>
        </Content>
        <Footer />
      </Layout>
    );
  }
}

export default PageLayout;
