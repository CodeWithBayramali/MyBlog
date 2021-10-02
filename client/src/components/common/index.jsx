import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row,Container } from "reactstrap";
import BlogList from "../blog/BlogList";
import CategoryList from "./CategoryList";
import categorMediaPage from "./categoryMediaPage";

export default class index extends Component {
  render() {
    return (
      <div>
      <Container className="mt-4 mb-5">
        <Row>
          <Col md={8}>
          <categorMediaPage />
            <BlogList /> 
          </Col>
          <Col md={4}>
            <CategoryList />
          </Col>
        </Row>

        <footer className="text-center bg-primary text-white p-2 mt-4">
          <small>designed by Ali Durak / <Link>SSSS</Link></small>
        </footer>
        </Container>
      </div>
    );
  }
}
