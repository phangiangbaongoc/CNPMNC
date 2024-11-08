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
// API login truyền vào vào FE
const loginApi = (email, password) => {
  const URL_API = "/v1/api/login";
  const data = {
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
/////////////////////////////////////////////////////////////
// API tạo sản phẩm mới
const createStaffApi = (
  Food_name,
  Food_detail,
  Price,
  Food_picture,
  Food_status,
  categoryID
) => {
  const URL_API = "/v1/create_product";
  const data = {
    Food_name,
    Food_detail,
    Price,
    Food_picture,
    Food_status,
    categoryID,
  };
  return axios.post(URL_API, data);
};
// APi lấy danh sách sản phẩm
const getProductApi = () => {
  const URL_API = "/v1/list_product";
  return axios.get(URL_API);
};
// API xóa sản phẩm
const deleteProductApi = (id) => {
  const URL_API = `/v1/delete_product/${id}`; // Giả định API xóa sản phẩm có dạng này
  return axios.delete(URL_API);
};
//////////////////////////////////////////////////////////////////////////////
// API tạo nhân viên mới
const createProductApi = (
  Food_name,
  Food_detail,
  Price,
  Food_picture,
  Food_status,
  categoryID
) => {
  const URL_API = "/v1/product";
  const data = {
    Food_name,
    Food_detail,
    Price,
    Food_picture,
    Food_status,
    categoryID,
  };
  return axios.post(URL_API, data);
};
// APi lấy danh sách người dùng
const getStaffApi = () => {
  const URL_API = "/v1/api/liststaff";
  return axios.get(URL_API);
};

// API tạo sản phẩm kho mới
const createWareApi = (name, category, quantity, daystart, dayend) => {
  const URL_API = "v1/api/warehouse";
  const data = {
    name,
    category,
    quantity,
    daystart,
    dayend,
  };
  return axios.post(URL_API, data);
};
// APi lấy danh sách kho
const getWareApi = () => {
  const URL_API = "/v1/api/listwarehouse";
  return axios.get(URL_API);
};
// APi tạo đơn hàng mới
const createOrder = (totalSales, orderCount, day, month, year) => {
  const URL_API = "v1/api/warehouse";
  const data = {
    totalSales,
    orderCount,
    day,
    month,
    year,
  };
  return axios.post(URL_API, data);
};

export {
  createUserApi,
  loginApi,
  getUserApi,
  createStaffApi,
  createProductApi,
  deleteProductApi,
  createWareApi,
  getStaffApi,
  getProductApi,
  getWareApi,
  createOrder,
};
