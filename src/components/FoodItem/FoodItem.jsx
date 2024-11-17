import { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/Storecontext";
import { useNavigate } from "react-router-dom";
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <p>{name}</p>
        <div className="food-item-price-rating">
          <img src={assets.rating_starts} alt="" />
          <p className="food-item-price">{price} VND</p>
        </div>
        <div className="food-item-edit">
          <div className="food-item-actions">
            <button
              className="edit-button"
              onClick={() => navigate("/product_edit")}
            >
              Edit
            </button>

            <button
              className="delete-button"
              onClick={() => navigate("/product")}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
// import { useContext } from "react";
// import "./FoodItem.css";
// import { assets } from "../../assets/assets";
// import { StoreContext } from "../context/Storecontext";
// import { useNavigate } from "react-router-dom";
// import { addToCartApi } from "../../util/api"; // Import hàm API thêm vào giỏ hàng

// const FoodItem = ({ id, name, price, description, image }) => {
//   const { cartItems, setCartItems } = useContext(StoreContext); // Giả sử StoreContext lưu cartItems
//   const navigate = useNavigate();

//   // Thêm sản phẩm vào giỏ hàng
//   const handleAddToCart = async () => {
//     try {
//       await addToCartApi({ id, name, price });
//       setCartItems((prevItems) => ({
//         ...prevItems,
//         [id]: (prevItems[id] || 0) + 1,
//       }));
//     } catch (error) {
//       console.error("Lỗi khi thêm vào giỏ hàng:", error);
//     }
//   };

//   // Xóa sản phẩm khỏi giỏ hàng
//   const handleRemoveFromCart = () => {
//     if (cartItems[id] > 1) {
//       setCartItems((prevItems) => ({
//         ...prevItems,
//         [id]: prevItems[id] - 1,
//       }));
//     } else {
//       setCartItems((prevItems) => {
//         const newItems = { ...prevItems };
//         delete newItems[id];
//         return newItems;
//       });
//     }
//   };

//   return (
//     <div className="food-item">
//       <div className="food-item-img-container">
//         <img className="food-item-image" src={image} alt={name} />
//         {!cartItems[id] ? (
//           <img
//             className="add"
//             onClick={handleAddToCart} // Gọi hàm thêm vào giỏ hàng
//             src={assets.add_icon_white}
//             alt="Add to cart"
//           />
//         ) : (
//           <div className="food-item-counter">
//             <img
//               onClick={handleRemoveFromCart} // Gọi hàm xóa khỏi giỏ hàng
//               src={assets.remove_icon_red}
//               alt="Remove from cart"
//             />
//             <p>{cartItems[id]}</p>
//             <img
//               onClick={handleAddToCart} // Gọi hàm thêm vào giỏ hàng
//               src={assets.add_icon_green}
//               alt="Add more"
//             />
//           </div>
//         )}
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="Rating" />
//         </div>
//         <p className="food-item-desc">{description}</p>
//         <div className="food-item-edit">
//           <p className="food-item-price">${price}</p>
//           <div className="food-item-actions">
//             <button
//               className="edit-button"
//               onClick={() => navigate("/product_edit")}
//             >
//               Edit
//             </button>

//             <button
//               className="delete-button"
//               onClick={() => navigate("/product")}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;
