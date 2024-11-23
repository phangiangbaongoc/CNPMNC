import React, { useEffect } from "react";
import { Button, Form, Input, notification } from "antd";

import { useNavigate, useParams } from "react-router-dom";
import "./edit_ware.css";
const EditWare = () => {
  //{ wareData }
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { id } = useParams(); // Lấy id từ URL nếu sử dụng routing

  return (
    <div className="edit-product-container">
      <h2>Cập Nhật Vật Dụng Kho</h2>
      {/* <Form
        form={form}
        name="edit-ware"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}
        autoComplete="off"
        layout="horizontal"
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
          <Input type="date" />
        </Form.Item>

        <Form.Item
          label="Ngày xuất kho"
          name="Ware_export_date"
          rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
        >
          <Input type="date" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit" className="submit-button">
            Cập nhật
          </Button>
        </Form.Item>
      </Form> */}
    </div>
  );
};
export default EditWare;
