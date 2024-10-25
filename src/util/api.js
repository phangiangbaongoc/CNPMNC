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

// API tạo sản phẩm mới
const createStaffApi = (image, name, phone, date) => {
  const URL_API = "v1/api/staff";
  const data = {
    image,
    name,
    phone,
    date,
  };
  return axios.post(URL_API, data);
};
// API tạo nhân viên mới
const createProductApi = (image, name, category, price, description) => {
  const URL_API = "v1/api/product";
  const data = {
    image,
    name,
    category,
    price,
    description,
  };
  return axios.post(URL_API, data);
};
// APi lấy danh sách người dùng
const getStaffApi = () => {
  const URL_API = "/v1/api/liststaff";
  return axios.get(URL_API);
};
// APi lấy danh sách người dùng
const getProductApi = () => {
  const URL_API = "/v1/api/listproduct";
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

export {
  createUserApi,
  loginApi,
  getUserApi,
  createStaffApi,
  createProductApi,
  createWareApi,
  getStaffApi,
  getProductApi,
  getWareApi,
};
