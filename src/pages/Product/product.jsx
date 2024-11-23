import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { createProductApi, getProductApi } from "../../util/api";
import { useNavigate } from "react-router-dom";
import "./product.css";
const CreateProduct = () => {
  const navigate = useNavigate();
  const [Food_picture, setFoodpicture] = useState(null);
  const onFinish = async (values) => {
    console.log("Submitted Values:", values); // Thêm dòng này
    const { Food_name, Price, Food_status, Food_picture, categoryID } = values;
    const res = await createProductApi(
      Food_name,
      Price,
      Food_status,
      Food_picture,
      categoryID
    );

    if (res) {
      console.log("API Response:", res); // Thêm dòng này
      notification.success({
        message: "CREATE USER",
        description: "Success",
      });
      navigate("/list_product");
    } else {
      notification.error({
        message: "CREATE USER",
        description: "error",
      });
    }
  };

  // const [products, setProducts] = useState([]);
  // Hàm xử lý khi form được submit

  // const handleProductCreation = async () => {
  //   const productData = {
  //     // Thêm dữ liệu cần thiết để tạo sản phẩm
  //     Food_name: "Tên sản phẩm",
  //     Price: 10000,
  //     Food_picture: "URL_HINH_ANH",
  //     categoryID: "Loại sản phẩm",
  //   };

  //   try {
  //     const res = await createProductApi(productData);
  //     if (res && res.data) {
  //       notification.success({
  //         message: "CREATE PRODUCT",
  //         description: "Thêm sản phẩm thành công",
  //       });
  //       // Gọi lại danh sách sản phẩm
  //       const updatedProducts = await getProductApi();
  //       if (updatedProducts && updatedProducts.data) {
  //         setDataSource(updatedProducts.data.product); // Cập nhật danh sách sản phẩm
  //       }
  //       navigate("/listproduct");
  //     } else {
  //       throw new Error("Tạo sản phẩm thất bại");
  //     }
  //   } catch (error) {
  //     notification.error({
  //       message: "CREATE PRODUCT",
  //       description: "Error: " + error.message,
  //     });
  //     console.error("Error:", error);
  //   }
  // };

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
          rules={[
            {
              required: true,
              message: "Vui lòng nhập đường dẫn ảnh sản phẩm!",
            },
          ]}
        >
          {/* <Input uploap
            type="file"
            onChange={(e) => handleImageUpload(e, setFoodpicture)}
            accept="image/*"
          /> */}
          <Input
            type="text"
            placeholder="Nhập đường dẫn ảnh"
            onChange={(e) => setFoodpicture(e.target.value)}
          />
        </Form.Item>
        {/* Hiển thị ảnh xem trước */}
        {Food_picture && (
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={Food_picture}
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
