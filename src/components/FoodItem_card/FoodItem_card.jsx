import { useContext } from "react";
import "./FoodItem_card.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/Storecontext";

const FoodItem = ({ id, name, price, description, image, handleAddToCart }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
      </div>
      <div className="food-item-info">
        <p>{name}</p>
        <div className="food-item-price-rating">
          <img src={assets.rating_starts} alt="" />
          <p className="food-item-price">{price} VND</p>
        </div>
        <div className="addcart">
          <button
            className="edit-button"
            onClick={() => handleAddToCart({ id, name, price, image })}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
