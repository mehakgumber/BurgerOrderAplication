import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger=(props) =>{
  let transformedingredients=Object.keys(props.ingredients)
              .map(igKey =>{
                  return[...Array(props.ingredients[igKey])].map((_,i) => {
                    return  <BurgerIngredient key={igKey+1} type={igKey} />;
                  });
              } )
              .reduce((arr,el) =>{
                  return  arr.concat(el);
              }, []);
              if(transformedingredients.length===0){
              transformedingredients= <p>Please start adding ingredients</p>;
              }
    return (
        <div className="Burger">
         
            <BurgerIngredient type="bread-top"/>
            {transformedingredients}
            <BurgerIngredient type="bread-bottom"/>
           
        </div>
    );

}
export default burger;