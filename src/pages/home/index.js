import React from "react";
import "./index.css";
import PageLayout from "../../components/Layout";
import { Typography, Row, Col, Layout } from "antd";
import SearchBar from "../../components/Search";
import Cards from "./Cards";
const { Title, Paragraph } = Typography;
const { Content } = Layout;
import { OnPageContext } from "../../context";
class Home extends React.Component {
  render() {
    return (
      <OnPageContext.Provider value="1">
        <PageLayout>
          {" "}
          <Content style={{ padding: "0 24px", minHeight: "60vh" }}>
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
          </Content>
        </PageLayout>
      </OnPageContext.Provider>
    );
  }
}

export default Home;
