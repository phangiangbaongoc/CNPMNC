import React, { useState } from "react";
import "./Cart.css"; // Import file CSS
import { useNavigate } from "react-router-dom";
import { createMomoPaymentApi, postOrderApi } from "../../util/api";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const navigate = useNavigate(); // Khai báo useNavigate
  const products = [
    {
      name: "Cà phê đen đá",
      price: 23000,
      image: "path/to/image1.jpg",
      category: "Cà phê",
    },
  ];

  const categories = ["Tất cả", "Cà phê", "Trà sữa", "Trà", "Topping", "Khác"];

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
    // const existingProduct = cart.find(
    // (item) => item.productId === product.productId
    //);  Thay đổi điều kiện tìm kiếm theo productId
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]); // Lưu productId khi thêm mới sản phẩm vào giỏ
    }
  };

  const handleIncreaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.name === product.name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.name !== product.name));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const filteredProducts =
    selectedCategory === "Tất cả"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // const handleCheckout = async () => {
  //   // // Chuyển hướng đến trang chi tiết đơn hàng (OrderDetails)
  //   // navigate("/order-detail", { state: { cart, total } });
  // };
  // const handleCheckout = async () => {
  //   console.log("Data sent to API:", {
  //     items: cart.map((item) => ({
  //       productId: item._id, // Đảm bảo _id tồn tại
  //       quantity: item.quantity,
  //       price: item.price,
  //     })),
  //     totalItems: cart.length,
  //     totalPrice: total, // Thay bằng ID nhân viên hợp lệ
  //   });

  //   try {
  //     // Gửi request POST tới API tạo đơn hàng
  //     const response = await postOrderApi({
  //       items: cart.map((item) => ({
  //         productId: item._id,
  //         quantity: item.quantity,
  //         price: item.price,
  //       })),
  //       totalItems: cart.length,
  //       totalPrice: total,
  //     });
  //     // console.log(response); // Log phản hồi API tạo đơn hàng
  //     console.log("Order created successfully:", response);

  //     // Kiểm tra xem API trả về `orderId`
  //     if (!response?.order?._id) {
  //       console.error("Order ID not found in response");
  //       return;
  //     }
  //     // Gửi request tạo thanh toán MoMo
  //     const momoResponse = await createMomoPaymentApi({
  //       orderId: response.order._id, // ID đơn hàng từ API tạo đơn hàng
  //       amount: total, // Tổng số tiền thanh toán
  //       returnUrl: "http://localhost:8080/v1/payment/payment", // URL trả về sau khi thanh toán
  //       notifyUrl: "http://localhost:8080/v1/payment/callback", // URL callback từ MoMo
  //     });
  //     console.log("MoMo payment response:", momoResponse);
  //     // Điều hướng người dùng đến trang thanh toán MoMo
  //     if (momoResponse?.paymentUrl) {
  //       window.location.href = momoResponse.paymentUrl;
  //     } else {
  //       console.error("No payment URL returned from MoMo API");
  //     }
  //     console.log("MoMo Payment URL:", momoResponse?.paymentUrl);
  //   } catch (err) {
  //     console.error("Error during checkout:", err);
  //   }
  // };
  const handleCheckout = async () => {
    try {
      // console.log("Data sent to API:", {
      //   items: cart.map((item) => ({
      //     productId: item._id,
      //     quantity: item.quantity,
      //     price: item.price,
      //   })),
      //   totalItems: cart.length,
      //   totalPrice: total,
      // });

      // // 1. Gửi request POST tới API tạo đơn hàng
      // const orderResponse = await postOrderApi({
      //   items: cart.map((item) => ({
      //     productId: item._id,
      //     quantity: item.quantity,
      //     price: item.price,
      //   })),
      //   totalItems: cart.length,
      //   totalPrice: total,
      // });

      // console.log("Order created successfully:", orderResponse);

      // if (!orderResponse || !orderResponse.order || !orderResponse.order._id) {
      //   console.error("Order ID not returned from API");
      //   alert("Đã xảy ra lỗi khi tạo đơn hàng, vui lòng thử lại.");
      //   return;
      // }

      // Bước 1: Tạo đơn hàng
      const orderResponse = await postOrderApi({
        items: cart.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
          price: item.price,
        })),
        totalItems: cart.length,
        totalPrice: total,
      });

      if (!orderResponse?.order?._id) {
        console.error("Order creation failed: No Order ID returned");
        alert("Không thể tạo đơn hàng, vui lòng thử lại.");
        return;
      }

      console.log("Order created successfully:", orderResponse);

      // 2. Gửi request tới API thanh toán MoMo

      //   const momoResponse = await createMomoPaymentApi({
      //     orderId: orderResponse.order._id, // ID đơn hàng từ BE trả về
      //     amount: total, // Tổng tiền thanh toán
      //     returnUrl: "http://localhost:5173/cart", // URL trả về FE
      //     notifyUrl: "http://localhost:8080/v1/payment/callback", // URL callback BE
      //   });

      //   console.log("MoMo Payment Response:", momoResponse);

      //   if (momoResponse?.payUrl) {
      //     // 3. Điều hướng người dùng đến trang thanh toán MoMo
      //     // console.log("Redirecting to MoMo payment page:", momoResponse.payUrl);
      //     // alert(`Đang chuyển hướng đến thanh toán MoMo: ${momoResponse.payUrl}`);
      //     window.location.href = momoResponse.payUrl;
      //   } else {
      //     console.error("MoMo payment URL not received");
      //     alert("Không thể tạo thanh toán MoMo, vui lòng thử lại.");
      //   }
      // } catch (error) {
      //   console.error("Error during checkout:", error);
      //   alert("Có lỗi xảy ra khi thanh toán, vui lòng thử lại.");
      // }
      const momoResponse = await createMomoPaymentApi({
        orderId: orderResponse.order._id,
        amount: total, // Tổng tiền thanh toán
        orderInfo: "Thanh toán MoMo",
        partnerCode: "MOMO",
        redirectUrl: "http://localhost:5173/cart", // URL trả về sau thanh toán
        ipnUrl: "http://localhost:8080/v1/payment/callback", // URL callback để cập nhật trạng thái đơn hàng
        lang: "vi",
      });

      console.log("MoMo Payment Response:", momoResponse);

      if (momoResponse?.payUrl) {
        // Điều hướng người dùng đến trang thanh toán MoMo
        window.location.href = momoResponse.payUrl;
      } else {
        console.error("Failed to receive MoMo payment URL");
        alert("Không thể tạo thanh toán MoMo, vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error during checkout process:", error);
      alert("Có lỗi xảy ra trong quá trình thanh toán, vui lòng thử lại.");
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString()} đ</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
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
                  X
                </button>
              </div>
              <span>{(item.price * item.quantity).toLocaleString()} đ</span>
            </li>
          ))}
        </ul>

        {/* Total and Checkout Button */}
        <div className="checkout-section">
          <h3>Tổng tiền: {total.toLocaleString()} đ</h3>
          <button className="checkout-btn" onClick={handleCheckout}>
            Thanh toán
          </button>{" "}
          {/* Chức năng thanh toán */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
