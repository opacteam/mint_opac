import React from "react";
import { Input } from "antd";
const { Search } = Input;

class SearchBar extends React.Component {
  render() {
    return (
      <>
        {" "}
        <Search placeholder="Search keyword" size="large" enterButton />
      </>
    );
  }
}

export default SearchBar;
