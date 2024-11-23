import React, { useEffect, useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { getProductDetailApi, updateProductApi } from "../../util/api";
import { useNavigate, useParams } from "react-router-dom";
import "./productedit.css";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Lấy ID sản phẩm từ URL
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Lấy thông tin sản phẩm
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await getProductDetailApi(id); // Lấy thông tin chi tiết sản phẩm
        if (res && res.data) {
          const { Food_name, Price, Food_picture, Food_status, categoryID } =
            res.data;
          form.setFieldsValue({
            Food_name,
            Price,
            categoryID,
            Food_status,
          });
        }
      } catch (error) {
        notification.error({
          message: "Error",
          description: "Không thể tải thông tin sản phẩm",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, form]);

  // Cập nhật sản phẩm
  const onFinish = async (values) => {
    const { Food_name, Price, Food_picture, Food_status, categoryID } = values;

    // Gửi dữ liệu qua FormData
    const formData = new FormData();
    formData.append("Food_name", Food_name);
    formData.append("Price", Price);
    formData.append("categoryID", categoryID);
    formData.append("Food_status", Food_status);
    if (Food_picture && Food_picture.file) {
      formData.append("Food_picture", Food_picture.file); // File upload
    }

    try {
      const res = await updateProductApi(id, formData); // Gọi API cập nhật
      if (res) {
        notification.success({
          message: "Cập nhật thành công",
          description: "Thông tin sản phẩm đã được cập nhật.",
        });
        navigate("/listproduct"); // Điều hướng về danh sách sản phẩm
      }
    } catch (error) {
      notification.error({
        message: "Cập nhật thất bại",
        description: "Không thể cập nhật thông tin sản phẩm.",
      });
    }
  };

  return (
    <div className="create-product-container">
      <h2>Cập nhật sản phẩm</h2>
      <Form
        form={form}
        name="update-product"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        initialValues={{
          Food_status: "Còn", // Giá trị mặc định
        }}
      >
        <Form.Item
          label="Ảnh sản phẩm"
          name="Food_picture"
          rules={[{ required: false }]}
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
