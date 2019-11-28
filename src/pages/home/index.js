import React from "react";
import Layout from "../../components/Layout";
import { Typography, Row, Col } from "antd";
import SearchBar from "../../components/Search";
const { Title, Paragraph } = Typography;
class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Title level={2}>Search All Collections</Title>
        <Paragraph strong>
          Search the MINISIS MINT collections including museum, library,
          archive, photographs and more.
        </Paragraph>
        <Row type="flex" justify="start">
          <Col xs={24} lg={12}>
            <SearchBar />
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Home;
