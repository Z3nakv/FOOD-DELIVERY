import React, { useContext, useMemo } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list, search } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {
          food_list.length < 1
          ? 
            <h4 className="loading">Loading...</h4>
          : 
          food_list.map((item, index) => {
            if (
              (category === "All" || category === item.category) &&
              item.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })
          }
        
      </div>
    </div>
  );
};

export default FoodDisplay;
