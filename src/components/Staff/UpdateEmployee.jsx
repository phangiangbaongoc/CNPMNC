import React, { useState } from 'react';
import './UpdateEmployee.css';
import { useNavigate, useLocation } from 'react-router-dom'; // Sử dụng useLocation để nhận dữ liệu

const UpdateEmployee = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Lấy dữ liệu từ route
    const { employee } = location.state || {}; // Nhận dữ liệu employee từ state khi điều hướng

    const [image, setImage] = useState(employee?.image || null); // Dữ liệu ảnh của nhân viên
    const [id, setId] = useState(employee?.id || '');
    const [name, setName] = useState(employee?.name || '');
    const [gender, setGender] = useState(employee?.gender || '');
    const [phone, setPhone] = useState(employee?.phone || '');
    const [email, setEmail] = useState(employee?.email || '');
    const [address, setAddress] = useState(employee?.address || '');
    const [startDate, setStartDate] = useState(employee?.startDate || '');

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleClose = () => {
        navigate('/employee'); // Điều hướng về trang Employee khi nhấn nút thoát
    };

    const handleUpdate = () => {
        // Logic cập nhật nhân viên ở đây, ví dụ gọi API để lưu nhân viên
        console.log('Updated employee:', { id, name, gender, phone, email, address, startDate, image });
        navigate('/employee'); // Quay lại trang Employee sau khi cập nhật
    };

    return (
        <>
            <div className="modal-overlay"></div>
            <div className="update-employee-modal">
                <button className="close-button" onClick={handleClose}>X</button>
                <h2>CẬP NHẬT THÔNG TIN NHÂN VIÊN</h2>
                <div className="employee-form">
                    <div className="image-section">
                        {image ? (
                            <img src={image} alt="Employee" className="employee-image" />
                        ) : (
                            <div className="image-placeholder"></div>
                        )}
                        <div className="file-upload-container">
                            <label htmlFor="image-upload" className="custom-file-upload">
                                Chọn tệp
                            </label>
                            <input 
                                id="image-upload"
                                type="file" 
                                onChange={handleImageChange} 
                                className="image-input" 
                                style={{ display: 'none' }} // Ẩn input file
                            />
                        </div>
                    </div>
                    <div className="form-fields">
                        <div className="form-group">
                            <label>Mã nhân viên:</label>
                            <input 
                                type="text" 
                                value={id} 
                                onChange={(e) => setId(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Họ và tên:</label>
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Giới tính:</label>
                            <input 
                                type="text" 
                                value={gender} 
                                onChange={(e) => setGender(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại:</label>
                            <input 
                                type="text" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ:</label>
                            <input 
                                type="text" 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Ngày vào làm:</label>
                            <input 
                                type="date" 
                                value={startDate} 
                                onChange={(e) => setStartDate(e.target.value)} 
                            />
                        </div>
                    </div>
                </div>
                <button className="update-button" onClick={handleUpdate}>Cập nhật</button>
            </div>
        </>
    );
};

export default UpdateEmployee;
