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
        <Layout>
          <Sider />
          <Content id="main-content">
            <Breadcrumb pages={["Home"]} />
            <Layout style={{ padding: "24px 0", background: "#fff" }}>
              {this.props.children}

              <BackTop />
            </Layout>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    );
  }
}

export default PageLayout;
