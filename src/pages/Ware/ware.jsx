import React from "react";
import { Button, Form, Input, notification } from "antd";
import { createProductApi } from "../../util/api";

import { useNavigate } from "react-router-dom";
import "./ware.css";
const CreateWare = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const {
      Ware_name,
      Ware_quantity,
      Ware_unit,
      Ware_entry_date,
      Ware_export_date,
    } = values;

    // Tạo FormData để gửi file
    const formData = new FormData();
    formData.append("Ware_name", Ware_name);
    formData.append("Ware_quantity", Ware_quantity);
    formData.append("Ware_unit", Ware_unit);
    formData.append("Ware_entry_date", Ware_entry_date);
    formData.append("Ware_export_date", Ware_export_date);

    const res = await createProductApi(formData);

    if (res) {
      notification.success({
        message: "CREATE PRODUCT",
        description: "Thêm vật dụng kho thành công",
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
      <h2>Thêm Vật Dụng Kho</h2>
      <Form
        name="create-product"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Tên vật dụng"
          name="Ware_name"
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số lượng"
          name="Ware_quantity"
          rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="Đơn vị"
          name="Ware_unit"
          rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ngày nhập kho"
          name="Ware_entry_date"
          rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="Ngày xuất kho"
          name="Ware_export_date"
          rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit" className="submit-button">
            Thêm vật dụng
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default CreateWare;
