import React from "react";
import { Button, Form, Input, notification } from "antd";
import { loginApi } from "../util/api";
import { useNavigate } from "react-router-dom";
import "../components/style/login.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { name, email, password } = values;
    const res = await loginApi(email, password);

    if (res && res.EC === 0) {
      localStorage.setItem("access_token", res.access_token);
      notification.success({
        message: "LOGIN USER",
        description: "Success",
      });
      navigate("/");
    } else {
      notification.error({
        message: "LOGIN USER",
        description: res?.EM ?? "error", // nếu có giá trị của res.EM thì lấy nó, ngược lại mặc định lấy giá trị error
      });
    }

    // console.log(">> Success:", res);
  };
  return (
    <div className="login-container">
      <div style={{ margin: 50 }} className="login-box">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
/* <div className="login-container">
<div className="login-box">
  <h2>WELCOME</h2>
  <form onSubmit={handleSubmit}>
    <div className="input-container">
      <label>Tên tài khoản:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div className="input-container">
      <label>Mật khẩu:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button type="submit" className="login-button">Đăng nhập</button>
  </form>
</div>
</div> */
