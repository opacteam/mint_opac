import React from "react";
import { Input, Form, Icon, Button, Checkbox } from "antd";
const { Search } = Input;

class SearchBar extends React.Component {
  render() {
    return (
      <>
        {" "}
        <Form
          className="login-form"
          onSubmit={e => {
            console.log("test");

            let form = this.props.form;

            console.log(form);
          }}
        >
          <Form.Item>
            <Input
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
const SearchForm = Form.create({ name: "search" })(SearchBar);
export default SearchForm;
