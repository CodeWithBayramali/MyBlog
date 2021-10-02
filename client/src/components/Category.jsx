import React from 'react'
import { Menu, Input, Tooltip, Divider } from "antd";
import {
  MailOutlined,
  GithubOutlined,
  InstagramOutlined,
  InfoCircleOutlined,
  LinkedinOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { List, ListInlineItem } from "reactstrap";

const { Search } = Input;
const { TextArea } = Input;
const Category = () => {
    return (
        <div className="sticky" translate>
        <Search placeholder="Search Blog" enterButton />
        <Menu
          className="shadow-sm mb-2 mt-3"
          defaultChecked={["sub1"]}
          defaultOpenKeys={["sub1"]}
        >
          <Menu.Item icon={<AppstoreOutlined />}>
            All Blogs
          </Menu.Item>
         
            <Menu.Item>
            </Menu.Item>
        </Menu>

        <Divider plain>Social</Divider>

        <List type="inline" className="text-center mt-4">
          <ListInlineItem>
            <a href="https://github.com/alkestis07" target="__blank">
              <GithubOutlined
                className="text-dark"
                style={{ fontSize: "2em" }}
              />
            </a>
          </ListInlineItem>
          <ListInlineItem>
            <a href="https://www.instagram.com/alidrkk/?hl=tr" target="__blank">
              <InstagramOutlined
                className="text-dark"
                style={{ fontSize: "2em" }}
              />
            </a>
          </ListInlineItem>
          <ListInlineItem>
            <a
              href="https://www.linkedin.com/in/bayramali-durak-73b5281b9/"
              target="__blank"
            >
              <LinkedinOutlined className="text-dark" style={{ fontSize: "2em" }} />
            </a>
          </ListInlineItem>
        </List>

        <Divider plain className="font-weight-bold">
          Contact
        </Divider>
        <Input
          placeholder="Enter your mail"
          prefix={<MailOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Sometimes Comeback">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <TextArea
          className="mt-4"
          placeholder="Enter Description"
          rows={4}
        ></TextArea>
        <button className="btn btn-primary rounded btn-block mt-2">Send</button>
      </div>
    )
}

export default Category
