import React, { useReducer } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import Modal from '../../components/UI/Modal/Modal';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES={
  salad: 0.5,
  bacon: 0.6,
  cheese: 0.4,
  meat: 1.3,
   
  }
class BurgerBuilder extends React.Component {
  state={
    ingredients:{
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
  totalPrice: 4,
  purchasable: false,
  purchasing: false
  }
 
  updatePurchaseState(ingredients){
    
    console.log(this.state.ingredients);
    const sum=Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey]
    })
    .reduce((sum, el) => {
      return sum+el;
    }, 0);
    this.setState({purchasable: sum > 0})
  }
  addIngredientHandler=(type)=>{
    const oldcount=this.state.ingredients[type];
    const updatedCount=oldcount+1;
    const updatedIngredients={
      ...this.state.ingredients
    };
    console.log(updatedCount);
    console.log(oldcount);
    console.log(updatedIngredients);
    updatedIngredients[type]=updatedCount;
    const priceaddition=INGREDIENT_PRICES[type];
    const oldprice=this.state.totalPrice;
    const newprice=oldprice+priceaddition;
    this.setState({totalPrice: newprice, ingredients: updatedIngredients})
    console.log(this.state.ingredients);
    console.log(updatedIngredients);
    this.updatePurchaseState(updatedIngredients);

  }
  removeIngredientHandler=(type)=>{
    const oldcount=this.state.ingredients[type];
    if(oldcount===0){
      return;
    }
    const updatedCount=oldcount-1;
    const updatedIngredients={
      ...this.state.ingredients
    };
    updatedIngredients[type]=updatedCount;
    const pricededuction=INGREDIENT_PRICES[type];
    const oldprice=this.state.totalPrice;
    const newprice=oldprice-pricededuction;
    console.log("3", this.state.ingredients);
    this.setState({totalPrice: newprice, ingredients: updatedIngredients},()=>{
      console.log("2", this.state.ingredients);
      this.updatePurchaseState(this.state.ingredients);
     
    })
    
    
  }
  purchaseHandler=()=>{
    this.setState({purchasing: true});
  }
  purchaseCancelHandler=()=>{
    this.setState({purchasing:false})
  }
  purchaseContinueHandler=()=>{
    console.log("continue");
    alert("you continue ");
  }
  render(){
    const disabledInfo={
      ...this.state.ingredients
    };
    for(let key in disabledInfo){
      disabledInfo[key]=disabledInfo[key]<=0
    }
    
    return (
    <Aux>
       <Modal show={this.state.purchasing} modalclosed={this.purchaseCancelHandler}>
         <OrderSummary ingredients={this.state.ingredients}
         purchaseCanceled={this.purchaseCancelHandler}
         purchaseContinued={this.purchaseContinueHandler}
         price={this.state.totalPrice}/>
         </Modal>  
      {/* <div>
      {/* <Media query="(min-width: 1000px)" render={()=> */}
      {/* ( */}
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
     ingredientsAdded={this.addIngredientHandler}
     ingredientsRemoved={this.removeIngredientHandler}
     disabled={disabledInfo}
     purchasable={this.state.purchasable}
     price={this.state.totalPrice}
     ordered={this.purchaseHandler}
        />
       
    </Aux>
      );

    }
}

export default BurgerBuilder;