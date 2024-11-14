import axios from "./axios.customize";

// API tạo tài khoản người dùng
const createUserApi = (name, email, password) => {
  const URL_API = "/v1/api/register";
  const data = {
    name,
    email,
    password,
  };
  return axios.post(URL_API, data);
};
// APi lấy danh sách người dùng
const getUserApi = () => {
  const URL_API = "/v1/api/user";
  return axios.get(URL_API);
};

// API login truyền vào vào FE
const loginApi = (email, password) => {
  const URL_API = "/v1/api/login";
  const data = {
    email,
    password,
  };
  return axios.post(URL_API, data);
};
// Tạo sản phẩm
const createProductApi = (formData) => {
  const URL_API = "/v1/product/create_product";
  return axios.post(URL_API, formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Đảm bảo gửi đúng loại content
    },
  });
};
// API lấy danh sách sản phẩm
const getProductApi = () => {
  const URL_API = "/v1/product/list_product";
  return axios.get(URL_API);
};
// API xóa sản phẩm
const deleteProductApi = (id) => {
  const URL_API = `/v1/product/delete_product/${id}`;
  return axios.delete(URL_API);
};

//KHO
// API tạo sản phẩm kho mới
const createWareApi = (
  Ware_name,
  Ware_quantity,
  Ware_unit,
  Ware_entry_date,
  Ware_export_date
) => {
  const URL_API = "/v1/warehouse/create_warehouse";
  const data = {
    Ware_name,
    Ware_quantity,
    Ware_unit,
    Ware_entry_date,
    Ware_export_date,
  };
  return axios.post(URL_API, data);
};

// APi lấy danh sách kho
const getWareApi = () => {
  const URL_API = "/v1/warehouse/list_warehouse";
  return axios.get(URL_API);
};

// NHÂN VIÊN
// API tạo nhân viên mới
const createStaffApi = (formData) => {
  const URL_API = "/v1/staff/create_staff";
  return axios.post(URL_API, formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Đảm bảo gửi đúng loại content
    },
  });
};
// const createStaffApi = (
//   Staff_name,
//   Staff_birthday,
//   Staff_sex,
//   Staff_phone,
//   Staff_email,
//   Staff_address,
//   Staff_date,
//   Staff_status,
//   Staff_image
// ) => {
//   const URL_API = "/v1/staff/create_staff";
//   const data = {
//     Staff_name,
//     Staff_birthday,
//     Staff_sex,
//     Staff_phone,
//     Staff_email,
//     Staff_address,
//     Staff_date,
//     Staff_status,
//     Staff_image,
//   };
//   return axios.post(URL_API, data);
// };

// APi lấy danh sách nhân viên
const getStaffApi = () => {
  const URL_API = "/v1/staff/list_staff";
  return axios.get(URL_API);
};
export {
  createUserApi,
  loginApi,
  getUserApi,
  // SẢN PHẨM
  createProductApi,
  getProductApi,
  deleteProductApi,
  // VẬT DỤNG KHO
  createWareApi,
  getWareApi,
  // NHÂN VIÊN
  createStaffApi,
  getStaffApi,
};
