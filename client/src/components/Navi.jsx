import React, { useState } from "react";
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import {LoginOutlined,UserAddOutlined} from '@ant-design/icons'

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
      <Navbar
        className="border-bottom shadow-sm bg-white w-100 fixed-top"
        light
        expand="md"
      >
      <div className="container-sm pl-sm-5 pr-sm-5">
          <NavbarBrand className="p-0">
            <Link style={{ fontSize: "24px" }} to="/">
              Alidrk.com
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse className="ml-auto d-inline" isOpen={isOpen} navbar>
          <Nav className="navi-group" navbar>
          <NavItem>
            <NavLink>
              <Link className="text-dark" to="/about">
                About Me
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-success">
              <Link className="text-success" to="/login">
              <LoginOutlined style={{fontSize:'16px'}}/>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-info">
              <Link to="/register"><UserAddOutlined className="p-0" style={{fontSize:'16px'}}/></Link>
            </NavLink>
          </NavItem>
        </Nav>
          </Collapse>
          </div>
      </Navbar>
  );
};

export default Navi;
