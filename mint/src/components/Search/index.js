import React from "react";
import { Input, Form, Icon, Button, Checkbox, Row, Col } from "antd";
const { Search } = Input;

class SearchBar extends React.Component {
  render() {
    let action = this.props.searchLink;

    return (
      <>
        {" "}
        <Row gutter={4}>
          <Form
            layout="inline"
            action={action}
            className="login-form"
            method="POST"
            onSubmit={e => {
              console.log(e);
            }}
          >
            <Col xs={24} lg={18}>
              <Form.Item
                wrapperCol={{ xs: 24, lg: 24 }}
                style={{ width: "100%" }}
              >
                <Input
                  onPressEnter={true}
                  allowClear={true}
                  name="KEYWORD_CL"
                  prefix={
                    <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="text"
                  placeholder="Search Keyword"
                />
              </Form.Item>
            </Col>
            <Col xs={24} lg={6}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Search
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Row>
      </>
    );
  }
}
const SearchForm = Form.create()(SearchBar);
export default SearchForm;
