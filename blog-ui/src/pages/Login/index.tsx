import Password from "antd/es/input/Password";
import "./index.scss";
import { Card, Form, Input, Button } from "antd";

const Login = () => {
  const onFinish = (values: Event) => {
    console.log(values);
  };
  return (
    <div className="login">
      <Card className="login-container">
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Please input your username" },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "Please input correct format of username",
              },
            ]}
          >
            <Input size="large" placeholder="username"></Input>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input size="large" placeholder="password"></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
