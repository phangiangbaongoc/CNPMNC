// EmployeeDisplay.jsx
import React, { useEffect, useState } from "react";
import "./StaffDisplay.css";
import EmployeeItem from "../StaffItem/StaffItem";
import { getStaffApi } from "../../util/api";

const StaffDisplay = () => {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await getStaffApi();
        if (res && res.data) {
          setEmployeeList(res.data);
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };
    fetchStaff();
  }, []);

  return (
    <div className="employee-display" id="employee-display">
      <h2>Our Team</h2>
      <div className="employee-display-list">
        {employeeList.map((employee) => (
          <EmployeeItem
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
  );
};

export default StaffDisplay;
