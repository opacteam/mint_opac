import React from "react";
import Layout from "../../components/Layout";
import { OnPageContext } from "../../context";
class Museum extends React.Component {
  render() {
    return (
      <OnPageContext.Provider value="2">
        <Layout>
          <h1>Museum</h1>
        </Layout>
      </OnPageContext.Provider>
    );
  }
}

export default Museum;
