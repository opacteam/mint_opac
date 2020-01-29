import React from "react";
import { Row, Col, Layout, Icon, Menu, Button, Empty } from "antd";
import { extractDetailData } from "../../services/museum";
class DetailHeader extends React.Component {
  render() {
    const data = this.props.data;
    console.log(data);
    const item = extractDetailData(data);
    console.log(item);
    return (
      <Row>
        <Col xs={6}>
          {" "}
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No Image" />
        </Col>
        <Col xs={18}>asdf</Col>
      </Row>
    );
  }
}

export default DetailHeader;
