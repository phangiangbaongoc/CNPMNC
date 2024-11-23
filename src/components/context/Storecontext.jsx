import { createContext, useEffect, useState } from "react";
import { food_list, staff_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    staff_list,
    cartItems,
    setCartItem,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
// import { createContext, useEffect, useState } from "react";
// import { addToCartApi, getCartApi, removeFromCartApi } from "../../util/api"; // Import API functions

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItem] = useState({});

//   // Tải giỏ hàng từ backend khi ứng dụng khởi động
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const cartData = await getCartApi(); // Giả sử API trả về giỏ hàng của người dùng
//         setCartItem(cartData); // Cập nhật giỏ hàng từ backend
//       } catch (error) {
//         console.error("Lỗi khi tải giỏ hàng:", error);
//       }
//     };

//     fetchCart();
//   }, []);

//   // Hàm thêm món vào giỏ hàng
//   const addToCart = async (itemId, price, quantity = 1) => {
//     try {
//       // Gửi yêu cầu tới backend để thêm sản phẩm vào giỏ hàng
//       const cartData = await addToCartApi({
//         productId: itemId,
//         quantity,
//         price,
//       });
//       setCartItem(cartData); // Cập nhật trạng thái giỏ hàng
//     } catch (error) {
//       console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
//     }
//   };

//   // Hàm xóa món khỏi giỏ hàng
//   const removeFromCart = async (itemId) => {
//     try {
//       const cartData = await removeFromCartApi(itemId); // Gửi yêu cầu xóa sản phẩm
//       setCartItem(cartData); // Cập nhật giỏ hàng
//     } catch (error) {
//       console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", error);
//     }
//   };

//   // Chia sẻ dữ liệu cho các component
//   const contextValue = {
//     cartItems,
//     setCartItem,
//     addToCart,
//     removeFromCart,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;
