import React from 'react';
import Cart from './Cart';
import Navbar from './NavBar'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products : [
            {
                price : 999,
                title: 'Mobile Phone',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1676115723792-69e7a3f6d504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMHMyMyUyMHVsdHJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id:1
            },
            {
                price : 99,
                title: 'Watch',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1542541864-4abf21a55761?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0V2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id:2
            },
            {
                price : 999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
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

  getCartCount = () =>{
    const { products } = this.state;

    let count = 0;

    products.forEach((product)=>{
      count+=product.qty;
    })

    return count;
  }

  getTotal= () =>{
    const { products } = this.state;

    let total=0;

    products.forEach((product)=>{
      total+=product.qty*product.price
    });

    return total;
  }


  render(){
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
          handleIncreaseQuantity={this.increaseQuantity}
          handleDecreaseQuantity={this.decreaseQuantity}
          handleDeleteItem={this.deleteItem}
          count={this.getCartCount}
        />
        <div style={style.footer}>
          TOTAL: {this.getTotal()}
        </div>
      </div>
    );
  }
}

const style ={
  footer:{
    height: 70,
    fontSize: 30,
    padding: 18
  }
}

export default App;
