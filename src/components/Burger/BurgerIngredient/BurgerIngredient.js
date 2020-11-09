import React from 'react';
import './BurgerIngredient.css';


class BurgerIngredient extends React.Component{
  render(){

    let ingredient=null;

    switch(this.props.type){
        case('bread-bottom'):
           ingredient=<div className="BreadBottom"/>
           break;

        case('bread-top'):
           ingredient=(
                <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
                </div>
           );
           break;
           case('meat'):
           ingredient=<div className="Meat"/>
           break;
           case('cheese'):
           ingredient=<div className="Cheese"/>
           break;
           case('bacon'):
           ingredient=<div className="Bacon"/>
           break;
           case('salad'):
           ingredient=<div className="Salad"/>
           break;
           default:
              ingredient=null;
            
    }
    return ingredient;
   }
}
// BurgerIngredient.propTypes={
//    type: PropTypes.string.isRequired
// };
export default BurgerIngredient;

