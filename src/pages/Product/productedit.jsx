import React, { useEffect, useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { UpdateProductApi, createProductApi } from "../../util/api";
import { useNavigate, useParams } from "react-router-dom";
import "./productedit.css";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Assume you get the product ID from the URL
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await UpdateProductApi(id); // Pass the product ID to get specific product data
        if (res && res.data) {
          console.log("Product data:", res.data);
          const { Food_name, Price, Food_picture, Food_status, categoryID } =
            res.data;
          // Set form fields with existing product data
          form.setFieldsValue({
            Food_name,
            Price,
            categoryID,
            Food_status,
            Food_picture, // This assumes Food_picture is a URL or path to the image
          });
        }
      } catch (error) {
        notification.error({
          message: "Error",
          description: "Failed to load product data",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, form]);
  const onFinish = async (values) => {
    const { Food_name, Price, Food_picture, Food_status, categoryID } = values;

    // Tạo FormData để gửi file
    const formData = new FormData();
    formData.append("Food_name", Food_name);
    formData.append("Price", Price);
    formData.append("Food_picture", Food_picture.file);
    formData.append("Food_status", Food_status);
    formData.append("categoryID", categoryID);

    const res = await UpdateProductApi(id, formData);

    if (res) {
      notification.success({
        message: "UPDATE PRODUCT",
        description: "Cập nhật sản phẩm thành công",
      });
      navigate("/listproduct");
    } else {
      notification.error({
        message: "UPDATE PRODUCT",
        description: "Error",
      });
    }
  };

  return (
    <div className="create-product-container">
      <h2>Cập nhật sản phẩm</h2>
      <Form
        form={form}
        name="create-product"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        initialValues={{
          Food_status: "Còn",
        }}
      >
        <Form.Item
          label="Ảnh sản phẩm"
          name="Food_picture"
          rules={[{ required: true, message: "Vui lòng chọn ảnh sản phẩm!" }]}
        >
          <Input type="file" />
        </Form.Item>

        <Form.Item
          label="Tên Sản phẩm"
          name="Food_name"
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Loại"
          name="categoryID"
          rules={[{ required: true, message: "Vui lòng chọn loại sản phẩm!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Đơn giá"
          name="Price"
          rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Trạng thái" name="Food_status">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="submit-button"
            loading={loading}
          >
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default UpdateProduct;
