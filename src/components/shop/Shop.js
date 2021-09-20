import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {

    console.log("props I",props);
    const {products,addToCart,cart} =props
    
    return (
        <div>
            <h2>This is Shop = {cart.length}</h2>

            {
                products.map((pd)=> <Product
                 products={pd}
                  key={pd.id}
                  addToCart={addToCart} />)
            }
        </div>
    );
};


const mapStateToProps = state=>{
    return {
        cart:state.cart,
        products:state.products
    }
}


const mapDispatchToProps ={
    addToCart:addToCart
}


export default connect(mapStateToProps, mapDispatchToProps) (Shop);