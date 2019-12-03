import React from "react";
import Layout from "../../components/Layout";
import { OnPageContext } from "../../context";
import HomeCarousel from "../../components/HomeCarousel";
import SearchBar from "../../components/Search";
import { Typography, Row, Col } from "antd";
const { Title, Paragraph } = Typography;
import { DESCRIPTION } from "../../messages";
class Museum extends React.Component {
  render() {
    let searchLink = document.getElementById("search-link");
    if (searchLink) {
      searchLink = searchLink.innerText;
    }
    console.log(searchLink);
    return (
      <OnPageContext.Provider value="2">
        <Layout>
          <Row type="flex" justify="center">
            <Col xs={24} lg={12}>
              <HomeCarousel />
            </Col>
          </Row>
          <Title level={2}>Museum</Title>
          <Typography.Text>{DESCRIPTION.museum}</Typography.Text>
          <Row type="flex" justify="center" gutter={32}>
            <Col xs={24} lg={12}>
              <SearchBar searchLink={searchLink} />
            </Col>
          </Row>
        </Layout>
      </OnPageContext.Provider>
    );
  }
}

export default Museum;
