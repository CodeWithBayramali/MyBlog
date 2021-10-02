import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import index from "../components/common/index";
import About from "../components/common/About";
import NotFound from "../components/common/NotFound";
import Login from "../components/auth/Login";
import BlogDetails from "../components/blog/BlogDetails";
import Navi from "../components/common/Navbar";
import { BackTop, Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import AdminHome from "../components/admin/AdminHome";
import Comment from "../components/admin/Comment";
import Users from "../components/admin/Users";
import EditPost from "../components/admin/EditPost";

export const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
      <Navi />
        <Switch>
          <Route exact path="/" component={index} />
          <Route path="/about" component={About} />
          <Route path="/login/adminloginss" component={Login} />
          <Route exact path="/details/:id" component={BlogDetails} />
          <Route path="/admin/home" component={AdminHome}/>
          <Route path="/admin/admincomment" component={Comment}/>
          <Route path="/admin/adminuserss" component={Users}/>
          <Route path="/admin/editpost/:id" component={EditPost}/>
          <Route component={NotFound} />
        </Switch>

        <BackTop>
            <Button
              type="primary"
              size="large"
              className="shadow-lg"
              shape="circle"
              icon={<ArrowUpOutlined style={{ fontSize: "24px" }} />}
            />
          </BackTop>
          </BrowserRouter>
          </>
  );
};
