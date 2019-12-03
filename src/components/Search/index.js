import React from "react";
import { Input, Form, Icon, Button, Checkbox } from "antd";
const { Search } = Input;

class SearchBar extends React.Component {
  render() {
    let action = this.props.searchLink;

    return (
      <>
        {" "}
        <Form
          action={action}
          className="login-form"
          method="POST"
          onSubmit={e => {
            console.log(e);
          }}
        >
          <Form.Item>
            <Input
              name="KEYWORD_CL"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
              placeholder="Search Keyword"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <Search placeholder="Search keyword" size="large" enterButton />
      </>
    );
  }
}
const SearchForm = Form.create()(SearchBar);
export default SearchForm;
