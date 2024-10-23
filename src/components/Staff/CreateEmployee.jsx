import React, { useState } from 'react';
import './CreateEmployee.css';
import { useNavigate } from 'react-router-dom';

const CreateEmployee = () => {
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleClose = () => {
        navigate('/employee'); 
    };

    return (
        <>
            <div className="modal-overlay"></div>
            <div className="create-employee-modal">
                <button className="close-button" onClick={handleClose}>X</button>
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
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>
                    <div className="form-fields">
                        <div className="form-group">
                            <label>MÃ NV:</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>HỌ VÀ TÊN:</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>NGÀY SINH:</label>
                            <input type="date" />
                        </div>
                        <div className="form-group">
                            <label>GIỚI TÍNH:</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>SỐ ĐIỆN THOẠI:</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>EMAIL:</label>
                            <input type="email" />
                        </div>
                        <div className="form-group">
                            <label>ĐỊA CHỈ:</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>NGÀY LÀM:</label>
                            <input type="date" />
                        </div>
                        <div className="form-group">
                            <label>TRẠNG THÁI:</label>
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
