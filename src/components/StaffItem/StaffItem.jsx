// EmployeeItem.jsx
import React from "react";
import "./StaffItem.css";
import { useNavigate } from "react-router-dom";

const StaffItem = ({ Staff_name, Staff_image, Staff_email, Staff_status }) => {
  const navigate = useNavigate();

  return (
    <div className="employee-item">
      <img src={Staff_image} alt={Staff_name} className="employee-item-image" />
      <div className="employee-item-info">
        <h3>{Staff_name}</h3>
        <p>Email: {Staff_email}</p>
        <p>Status: {Staff_status}</p>
        {/* <p className="employee-item-name">{Staff_name}</p>
        <p className="employee-item-email">{Staff_email}</p>
        <p className="employee-item-phone">{Staff_status}</p> */}
        <div className="employee-item-actions">
          <button
            className="edit-button"
            onClick={() => navigate(`/staff_edit/${Staff_id}`)}
          >
            Edit
          </button>
          <button
            className="delete-button"
            onClick={() => navigate(`/employee`)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffItem;
