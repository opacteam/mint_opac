import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
import minisis from "../assets/images/minisis.png";

class PageFooter extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        <img src={minisis} style={{ width: "200px", height: "auto" }} />
        <p>&copy; 2019 Minisis Inc. All Rights Reserved.</p>
      </Footer>
    );
  }
}

export default PageFooter;
