import { Typography, Dropdown, Menu } from "antd";
import { Container } from "reactstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../actions/post";
import HtmlParser from "react-html-parser";
import { EllipsisOutlined } from "@ant-design/icons";


const BlogDetails = () => {
  const { Title, Paragraph } = Typography;
  const { id } = useParams();
  const dispatch = useDispatch();

  const [background, setBackground] = useState("bg-white");
  const changeBackground = (bg) => {
    setBackground(bg);
  };
  const menu = (
    <Menu>
      <Menu.Item><span onClick={()=> changeBackground("bg-dark")}>Dark Backgroun</span></Menu.Item>
      <Menu.Item><span onClick={()=> changeBackground("bg-white")}>White Background</span></Menu.Item>
    </Menu>
  );

  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, background]);

  return (
    <div className={background}>
      <Container>
        <div className="d-flex flex-column justify-content-center detail-container">
          <Title
            className="mt-5"
            style={{ fontFamily: "Playfair Display", fontWeight: "500" }}
          >
            {post.title}
          </Title>
          <Title level={3} className="text-muted my-2">
            {post.subtitle}
          </Title>
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <EllipsisOutlined
              className="my-4 ml-auto"
              style={{ fontSize: "24px", cursor: "pointer" }}
            />
          </Dropdown>

          <img src={post.image} className="img-fluid mb-4 rounded" />
          <Typography>
            <Paragraph
              level={4}
              style={{ fontFamily: "EB Garamond", fontSize: "19px",maxWidth:'680px'}}
            >
              {HtmlParser(post.content)}
            </Paragraph>
          </Typography>
        </div>
      </Container>
      <footer
        style={{ backgroundColor: "#10239e", bottom: "0" }}
        className="text-center text-white p-2 mt-4"
      >
        <small>designed by Ali Durak </small>
      </footer>
    </div>
  );
};

export default BlogDetails;
