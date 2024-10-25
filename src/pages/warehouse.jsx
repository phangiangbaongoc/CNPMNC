import React from "react";
import { Button, Form, Input, notification } from "antd";
import { createStaffApi } from "../util/api";
import { useNavigate } from "react-router-dom";
const CreateWare = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { name, category, quantity, daystart, dayend } = values;
    const res = await createStaffApi(
      name,
      category,
      quantity,
      daystart,
      dayend
    );
    if (res) {
      notification.success({
        message: "CREATE WARE",
        description: "Success",
      });
      navigate("/listware");
    } else {
      notification.error({
        message: "CREATE WARE",
        description: "error",
      });
    }
  };
  return (
    <div style={{ margin: 50 }}>
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
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please input your category!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[
            {
              required: true,
              message: "Please input your quantity!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="DayStart"
          name="daystart"
          rules={[
            {
              required: true,
              message: "Please input your daystart!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="DayEnd"
          name="dayend"
          rules={[
            {
              required: true,
              message: "Please input your dayend!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default CreateWare;
