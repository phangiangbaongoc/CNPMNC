import { Table, Button, notification } from "antd";
import { useEffect, useState } from "react";
import { createProductApi, getProductApi } from "../../util/api";
import { useNavigate } from "react-router-dom";
import "./list_product.css";
import FoodItem from "../../components/FoodItem/FoodItem";
// const { confirm } = Modal;

const ProductPage = () => {
  // lấy data động
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const res = await getProductApi();
      console.log("API Response:", res); // Kiểm tra phản hồi API
      if (res && res.data && Array.isArray(res.data)) {
        setProducts(res.data); // Giả sử res.data là mảng nhân viên
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const res = await getProductApi();
  //       if (res && res.data) {
  //         setProduct(res.data); // Chắc chắn rằng bạn truy cập đúng phần dữ liệu
  //         console.log("Response từ API:", res.data);
  //         console.log("pro: " + dataSource);
  //       }
  //     } catch (error) {
  //       console.error("Lỗi khi gọi API:", error);
  //     }
  //   };
  //   fetchProduct();
  // }, []);

  // Thông báo xóa
  // const handleDelete = (record) => {
  //   confirm({
  //     title: "Bạn có muốn xóa không?",
  //     content: "Hành động này không thể hoàn tác.",
  //     okText: "Có",
  //     okType: "danger",
  //     cancelText: "Không",
  //     onOk() {
  //       // Thực hiện chức năng xóa tại đây, ví dụ như gọi API xóa
  //       console.log("Đã xóa sản phẩm:", record.name);
  //       // Cập nhật lại dataSource sau khi xóa
  //       setDataSource((prevData) =>
  //         prevData.filter((item) => item._id !== record._id)
  //       );
  //     },
  //     onCancel() {
  //       console.log("Đã hủy thao tác xóa");
  //     },
  //   });
  // };

  // const columns = [
  //   {
  //     title: "Ảnh",
  //     dataIndex: "Food_picture",
  //     className: "column",
  //     sorter: true, // Adds sorting
  //   },
  //   {
  //     title: "Tên sản phẩm",
  //     dataIndex: "Food_name",
  //     className: "column",
  //     sorter: true, // Adds sorting
  //   },
  //   {
  //     title: "Loại",
  //     dataIndex: "categoryID",
  //     className: "column",
  //     sorter: true, // Adds sorting
  //   },
  //   {
  //     title: "Đơn giá",
  //     dataIndex: "Price",
  //     className: "column",
  //     sorter: true, // Adds sorting
  //   },
  //   {
  //     title: "Activity",
  //     dataIndex: "activity",
  //     width: 100,
  //     render: (text, record) => (
  //       <div className="bg_button">
  //         <Button className="custom-button">Sửa</Button>
  //         {/* <Button
  //           className="custom-button"
  //           onClick={() => handleDelete(record)}
  //         >
  //           Xóa
  //         </Button> */}
  //       </div>
  //     ),
  //   },
  // ];
  // Chuyển hướng đến trang thêm món
  const handleAddProduct = () => {
    navigate("/product");
  };

  return (
    <div style={{ padding: 30 }}>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={handleAddProduct}
      >
        Thêm món
      </Button>

      <div className="food-display">
        <div className="food-display-list">
          {products.length > 0 ? (
            products.map((product) => (
              <FoodItem
                key={product._id}
                Food_name={product.Food_name}
                Food_picture={
                  product.Food_picture || "https://via.placeholder.com/150"
                }
                Price={product.Price}
                Food_status={product.Staff_status}
              />
            ))
          ) : (
            <p>Không có sản phẩm nào để hiển thị.</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
