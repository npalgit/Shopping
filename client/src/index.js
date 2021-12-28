import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Site.Layout";
import ListShoppingPage from "./pages/shopping/list";

const App = () => {
  return (
    <Layout>
      <ListShoppingPage></ListShoppingPage>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
