import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { getProductApi } from "../util/api";
import "../components/style/liststaff.css";
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

  const columns = [
    {
      title: "Image",
      dataIndex: "email",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
    },
    {
      title: "Loại",
      dataIndex: "category",
    },
    {
      title: "Đơn giá",
      dataIndex: "Price",
    },
    {
      title: "Activity",
      dataIndex: "activity",
      render: (text, record) => (
        <div className="bg_button">
          <Button className="custom-button">Sửa</Button>
          <Button className="custom-button">Xóa</Button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 30 }}>
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        rowKey={"_id"}
      />
    </div>
  );
};
export default ProductPage;
