import MealsContext from "./MealsContext"
import { useReducer } from "react" 
const defaultReducer ={
    item: [],
    totalamount: 0,
}
const MealsReducer = (state,action) =>{
    console.log(action.item)
    if(action.type==='Add_item'){
         const updatedItems = state.item.concat(action.item)
//         const existingCartIndex = state.item.findIndex((item)=>item.id===action.id);
//         const existingCart = state.item[existingCartIndex];
//         let updatedItems;
//         if(existingCartIndex){
//     const updatedItem = { ...existingCart,
//    amount : existingCart.amount + action.amount}
//         updatedItems =[...state.items]
//         updatedItems[existingCart] = updatedItem;
//     }else{
//         updatedItems=state.item.concat(action.item)
//     }
    const updatedTotalAmount=state.totalamount+action.item.price*action.item.amount;
        return{
            item : updatedItems,
            totalamount : updatedTotalAmount,
        }
    }
    // return defaultReducer
}
const MealsProvider = props=>{
const[mealsState,dispatchMealsAction ]=useReducer(MealsReducer,defaultReducer)
const addItemToCart=item=>{
    dispatchMealsAction({type:'Add_item',item:item});
}    
const removeItemFromCart=(id)=>{
    dispatchMealsAction({type:'remove_item',id:id});
}    
const Foodcontext={
    items: mealsState.item,
    totalamount: mealsState.totalamount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart
    }
return(
<MealsContext.Provider value={Foodcontext}>
    {props.children}
</MealsContext.Provider>
)
}
export default MealsProvider


