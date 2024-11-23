import { Table, Button, notification } from "antd";
import { useEffect, useState } from "react";
import "./list_ware.css";
import { getWareApi } from "../../util/api";
import { useNavigate } from "react-router-dom";
const WarePage = () => {
  const navigate = useNavigate();
  // lấy data động
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const fetchStaff = async () => {
      const res = await getWareApi();
      if (!res?.message) {
        setDataSource(res);
      } else {
        notification.error({
          massage: "Unauthorized",
          description: res.message,
        });
      }
    };
    fetchStaff();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Tên Vật Dụng",
      dataIndex: "Ware_name",
    },
    {
      title: "Số lượng",
      dataIndex: "Ware_quantity",
    },
    {
      title: "Đơn vị",
      dataIndex: "Ware_unit",
    },
    {
      title: "Ngày nhập",
      dataIndex: "Ware_entry_date",
    },
    {
      title: "Ngày suất",
      dataIndex: "Ware_export_date",
    },
    {
      title: "Activity",
      dataIndex: "activity",
      render: (text, record) => (
        <div className="bg_button">
          <Button
            className="custom-button"
            onClick={() => navigate(`/edit_ware/${record._id}`)}
          >
            Sửa
          </Button>
          <Button className="custom-button">Xóa</Button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 30 }}>
      <div className="title">DANH SÁCH SẢN PHẨM KHO</div>
      <Button type="primary" onClick={() => navigate("/ware")}>
        Thêm vật dụng
      </Button>
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        rowKey={"_id"}
      />
    </div>
  );
};
export default WarePage;
