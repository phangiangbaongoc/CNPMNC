// EmployeeItem.jsx
import React from "react";
import "./StaffItem.css";
import { useNavigate } from "react-router-dom";

const StaffItem = ({ id, name, position, email, phone, image }) => {
  const navigate = useNavigate();

  return (
    <div className="employee-item">
      <div className="employee-item-img-container">
        <img className="employee-item-image" src={image} alt={`${name}`} />
      </div>
      <div className="employee-item-info">
        <p className="employee-item-name">{name}</p>
        <p className="employee-item-position">{position}</p>
        <p className="employee-item-email">{email}</p>
        <p className="employee-item-phone">{phone}</p>
        <div className="employee-item-actions">
          <button
            className="edit-button"
            onClick={() => navigate(`/staff_edit`)}
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
