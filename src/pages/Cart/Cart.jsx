import React, { useState, useEffect } from "react";
import "./Cart.css";
import FoodItemCard from "../../components/FoodItem_card/FoodItem_card";
import {
  createMomoPaymentApi,
  getProductApi,
  postCartApi,
  postOrderApi,
} from "../../util/api";

const Cart = () => {
  // const [cart, setCart] = useState([]);
  // const [dataSource, setDataSource] = useState([]);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const res = await getProductApi();
  //       if (res && res.data) {
  //         setDataSource(res.data);
  //       }
  //     } catch (error) {
  //       console.error("Lỗi khi gọi API:", error);
  //     }
  //   };
  //   fetchProduct();
  // }, []);
  const [cart, setCart] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductApi();
        if (res && res.data) {
          setDataSource(res.data);
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };
    fetchProduct();
  }, []);
  // const handleAddToCart = (product) => {
  //   const existingProduct = cart.find((item) => item.name === product.name);
  //   if (existingProduct) {
  //     setCart(
  //       cart.map((item) =>
  //         item.name === product.name
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };
  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  // const handleIncreaseQuantity = (product) => {
  //   setCart(
  //     cart.map((item) =>
  //       item.name === product.name
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     )
  //   );
  // };

  const handleIncreaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  // const handleDecreaseQuantity = (product) => {
  //   setCart(
  //     cart.map((item) =>
  //       item.name === product.name && item.quantity > 1
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   );
  // };
  const handleDecreaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.name === product.name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  // const handleRemoveFromCart = (product) => {
  //   setCart(cart.filter((item) => item.name !== product.name));
  // };
  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.name !== product.name));
  };

  const handleCheckout = async () => {
    try {
      const orderData = {
        staff_id: "exampleStaffId", // Thay thế bằng ID thực tế từ hệ thống đăng nhập
        items: cart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
        totalItems: cart.reduce((acc, item) => acc + item.quantity, 0),
        totalPrice: total,
      };

      // Gọi API để tạo đơn hàng
      const res = await postOrderApi(orderData);
      if (res && res.data) {
        alert("Thanh toán thành công!");
        console.log("Thông tin đơn hàng:", res.data.order);
        setCart([]); // Reset giỏ hàng sau khi thanh toán
      }
    } catch (error) {
      console.error("Lỗi khi thanh toán:", error);
      alert("Đã xảy ra lỗi khi thanh toán. Vui lòng thử lại.");
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // const handleMomoPayment = async () => {
  //   try {
  //     const paymentData = {
  //       amount: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
  //       items: cart.map((item) => ({
  //         productId: item.id,
  //         quantity: item.quantity,
  //         price: item.price,
  //       })),
  //     };
  //     const res = await createMomoPaymentApi(paymentData);
  //     if (res && res.data && res.data.payUrl) {
  //       window.location.href = res.data.payUrl; // Redirect đến trang thanh toán MoMo
  //     } else {
  //       alert("Không thể tạo thanh toán MoMo");
  //     }
  //   } catch (error) {
  //     console.error("Lỗi khi thanh toán MoMo:", error);
  //   }
  // };

  // return (
  //   <div className="app-container">
  //     {/* Danh sách món */}
  //     <div className="food-display">
  //       <div className="food-display-list">
  //         {dataSource.map((item) => (
  //           <FoodItemCard
  //             key={item._id}
  //             id={item._id}
  //             name={item.Food_name}
  //             price={item.Price}
  //             image={item.Food_picture}
  //             handleAddToCart={handleAddToCart}
  //           />
  //         ))}
  //       </div>
  //     </div>

  //     {/* Giỏ hàng */}
  //     <div className="cart">
  //       <h2>Giỏ hàng</h2>
  //       <ul>
  //         {cart.map((item, index) => (
  //           <li key={index} className="cart-item">
  //             <span>{item.name}</span>
  //             <div className="cart-controls">
  //               <button onClick={() => handleDecreaseQuantity(item)}>-</button>
  //               <span>{item.quantity}</span>
  //               <button onClick={() => handleIncreaseQuantity(item)}>+</button>
  //               <button
  //                 className="remove-btn"
  //                 onClick={() => handleRemoveFromCart(item)}
  //               >
  //                 x
  //               </button>
  //             </div>
  //             <span className="price">
  //               {(item.price * item.quantity).toLocaleString()} đ
  //             </span>
  //           </li>
  //         ))}
  //       </ul>

  //       {/* Tổng tiền và nút thanh toán */}
  //       <div className="checkout-section">
  //         <h3>Tổng tiền: {total.toLocaleString()} đ</h3>
  //         <button className="checkout-btn">Thanh toán</button>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="app-container" style={{ padding: "20px" }}>
      <div className="food-display">
        <div className="food-display-list">
          {dataSource.map((item) => (
            <FoodItemCard
              key={item._id}
              id={item._id}
              name={item.Food_name}
              price={item.Price}
              image={item.Food_picture}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="cart">
        <h2>Giỏ hàng</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <span>{item.name}</span>
              <div className="cart-controls">
                <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  x
                </button>
              </div>
              <span className="price">
                {(item.price * item.quantity).toLocaleString()} đ
              </span>
            </li>
          ))}
        </ul>

        <div className="checkout-section">
          <h3>Tổng tiền: {total.toLocaleString()} đ</h3>
          <button className="checkout-btn" onClick={handleCheckout}>
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
