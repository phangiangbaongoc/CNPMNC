import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { getWareApi } from "../util/api";
import "../components/style/liststaff.css";
const ProductPage = () => {
  // lấy data động
  const [dataSource, setDataSource] = useState([]);
  // goi UI
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getWareApi();
      if (res) {
        setDataSource(res);
      }
    };
    fetchUser();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
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
