// import React, { useEffect, useState } from "react";
// import { Card, Button, Row, Col } from "antd";
// import { ShoppingCartOutlined } from "@ant-design/icons";
// import { getProductApi } from "../util/api"; // Đảm bảo đường dẫn đúng
// import "../components/style/home.css";
// const HomePage = () => {
//   const [products, setProducts] = useState([]); // Khởi tạo là một mảng rỗng

//   const fetchProducts = async () => {
//     try {
//       const response = await getProductApi(); // Gọi API để lấy danh sách sản phẩm
//       console.log("Dữ liệu sản phẩm:", response.data); // Kiểm tra dữ liệu
//       setProducts(Array.isArray(response.data) ? response.data : []); // Đảm bảo dữ liệu trả về là mảng
//     } catch (error) {
//       console.error("Lỗi khi tải sản phẩm:", error);
//       setProducts([]); // Đảm bảo `products` là mảng nếu có lỗi xảy ra
//     }
//   };

//   useEffect(() => {
//     fetchProducts(); // Gọi hàm fetchProducts khi component được render
//   }, []);

//   return (
//     <div className="home-container">
//       <Row gutter={[16, 16]}>
//         {products.map((product) => (
//           <Col xs={24} sm={12} md={8} lg={6} key={product._id}>
//             <Card
//               hoverable
//               cover={<img alt={product.name} src={product.image} />} // Sử dụng product.image
//               style={{
//                 borderColor: "#2F4F4F",
//                 borderRadius: 2,
//                 borderWidth: 1,
//               }}
//             >
//               <Card.Meta
//                 title={product.name} // Sử dụng product.name
//                 description={`Giá: ${product.price} VND`} // Sử dụng product.price
//               />
//               <Button
//                 type="primary"
//                 shape="circle"
//                 icon={<ShoppingCartOutlined />}
//                 style={{ marginTop: 10 }}
//               />
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default HomePage;
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay/FoodDisplay";
import { useState } from "react";
const HomePage = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="flex flex-col gap 12">
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <div className="bg-white rounded-lg shadow-md yp-8 flex flex-col gap-5 text-center"></div>
    </div>
  );
};
export default HomePage;
