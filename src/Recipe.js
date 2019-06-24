import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title,calories,totalWeight,ingredients,url,image}) => {
    return(
        <div className={style.boxdiv}>
            <h1 className={style.recipe}>{title}</h1>
            <p>{calories} kcal / {totalWeight} g</p>
            <h2>Ingredients</h2>
            <ol>
                {ingredients.map (ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <img src={image} alt="Not Available" />
            <p><a href={url} target="_blank">Click Here For More Details</a></p>
        </div>
    );
};

export default Recipe;

