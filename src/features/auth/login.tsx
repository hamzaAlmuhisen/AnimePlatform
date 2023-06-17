import { Button, Card, Form, Input } from "antd";
import { MdEmail, MdLock } from "react-icons/md";
function Login() {
  return (
    <div className="login">
      <Card bordered={false}>
        <h1>Login</h1>
        <Form>
          <Form.Item>
            <Input
              placeholder="Email"
              suffix={<MdEmail style={{ fontSize: 28, color: "#334253" }} />}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Password"
              suffix={<MdLock style={{ fontSize: 28, color: "#334253" }} />}
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Login</Button>
          </Form.Item>
        </Form>
        <h3>
          Don’t have an account? <a>{"it’s Ok"}</a>
        </h3>
      </Card>
    </div>
  );
}
export default Login;
