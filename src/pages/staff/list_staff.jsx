import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { getStaffApi } from "../../util/api";
import StaffItem from "../../components/StaffItem/StaffItem";
import "./list_staff.css";

const StaffPage = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchStaff = async () => {
    try {
      const res = await getStaffApi();
      console.log("API Response:", res); // Kiểm tra phản hồi API
      if (res && res.data && Array.isArray(res.data)) {
        setEmployees(res.data); // Giả sử res.data là mảng nhân viên
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };
  useEffect(() => {
    fetchStaff();
  }, []);
  const handleAddEmployee = () => {
    navigate("/createStaff");
  };
  return (
    <div style={{ padding: 30 }}>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={handleAddEmployee}
      >
        Add Employee
      </Button>
      <div className="staff-display">
        <div className="staff-display-list">
          {employees.length > 0 ? (
            employees.map((employee) => (
              <StaffItem
                key={employee._id}
                Staff_name={employee.Staff_name}
                Staff_image={
                  employee.Staff_image || "https://via.placeholder.com/150"
                }
                Staff_email={employee.Staff_email}
                Staff_status={employee.Staff_status}
              />
            ))
          ) : (
            <p>Không có nhân viên nào để hiển thị.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
