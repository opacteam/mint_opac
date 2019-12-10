import React from "react";
import PageLayout from "../../components/Layout";
import { OnPageContext } from "../../context";
import HomeCarousel from "../../components/HomeCarousel";
import SearchBar from "../../components/Search";
import { Typography, Row, Col, Layout } from "antd";
const { Title, Paragraph } = Typography;
const { Content } = Layout;
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
        <PageLayout>
          <Content style={{ padding: "0 24px", minHeight: "60vh" }}>
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
          </Content>
        </PageLayout>
      </OnPageContext.Provider>
    );
  }
}

export default Museum;
