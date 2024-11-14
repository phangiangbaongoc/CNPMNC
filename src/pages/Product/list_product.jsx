import { Table, Button, notification } from "antd";
import { useEffect, useState } from "react";
import { getProductApi } from "../../util/api";
import { useNavigate } from "react-router-dom";
import "./list_product.css";
import FoodItem from "../../components/FoodItem/FoodItem";
// const { confirm } = Modal;

const ProductPage = () => {
  // lấy data động
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductApi();
        if (res && res.data) {
          setDataSource(res.data); // Chắc chắn rằng bạn truy cập đúng phần dữ liệu
          console.log(res.data);
          console.log("pro: " + dataSource);
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };
    fetchProduct();
  }, []);

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
          {dataSource.map((item, index) => (
            <div key={item._id}>
              <FoodItem
                id={item._id}
                name={item.Food_name}
                price={item.Price}
                image={item.Food_picture}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
