import React, { useState } from "react";
import { Input, Tooltip, message } from "antd";
import {
    MailOutlined,
    InfoCircleOutlined
  } from "@ant-design/icons";
  import { Form } from "reactstrap";

import * as api from "../../api";


const {TextArea} = Input;

const Contact = () => {

  const[contactData, setContactData] = useState({
    contactMail: '',
    contactText:''
  })

  const key = 'updatable';

  const openMessage = () => {
    message.loading({ content: 'Loading...', key,style:{marginTop:'5rem'} });
    setTimeout(() => {
      message.success({ content: 'Thank you !', key, duration: 4, style:{marginTop:'5rem'}});
    }, 1000);
  };

  return (
      <Form onSubmit={(e)=> {
        e.preventDefault()
        api.addContact(contactData)
        
        openMessage()

      }}>
        <Input
          name="contactMail"
          onChange={(e) => setContactData({...contactData, contactMail:e.target.value})}
          placeholder="Enter your mail"
          prefix={<MailOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Please Enter E-Mail format !">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
          required
        />
        <TextArea
          name="contactText"
          onChange={(e)=> setContactData({...contactData,contactText:e.target.value})}
          className="mt-4 form-control"
          placeholder="Enter Description"
          rows={4}
          required
        ></TextArea>
        <button
          type="submit"
          className="btn btn-primary rounded btn-block mt-2"
        >
          Send
        </button>
        
      </Form>
  );
};

export default Contact;
