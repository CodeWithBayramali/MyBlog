import React from "react";
import { Layout } from "antd";
import Adminslider from "./Adminslider";
import Post from "./Post"


const AdminHome = () => {
  

  return (
    <Layout>
      <Adminslider />
      <Layout style={{ padding: "0 24px 24px" }}>
        <Post/>
      </Layout>
    </Layout>
  );
};

export default AdminHome;
