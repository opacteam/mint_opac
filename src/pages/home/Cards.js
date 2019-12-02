import React from "react";
import { Card, Col, Row, Typography } from "antd";
const { Meta } = Card;
import { DESCRIPTION } from "../../messages";
import { LINK } from "../../services";
class Cards extends React.Component {
  render() {
    return (
      <Row gutter={32} className="cards-row">
        <Col xs={24} lg={12} className="cards-col">
          <Card
            onClick={_ => (window.location = LINK.archive)}
            className="cards-card"
            cover={<div className="cards-cover cover-archive"></div>}
          >
            <Meta
              title={<Typography.Title level={3}>Archive</Typography.Title>}
              description={
                <Typography.Text>{DESCRIPTION.archive}</Typography.Text>
              }
            />
          </Card>
        </Col>
        <Col xs={24} lg={12} className="cards-col">
          <Card
            onClick={_ => (window.location = LINK.library)}
            className="cards-card"
            cover={<div className="cards-cover cover-library"></div>}
          >
            <Meta
              title={<Typography.Title level={3}>Library</Typography.Title>}
              description={
                <Typography.Text>{DESCRIPTION.library}</Typography.Text>
              }
            />
          </Card>
        </Col>{" "}
        <Col xs={24} lg={12} className="cards-col">
          <Card
            onClick={_ => (window.location = LINK.museum)}
            className="cards-card"
            cover={<div className="cards-cover cover-museum"></div>}
          >
            <Meta
              title={<Typography.Title level={3}>Museum</Typography.Title>}
              description={
                <Typography.Text>{DESCRIPTION.museum}</Typography.Text>
              }
            />
          </Card>
        </Col>{" "}
        <Col xs={24} lg={12} className="cards-col">
          <Card
            onClick={_ => (window.location = LINK.special)}
            className="cards-card"
            cover={<div className="cards-cover cover-special"></div>}
          >
            <Meta
              title={
                <Typography.Title level={3}>
                  Special Collections
                </Typography.Title>
              }
              description={
                <Typography.Text>{DESCRIPTION.special}</Typography.Text>
              }
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Cards;
