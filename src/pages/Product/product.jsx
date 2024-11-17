import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { createProductApi } from "../../util/api";
import { useNavigate } from "react-router-dom";
import "./product.css";
const CreateProduct = () => {
  const navigate = useNavigate();
  const [Food_picture, setFoodpicture] = useState(null);
  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const onFinish = async (values) => {
    const { Food_name, Price, Food_status, categoryID } = values;

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
      <h2>Thêm Sản Phẩm Mới</h2>
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
          <Input
            type="file"
            onChange={(e) => handleImageUpload(e, setFoodpicture)}
            accept="image/*"
          />
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
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default CreateProduct;
