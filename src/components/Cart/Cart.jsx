import React, { useState } from 'react';
import './Cart.css'; // Import file CSS

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const products = [
    { name: 'Cà phê đen đá', price: 23000, image: 'path/to/image1.jpg', category: 'Cà phê' },
    { name: 'Cà phê sữa đá', price: 25000, image: 'path/to/image2.jpg', category: 'Cà phê' },
    { name: 'Trà sữa', price: 22000, image: 'path/to/image3.jpg', category: 'Trà sữa' },
    { name: 'Trà đào', price: 24000, image: 'path/to/image4.jpg', category: 'Trà' },
    { name: 'Topping đặc biệt', price: 1000, image: 'path/to/image5.jpg', category: 'Topping' },
    { name: 'Cà phê nâu', price: 3000, image: 'path/to/image1.jpg', category: 'Cà phê' },
    { name: 'Cà phê ', price: 5000, image: 'path/to/image2.jpg', category: 'Cà phê' },
    { name: 'Bạc xỉu', price: 2000, image: 'path/to/image3.jpg', category: 'Trà sữa' },
    { name: 'Trà bí', price: 4000, image: 'path/to/image4.jpg', category: 'Trà' },
    { name: 'Topping trân châu', price: 15000, image: 'path/to/image5.jpg', category: 'Topping' },
    // Thêm các sản phẩm khác ở đây
  ];

  const categories = ['Tất cả', 'Cà phê', 'Trà sữa', 'Trà', 'Topping', 'Khác'];

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (product) => {
    setCart(cart.map(item =>
      item.name === product.name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const handleDecreaseQuantity = (product) => {
    setCart(cart.map(item =>
      item.name === product.name && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter(item => item.name !== product.name));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const filteredProducts = selectedCategory === 'Tất cả'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={selectedCategory === category ? 'active' : ''}
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
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString()} đ</p>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Thêm vào giỏ</button>
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
                <button className="remove-btn" onClick={() => handleRemoveFromCart(item)}>X</button>
              </div>
              <span>{(item.price * item.quantity).toLocaleString()} đ</span>
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
