import React from "react";
import CartItem from './CartItem'

const Cart = (props)=>{
    // console.log('props', props);
    const { products } = props;
    // console.log('products', products);
    return(
        <div className="cart">
            {/* we can pass the variables(variables are basically objects) as attributes to the child components in the form of props. We can pass more than 1 props at a time too. */}
            {products.map((product) =>{
                // console.log('products',product);
                return <CartItem
                            product={product} 
                            key={product.id}
                            handleIncreaseQuantity={props.handleIncreaseQuantity}
                            handleDecreaseQuantity={props.handleDecreaseQuantity}
                            handleDeleteItem={props.handleDeleteItem}
                        />
            })}
        </div>
    )
}

export default Cart;