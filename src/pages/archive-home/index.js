import React from "react";
import Layout from "../../components/Layout";
import { OnPageContext } from "../../context";
import HomeCarousel from "../../components/HomeCarousel";
import SearchBar from "../../components/Search";
import { Typography, Row, Col } from "antd";
const { Title, Paragraph } = Typography;
import { DESCRIPTION } from "../../messages";
class Archive extends React.Component {
  render() {
    return (
      <OnPageContext.Provider value="4">
        <Layout>
          <Row type="flex" justify="center">
            <Col xs={24} lg={12}>
              <HomeCarousel />
            </Col>
          </Row>
          <Title level={2}>Archive</Title>
          <Typography.Text>{DESCRIPTION.archive}</Typography.Text>
          <Row type="flex" justify="center" gutter={32}>
            <Col xs={24} lg={12}>
              <SearchBar />
            </Col>
          </Row>
        </Layout>
      </OnPageContext.Provider>
    );
  }
}

export default Archive;
