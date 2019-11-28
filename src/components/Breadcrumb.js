import React from "react";
import { Breadcrumb } from "antd";

class PageBreadcrumb extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.pages);
    return (
      <Breadcrumb style={{ margin: "16px 0" }}>
        {this.props.pages.map((page, index) => (
          <Breadcrumb.Item key={index}>{page}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    );
  }
}

export default PageBreadcrumb;
