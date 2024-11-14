// EmployeeList.jsx
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { getStaffApi } from "../../util/api";
import StaffItem from "../../components/StaffItem/StaffItem";
import "./list_staff.css";

const StaffPage = () => {
  const [employees, dataSource] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await getStaffApi();
        if (res && res.data) {
          console.log(res.data);
          console.log("pro: " + dataSource);
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };
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
      <h2>hi</h2>
      <div className="employee-display">
        <div className="employee-display-list">
          {employees.map((employee) => (
            <StaffItem
              key={employee._id}
              id={employee._id}
              name={employee.Staff_name}
              position={employee.Staff_position}
              email={employee.Staff_email}
              phone={employee.Staff_phone}
              image={employee.Staff_image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
