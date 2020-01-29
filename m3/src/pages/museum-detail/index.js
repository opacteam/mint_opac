import React from "react";
import "./index.css";
import PageLayout from "../../components/Layout";
import { xmlToJson, isGrid } from "../../services";
import { OnPageContext } from "../../context";
import { Row, Col, Layout, Icon, Menu, Button } from "antd";
import Content from "./Content";
import DetailHeader from "./DetailHeader";
class MuseumDetail extends React.Component {
  constructor(props) {
    super(props);

    let xml = document.querySelector("#detail");
    let json = xmlToJson(xml, []);
    this.state = {
      data: json.detail
    };
  }
  render() {
    let { data } = this.state;
    return (
      <OnPageContext.Provider value="2">
        <PageLayout>
          <Row className="museum-detail">
            <DetailHeader data={data} />
            <Content data={data} />
          </Row>
        </PageLayout>
      </OnPageContext.Provider>
    );
  }
}

export default MuseumDetail;
