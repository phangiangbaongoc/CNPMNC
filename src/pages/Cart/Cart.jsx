import React, { useState, useEffect } from "react";
import "./Cart.css"; // Import file CSS
import FoodItemCard from "../../components/FoodItem_card/FoodItem_card";
import { getProductApi } from "../../util/api";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
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

  const categories = ["Tất cả", "Cà phê", "Trà sữa", "Trà", "Topping", "Khác"];

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
      <div className="food-display">
        <div className="food-display-list">
          {dataSource.map((item) => (
            <div key={item._id}>
              <FoodItemCard
                id={item._id}
                name={item.Food_name}
                price={item.Price}
                image={item.Food_picture}
                handleAddToCart={handleAddToCart} // Truyền hàm vào component
              />
            </div>
          ))}
        </div>
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
                  x
                </button>
              </div>
              <span className="price">
                {(item.price * item.quantity).toLocaleString()} đ
              </span>
            </li>
          ))}
        </ul>

        {/* Total and Checkout Button */}
        <div className="checkout-section">
          <h3>Tổng tiền: {total.toLocaleString()} đ</h3>
          <button className="checkout-btn">Thanh toán</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
