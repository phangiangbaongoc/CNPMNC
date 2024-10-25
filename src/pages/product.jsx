import React from "react";
import { Button, Form, Input, notification } from "antd";
import { createProductApi } from "../util/api";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { image, name, category, price, description } = values;
    const res = await createProductApi(
      image,
      name,
      category,
      price,
      description
    );
    if (res) {
      notification.success({
        message: "CREATE PRODUCT",
        description: "Success",
      });
      navigate("/listproduct");
    } else {
      notification.error({
        message: "CREATE PRODUCT",
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
          label="Image"
          name="image"
          rules={[
            {
              required: true,
              message: "Please input your image!",
            },
          ]}
        >
          <Input type="file" />
        </Form.Item>
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
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input your price!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
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
export default CreateProduct;
