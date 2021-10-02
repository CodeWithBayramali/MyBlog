import React, { Component } from "react";
import {Result} from 'antd';
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Link to="/" type="primary">Back Home</Link>}
        />
        ,
      </div>
    );
  }
}
