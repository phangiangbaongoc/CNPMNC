import React, { useState } from "react";
import "./CreateEmployee.css";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const [employeeData, setEmployeeData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    email: "",
    address: "",
    startDate: "",
    status: "",
  });
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleClose = () => {
    navigate("/employee");
  };
  const handleSubmit = () => {
    // Lưu dữ liệu vào database hoặc API
    console.log("Employee data:", employeeData);
    navigate("/employee"); // Chuyển hướng về trang danh sách nhân viên sau khi lưu
  };

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="create-employee-modal">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <h2>THÊM NHÂN VIÊN</h2>
        <div className="employee-form">
          <div className="image-section">
            {image ? (
              <img src={image} alt="Employee" className="employee-image" />
            ) : (
              <div className="image-placeholder"></div>
            )}

            <div className="file-upload-container">
              <label htmlFor="image-upload" className="custom-file-upload">
                Thêm ảnh
              </label>
              <input
                id="image-upload"
                type="file"
                onChange={handleImageChange}
                className="image-input"
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="form-fields">
            <div className="form-group">
              <label>Họ và tên:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Ngày sinh:</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Giới tính:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Số điện thoại:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Địa chỉ</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Ngày vào làm:</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Trạng thái:</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <button className="add-button">Hoàn tất</button>
      </div>
    </>
  );
};

export default CreateEmployee;
