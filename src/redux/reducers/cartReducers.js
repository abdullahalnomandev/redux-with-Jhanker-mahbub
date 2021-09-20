import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  cart: [],
  products:[ 
  {name:'Lanovo laptop',id:1},
  {name:'Afsus laptop',id:2},
  {name:'Window laptop',id:3},
  {name:'HP laptop',id:4},
  {name:'Toshiba laptop',id:5},
  {name:'Unknown laptop',id:6},
  {name:'Lanovo laptop',id:7}]
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newID =action.id
      const newCart = [...state.cart,newID]
      return {
        ...state,cart:newCart
      };

    case REMOVE_FROM_CART:
      const id = action.id;

      const remainingCart = state.cart.filter(item => item !== id);
      console.log("remaingingCart",remainingCart);

      return {
       ...state, cart: remainingCart
       
      };

    default:
      return state;
  }
};

export default cartReducers;