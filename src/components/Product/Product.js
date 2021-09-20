import React from 'react';

const Product = (props) => {

    const {addToCart,products}=props


    return (
        <div style={{marginTop:'20px',border:'1px solid tomato',padding:'10px'}}>
            <h3>{products.name}</h3>
            <button onClick={()=>addToCart(products.id,products.name)}>Add to Cart</button>
        </div>
    );
};

export default Product;