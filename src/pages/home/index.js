import React from "react";
import "./index.css";
import Layout from "../../components/Layout";
import { Typography, Row, Col } from "antd";
import SearchBar from "../../components/Search";
import Cards from "./Cards";
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
        <Row type="flex" justify="start" gutter={32}>
          <Col xs={24} lg={12}>
            <SearchBar />
          </Col>
        </Row>
        <Cards />
      </Layout>
    );
  }
}

export default Home;
