import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch } from "react-redux";
import { logOut } from "../../actions/user";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Menu, Dropdown } from "antd";

import {
  LoginOutlined,
  UserAddOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Navi = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState();

  const exit = async (id) => {
    await dispatch(logOut(id));
    setUser(null);
    history.push("/");
  };

  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [location, user]);

  const menu = (
    <Menu>
      <Menu.Item>
        {user ? (
          <Link to="/admin/home" style={{ fontSize: "15px", color: "green" }}>
            {user.user.username}
          </Link>
        ) : null}
      </Menu.Item>

      <Menu.Item>
        <Link
          to=""
          onClick={(e) => {
            exit(user.user._id);
          }}
        >
          <PoweroffOutlined style={{ fontSize: "15px", color: "red" }} />
          <span style={{ fontSize: "15px", color: "red" }}>Logout</span>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Navbar
        className="border-bottom shadow-sm bg-white fixed-top"
        expand="md"
      >
      
        <Container>
          <NavbarBrand className="p-0">
            <Link style={{ fontSize: "24px" }} to="/">
              Alidrk.com
            </Link>
          </NavbarBrand>
          {
            user ? 
            <Nav className="ml-auto d-flex flex-row" navbar>
            <NavItem style={{ paddingTop: "3px" }}>
              <Link
                className="text-dark font-weight-bold about-lnk active mr-3"
                to="/about"
                style={{ fontSize: "14px" }}
              >
                About Me
              </Link>
            </NavItem>

            <NavItem>
              <Dropdown overlay={menu} placement="bottomCenter">
                <UserOutlined style={{cursor:"pointer"}} />
              </Dropdown>
            </NavItem>
          
          </Nav> :
          <Nav className="ml-auto d-flex flex-row" navbar>
          <NavItem style={{ paddingTop: "3px" }}>
            <Link
              className="text-dark font-weight-bold about-lnk active mr-3"
              to="/about"
              style={{ fontSize: "14px" }}
            >
              About Me
            </Link>
          </NavItem>
        </Nav>
          }
        </Container>
      </Navbar>
    </div>
  );
};

export default Navi;
