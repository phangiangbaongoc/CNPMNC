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
const createProductApi = (
  Food_name,
  Price,
  Food_status,
  Food_picture,
  categoryID
) => {
  const URL_API = "/v1/product/create_product";
  const data = {
    Food_name,
    Price,
    Food_status,
    Food_picture,
    categoryID,
  };
  return axios.post(URL_API, data);
};
const getProductApi = () => {
  const URL_API = "/v1/product/list_product";
  return axios.get(URL_API);
};
// Lấy thông tin chi tiết sản phẩm
const getProductDetailApi = (id) => {
  const URL_API = `/v1/product/detail/${id}`;
  return axios.get(URL_API);
};
// Cập nhật sản phẩm
const updateProductApi = (id, formData) => {
  const URL_API = `/v1/product/update/${id}`;
  return axios.put(URL_API, formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Hỗ trợ upload file
    },
  });
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
const createStaffApi = (
  Staff_name,
  Staff_birthday,
  Staff_sex,
  Staff_phone,
  Staff_email,
  Staff_address,
  Staff_status,
  Staff_image
) => {
  const URL_API = "/v1/staff/create_staffs";
  const data = {
    Staff_name,
    Staff_birthday,
    Staff_sex,
    Staff_phone,
    Staff_email,
    Staff_address,
    Staff_status,
    Staff_image,
  };
  return axios.post(URL_API, data);
};
// APi lấy danh sách nhân viên
const getStaffApi = () => {
  const URL_API = "/v1/staff/list_staffs";
  return axios.get(URL_API);
};
const deleteStaffApi = (id) => {
  const URL_API = `/v1/staff/delete_staff/${id}`;
  return axios.delete(URL_API);
};
export const addToCartApi = (data) => {
  return axios.post("/add-to-cart", data);
};
const postCartApi = async (cart) => {
  const URL_API = `/v1/cart/create_cart`;
  return axios.post(URL_API);
};
// const postOrderApi = async () => {
//   const URL_API = "/v1/order/create";
//   return axios.post(URL_API);
// };
const postOrderApi = async (orderData) => {
  const URL_API = "/v1/order/create";
  return axios.post(URL_API, orderData);
};
const getOrderAPI = async (id) => {
  const URL_API = `/v1/order/${id}`;
  return axios.get(URL_API);
};

// GIỎ HÀNG
// API thêm món vào giỏ hàng
// const addToCartApi = async ({ productId, quantity, price }) => {
//   const URL_API = "/v1/cart/cart"; // Đảm bảo đường dẫn này đúng với API của bạn
//   const data = {
//     staff_id: "staff123", // Dùng thông tin người dùng thực tế
//     items: [
//       {
//         productId,
//         quantity,
//         price,
//       },
//     ],
//   };
//   return axios.post(URL_API, data);
// };

// API lấy giỏ hàng
// const getCartApi = async () => {
//   const URL_API = "/v1/cart/edit_cart"; // Đảm bảo đường dẫn này đúng với API của bạn
//   return axios.get(URL_API, {
//     params: {
//       staff_id: "staff123", // Dùng thông tin người dùng thực tế
//     },
//   });
// };

// // API xóa món khỏi giỏ hàng
// const removeFromCartApi = async (itemId) => {
//   const URL_API = "/v1/cart/delete_cart"; // Đảm bảo đường dẫn này đúng với API của bạn
//   const data = {
//     staff_id: "staff123", // Dùng thông tin người dùng thực tế
//     productId: itemId,
//   };
//   return axios.delete(URL_API, { data });
// };

const createMomoPaymentApi = (paymentData) => {
  const URL_API = "/v1/payment/payment"; // Đường dẫn API trên backend
  return axios.post(URL_API, paymentData);
};
// const createMomoPaymentApi = async (paymentData) => {
//   try {
//     const response = await axios.post("/v1/payment/payment", paymentData);
//     return response.data; // Giả sử backend trả về JSON chứa `paymentUrl`
//   } catch (error) {
//     console.error(
//       "Error in MoMo Payment API:",
//       error.response?.data || error.message
//     );
//     throw error; // Ném lỗi để xử lý ở hàm `handleCheckout`
//   }
// };

export {
  createUserApi,
  loginApi,
  getUserApi,
  // SẢN PHẨM
  createProductApi,
  getProductApi,
  getProductDetailApi,
  updateProductApi,
  deleteProductApi,
  // VẬT DỤNG KHO
  createWareApi,
  getWareApi,
  // NHÂN VIÊN
  createStaffApi,
  getStaffApi,
  deleteStaffApi,
  // GIỎ HÀNG
  postCartApi,
  postOrderApi,
  getOrderAPI,
  createMomoPaymentApi,

  // addToCartApi,
  // getCartApi,
  // removeFromCartApi,
};
