import { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/Storecontext";
import { useNavigate } from "react-router-dom";
const FoodItem = ({ id, Food_name, Price, Food_picture }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={Food_picture} alt={Food_name} className="staff-item-image" />
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
        <h3>{Food_name}</h3>
        <div className="food-item-price-rating">
          <img src={assets.rating_starts} alt="" />
          <p className="food-item-price">{Price} VND</p>
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
