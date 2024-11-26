import React, { useState } from "react";
import { Select, Button, Form, Input, notification } from "antd";
import { createStaffApi } from "../../util/api";
import { useNavigate } from "react-router-dom";
import "./staff.css";
const CreateStaff = () => {
  const navigate = useNavigate();
  const [Staff_image, setStaffImage] = useState(null);
  const onFinish = async (values) => {
    console.log("Submitted Values:", values); // Thêm dòng này
    const {
      Staff_name,
      Staff_birthday,
      Staff_sex,
      Staff_phone,
      Staff_email,
      Staff_image,
      Staff_address,
      Staff_status,
    } = values;
    const res = await createStaffApi(
      Staff_name,
      Staff_birthday,
      Staff_sex,
      Staff_phone,
      Staff_email,
      Staff_address,
      Staff_status,
      Staff_image
    );

    if (res) {
      console.log("API Response:", res); // Thêm dòng này
      notification.success({
        message: "CREATE STAFF",
        description: "Thêm nhân viên thành công",
      });
      navigate("/list_staff");
    } else {
      notification.error({
        message: "CREATE STAFF",
        description: "Thêm nhân viên thất bại",
      });
    }
  };

  return (
    <div className="create-staff-container">
      <h2>Thêm Nhân Viên Mới</h2>
      <div className="form-wrapper" style={{ width: "80%", margin: "0 auto" }}>
        <Form
          name="create-staff"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          layout="horizal"
        >
          {/* 1. Bọc từng phần Form.Item trong một div */}
          <div className="form-item">
            <Form.Item
              label="Ảnh nhân viên"
              name="Staff_image"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập đường dẫn ảnh nhân viên!",
                },
              ]}
            >
              <Input
                type="text"
                placeholder="Nhập đường dẫn ảnh"
                onChange={(e) => setStaffImage(e.target.value)}
              />
            </Form.Item>
            {/* Hiển thị ảnh xem trước */}
            {Staff_image && (
              <div className="image-preview">
                <img
                  src={Staff_image}
                  alt="Preview"
                  style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                    borderRadius: "8px",
                  }}
                />
                <p>Ảnh xem trước</p>
              </div>
            )}
          </div>

          {/* 2. Phần Tên Nhân Viên */}
          <div className="form-item">
            <Form.Item
              label="Tên Nhân Viên"
              name="Staff_name"
              rules={[
                { required: true, message: "Vui lòng nhập tên nhân viên!" },
              ]}
            >
              <Input />
            </Form.Item>
          </div>

          {/* 3. Phần Ngày Sinh */}
          <div className="form-item">
            <Form.Item
              label="Ngày Sinh"
              name="Staff_birthday"
              rules={[{ required: true, message: "Vui lòng chọn ngày sinh!" }]}
            >
              <Input type="date" />
            </Form.Item>
          </div>

          {/* 4. Các trường khác */}
          <div className="form-item">
            <Form.Item
              label="Số Điện Thoại"
              name="Staff_phone"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại!" },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </div>

          <div className="form-item">
            <Form.Item
              label="Email"
              name="Staff_email"
              rules={[
                { required: true, message: "Vui lòng nhập email nhân viên!" },
              ]}
            >
              <Input />
            </Form.Item>
          </div>

          <div className="form-item">
            <Form.Item
              label="Giới tính"
              name="Staff_sex"
              rules={[{ required: true, message: "Vui lòng chọn giới tính!" }]}
            >
              <Select placeholder="Chọn giới tính">
                <Select.Option value="Nam">Nam</Select.Option>
                <Select.Option value="Nữ">Nữ</Select.Option>
              </Select>
            </Form.Item>
          </div>

          <div className="form-item">
            <Form.Item
              label="Địa chỉ"
              name="Staff_address"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
            >
              <Input />
            </Form.Item>
          </div>

          <div className="form-item">
            <Form.Item
              label="Level"
              name="Staff_status"
              rules={[{ required: true, message: "Vui lòng nhập level!" }]}
            >
              <Input />
            </Form.Item>
          </div>

          {/* Nút submit */}
          <div className="form-item">
            <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="submit-button"
              >
                Thêm nhân viên
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default CreateStaff;
