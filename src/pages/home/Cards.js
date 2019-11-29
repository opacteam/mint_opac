import React from "react";
import { Card, Col, Row, Typography } from "antd";
const { Meta } = Card;
const DESCRIPTION = {
  archive:
    "The archives collection contains historic state government records about the general assembly, state agencies, governors, natural resources, land grants and more.",
  library:
    "The library collection includes books, city and county directories, newspapers, biographies, family histories, historical magazines, and more",
  museum:
    "The museum collection contains more than 80,000 objects that document Iowa history including airplanes, marbles, minerals, quilts, furniture and more.",
  special:
    "Special collections include photographs, manuscripts, ephemera, maps, and audio and video recordings."
};
class Cards extends React.Component {
  render() {
    return (
      <Row gutter={32} className="cards-row">
        <Col xs={24} lg={12} className="cards-col">
          <Card
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
