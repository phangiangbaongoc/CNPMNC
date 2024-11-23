import React from "react";
import { Button, Form, Input, notification } from "antd";
import { createWareApi } from "../../../util/api";

import { useNavigate } from "react-router-dom";
import "./create_ware.css";
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

    const res = await createWareApi(
      Ware_name,
      Ware_quantity,
      Ware_unit,
      Ware_entry_date,
      Ware_export_date
    );

    if (res) {
      notification.success({
        message: "CREATE WAREHOUSE",
        description: "Thêm vật dụng kho thành công",
      });
      // const updatedList = await getWareApi(); // Gọi lại API lấy danh sách
      // setDataSource(updatedList); // Cập nhật dữ liệu vào bảng
      navigate("/list_ware");
    } else {
      notification.error({
        message: "CREATE WAREHOUSE",
        description: "Thêm vật dụng kho thất bại",
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
        layout="horizal"
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
            Thêm vật dụng
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default CreateWare;
