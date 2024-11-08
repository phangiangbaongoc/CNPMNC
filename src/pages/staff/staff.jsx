import React from "react";
import { Button, Form, Input, notification } from "antd";
import { createStaffApi } from "../../util/api";
import { useNavigate } from "react-router-dom";
import "../components/style/staff.css";
const CreateStaff = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { image, name, phone, date } = values;
    const res = await createStaffApi(image, name, phone, date);
    if (res) {
      notification.success({
        message: "CREATE STAFF",
        description: "Success",
      });
      navigate("/liststaff");
    } else {
      notification.error({
        message: "CREATE STAFF",
        description: "error",
      });
    }
  };

  return (
    <div className="create-employee-modal">
      <h2>THÊM NHÂN VIÊN</h2>
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
            <Input />
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
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please input your date!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="add-button">
              Hoàn tất
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default CreateStaff;
