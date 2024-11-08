import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { getProductApi } from "../../util/api";
import "./list_product.css";
// const { confirm } = Modal;

const ProductPage = () => {
  // lấy data động
  const [dataSource, setDataSource] = useState([]);
  // goi UI
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getProductApi();
      if (res) {
        setDataSource(res);
      }
    };
    fetchUser();
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

  const columns = [
    {
      title: "Ảnh",
      dataIndex: "Food_picture",
      className: "column",
      sorter: true, // Adds sorting
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "Food_name",
      className: "column",
      sorter: true, // Adds sorting
    },
    {
      title: "Loại",
      dataIndex: "categoryID",
      className: "column",
      sorter: true, // Adds sorting
    },
    {
      title: "Đơn giá",
      dataIndex: "Price",
      className: "column",
      sorter: true, // Adds sorting
    },
    {
      title: "Activity",
      dataIndex: "activity",
      width: 100,
      render: (text, record) => (
        <div className="bg_button">
          <Button className="custom-button">Sửa</Button>
          {/* <Button
            className="custom-button"
            onClick={() => handleDelete(record)}
          >
            Xóa
          </Button> */}
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 30 }}>
      <div className="from-container">
        <Table
          bordered
          dataSource={dataSource}
          columns={columns}
          rowKey={"_id"}
        />
      </div>
    </div>
  );
};
export default ProductPage;
