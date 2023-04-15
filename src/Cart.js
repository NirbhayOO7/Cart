import React from "react";
import CartItem from './CartItem'

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products : [
                {
                    price : 999,
                    title: 'Mobile Phone',
                    qty: 4,
                    img: '',
                    id:1
                },
                {
                    price : 99,
                    title: 'Watch',
                    qty: 10,
                    img: '',
                    id:2
                },
                {
                    price : 999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id:3
                }
            ]
        }
    }

    render(){

        const { products } = this.state;
        return(

            <div className="cart">
                {/* we can pass the variables(variables are basically objects) as attributes to the child components in the form of props. We can pass more than 1 props at a time too. */}
                {products.map((product) =>{
                    return <CartItem product={product} key={product.id}/>
                })}
            </div>
        )
    }
}

export default Cart;