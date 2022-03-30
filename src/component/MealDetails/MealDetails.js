import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetails.css'

const MealDetails = () => {
    const [detailMeal, setDetailMeal] = useState({})
    const {strMeal,strInstructions, strMealThumb} = detailMeal;
    const params = useParams()
    const {mealId} = params;
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetailMeal(data.meals[0]))
    },[])
    return (
        <div className='detail'>
            <h1 className='text-3xl text-bold mb-7'>{strMeal}</h1>
            <img className='mb-5' src={strMealThumb} alt="" />
            <h3 className="text-l">{strInstructions}</h3>
        </div>
    );
};

export default MealDetails;