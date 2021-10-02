import React, {useState} from "react";
import { Menu, Input, Divider } from "antd";
import {
  HeartOutlined,
  ShareAltOutlined,
  GithubOutlined,
  InstagramOutlined,
  Html5Outlined,
  ApartmentOutlined,
  LinkedinOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { List, ListInlineItem, Form } from "reactstrap";
import { useDispatch } from "react-redux";
import { changeCategory, fetchPosts } from "../../actions/post";
import Contact from "./contact";

const { Search } = Input;
const { TextArea } = Input;

const category = [
  { id: 1, name: "Software" },
  { id: 2, name: "Technology" },
  { id: 3, name: "Space" },
  { id: 4, name: "Trends" },
];

const CategoryList = () => {
  const dispatch = useDispatch();

  const getIcon = (iconNo) => {
    switch (iconNo) {
      case (iconNo = 1):
        return <Html5Outlined />;
      case (iconNo = 2):
        return <ApartmentOutlined />;
      case (iconNo = 3):
        return <ShareAltOutlined />;
      case (iconNo = 4):
        return <HeartOutlined />;

      default:
        return <Html5Outlined />;
    }
  };

    const [contact,setContact] = useState({
      contactMail:'',
      contactText:''
    })

  return (
    <div className="sticky" translate>
      <Search placeholder="Search Blog" enterButton />
      <Menu
        className="mt-3 border shadow-sm"
        mode="inline"
        defaultSelectedKeys={["0"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item
          icon={<AppstoreOutlined />}
          onClick={() => dispatch(fetchPosts())}
        >
          All Categories
        </Menu.Item>
        {category.map((cat) => (
          <Menu.Item
            key={cat.id}
            icon={getIcon(cat.id)}
            onClick={() => dispatch(changeCategory(cat.id))}
          >
            {cat.name}
          </Menu.Item>
        ))}
      </Menu>

      <Divider plain>Social</Divider>

      <List type="inline" className="text-center mt-4">
        <ListInlineItem>
          <a href="https://github.com/alkestis07" target="__blank">
            <GithubOutlined className="text-dark" style={{ fontSize: "2em" }} />
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
            <LinkedinOutlined
              className="text-dark"
              style={{ fontSize: "2em" }}
            />
          </a>
        </ListInlineItem>
      </List>

      <Divider plain className="font-weight-bold">
        Contact
      </Divider>
      <Contact />
    </div>
  );
};

export default CategoryList;
