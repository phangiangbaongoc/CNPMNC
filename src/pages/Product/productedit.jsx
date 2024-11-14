import React from "react";
import { Button, Form, Input, notification } from "antd";
import { createProductApi } from "../../util/api";
import { useNavigate } from "react-router-dom";
import "./productedit.css";
const UpdateProduct = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { Food_name, Price, Food_picture, Food_status, categoryID } = values;

    // Tạo FormData để gửi file
    const formData = new FormData();
    formData.append("Food_name", Food_name);
    formData.append("Price", Price);
    formData.append("Food_picture", Food_picture.file);
    formData.append("Food_status", Food_status);
    formData.append("categoryID", categoryID);

    const res = await createProductApi(formData);

    if (res) {
      notification.success({
        message: "CREATE PRODUCT",
        description: "Thêm sản phẩm thành công",
      });
      navigate("/listproduct");
    } else {
      notification.error({
        message: "CREATE PRODUCT",
        description: "Error",
      });
    }
  };

  return (
    <div className="create-product-container">
      <h2>Cập nhật sản phẩm</h2>
      <Form
        name="create-product"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
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

        <Form.Item label="Trạng thái" name="Food_status" initialValue="Còn">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit" className="submit-button">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default UpdateProduct;
