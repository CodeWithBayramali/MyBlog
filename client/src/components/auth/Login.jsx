import React,{useState} from "react";
import { FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, Card, Alert,message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {useDispatch,useSelector} from 'react-redux'
import { signIn } from "../../actions/user";


const Login = ({history})=> {
  
  const intialForm = {
    email:'',
    password:''
  }
  const dispatch= useDispatch()
  const userState= useSelector((state)=> state.user)
  const {error} = userState
  const [form,setForm] = useState(intialForm)
  

    return (
      <div className="d-flex justify-content-center mt-5">
        <FormGroup horizontal>
          <Card className="p-2 border">
            <h4 className="text-info text-center mb-4 font-weight-light">
              Log In
            </h4>
            {
              error && <Alert className="my-3" message={error} type="error" showIcon />
            }
            <FormGroup>
              <Form onSubmitCapture={(e)=> {
                e.preventDefault()
                dispatch(signIn(form,history))
              }}
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                >
                  <Input
                  type="email"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                    onChange={(e)=> setForm({...form,email:e.target.value})}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    onChange={(e)=> setForm({...form,password:e.target.value})}
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="false" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Link className="login-form-forgot">Forgot password</Link>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button mb-1"
                  >
                    Login
                  </Button>
                  Or{" "}
                  <Link>
                    register now!
                  </Link>
                </Form.Item>
              </Form>
            </FormGroup>
          </Card>

          <Alert
            message="Informational Notes"
            description="Additional description and information about copywriting."
            type="info"
            showIcon
            className="mt-3"
          />
        </FormGroup>
      </div>
    )
  }

  export default Login