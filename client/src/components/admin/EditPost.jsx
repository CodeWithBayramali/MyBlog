import React, { useEffect, useState } from "react";
import { Input, Form, Select } from "antd";
import { Container, Button } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { fetchPost, updatePost } from "../../actions/post";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const category = [
  { id: 1, name: "Software" },
  { id: 2, name: "Technology" },
  { id: 3, name: "Space" },
  { id: 4, name: "Trends" },
];

const EditPost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [postModel, setModel] = useState({
    title: "",
    subtitle: "",
    image: "",
    categoryId: null,
    content: "",
  });

  const handleContentData = (e, editor) => {
    const data = editor.getData();
  };

  useEffect(() => {
    dispatch(fetchPost(id));
  });

  const post = useSelector((state) => state.post);

  

  return (
    <>
      <Container className="mt-5 d-flex text-center justify-content-center flex-column">
        <h3>Edit Post</h3>
        <Form
          onSubmitCapture={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Item>
            <Input
              value={post.title}
            />
          </Form.Item>

          <Form.Item>
            <Input
              value={post.subtitle}
            />
          </Form.Item>

          <Form.Item>
            <Input value={post.image} />
          </Form.Item>

          <Form.Item>
            <Select
              defaultValue={category[0].name}
            >
              {category.map((cat) => (
                <Select.Option key={cat.id}>{cat.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <CKEditor
            editor={ClassicEditor}
            data={post.content}
          />
          <Button type="submit" className="btn-primary mt-4" block>
            Edit Post
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EditPost;
