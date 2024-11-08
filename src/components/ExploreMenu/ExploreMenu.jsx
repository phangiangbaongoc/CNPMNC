import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ExploreMenu = ({ category, setCategory }) => {
  const navigate = useNavigate(); // Initialize the navigate function
  const handleAddItem = () => {
    // Navigate to the product page
    navigate("/product"); // Replace "/product" with the correct path if necessary
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <div className="explore-menu-header">
        <h1>THỰC ĐƠN CỬA HÀNG</h1>
        <Button type="primary" onClick={handleAddItem}>
          Thêm món
        </Button>
      </div>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
