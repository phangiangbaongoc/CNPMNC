import { Table } from "antd";
import { useEffect, useState } from "react";
import { getStaffApi } from "../../util/api";
import { Button } from "antd/es/radio";
import "../components/style/liststaff.css";
const StaffPage = () => {
  // lấy data động
  const [dataSource, setDataSource] = useState([]);
  // goi UI
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getStaffApi();
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
      title: "Image",
      dataIndex: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Date",
      dataIndex: "date",
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
export default StaffPage;
