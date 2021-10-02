import React from "react";
import {Link} from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserSwitchOutlined,
  ReadOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const Adminslider = () => {
    return (
        <Sider
        width={200}
        style={{ height: "auto" }}
        className="site-layout-background"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1">
            <Link to="/admin/home">
              <ReadOutlined style={{ fontSize: "28px" }} /> Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin/admincomment">
              <CommentOutlined style={{ fontSize: "28px" }} /> Comment
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/admin/adminusers">
              <UserSwitchOutlined style={{ fontSize: "28px" }} /> Users
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
}

export default Adminslider
