import React from "react";
import "./Meal.css";
import { GiHotMeal } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Meal = (props) => {
    const navigator = useNavigate();
    const showDetails = () => {
      navigator(`/meal/${idMeal}`)
    }
  const { strMeal, strMealThumb, idMeal } = props.meal;
  return (
    <div className="p-10 meal-container">
      <img className="w-15" src={strMealThumb} alt="" />
      <h1 className="text-3xl text-bold mt-5">{strMeal}</h1>
      <div className="btn-con">
        <button onClick={showDetails}>Details </button>
        <GiHotMeal className="icon"></GiHotMeal>
      </div>
    </div>
  );
};

export default Meal;
