import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const Cart = (props) => {
  console.log("rem",props);
  const { cart ,removeFromCart} = props;

  return (
    <div>
      <h4>This is Cart</h4>
    
        {

            cart.map(id => <li>{id} <button onClick={()=>removeFromCart(id)}>Delete</button></li>)
        }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
