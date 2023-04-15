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

// instead of arrow of function if we have used simple function then the value of this will be undefined and this.state will give error as we are accessing undefined variable
// but as we have arrow function and arrow function does have their own binding and they follow parent binding hence the value of this would be the current instance of CartItem.
increaseQuantity = (product) => {
    // console.log('incr qty of ', product);

    const { products } = this.state;

    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products
    });
};

decreaseQuantity = (product)=>{

    const { products } = this.state;

    const index = products.indexOf(product);

    const qty = products[index].qty;

    if(qty === 0){
        return;
    }

    products[index].qty -=1;
    // we have used setState function becuase it will re-render the react component, means it will the render function again and hence we will see the updated value of qty.
    this.setState({
        products
    });
}


    deleteItem = (id)=>{
        
        const { products } = this.state;
        const items = products.filter((item)=>{
            return item.id!== id;
        })

        this.setState({
            products : items
        })
    }

    render(){

        const { products } = this.state;
        return(

            <div className="cart">
                {/* we can pass the variables(variables are basically objects) as attributes to the child components in the form of props. We can pass more than 1 props at a time too. */}
                {products.map((product) =>{
                    return <CartItem 
                            product={product} 
                            key={product.id}
                            handleIncreaseQuantity={this.increaseQuantity}
                            handleDecreaseQuantity={this.decreaseQuantity}
                            handleDeleteItem={this.deleteItem}
                            />
                })}
            </div>
        )
    }
}

export default Cart;