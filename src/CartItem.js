import React from 'react';

// In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.
// Since the inline CSS is written in a JavaScript object, properties with two names, like background-color, must be written with camel case syntax like: backgroundColor, fontSize and etc

class CartItem extends React.Component{

// instead of arrow of function if we have used simple function then the value of this will be undefined and this.state will give error as we are accessing undefined variable
// but as we have arrow function and arrow function does have their own binding and they follow parent binding hence the value of this would be the current instance of CartItem.
    increaseQuantity = ()=>{
        // console.log('this', this.state);

        // we can change the state by 2 ways, FYI setState is a function of React.component
        // 1st method 
        // this.setState({
        //     qty: this.state.qty+1
        // });

        // 2nd method, it used callback function as an argument, Rect.Component will call the callback funtion passing the value of previous state of the this.state in prevState.
        // if prevState is required then use this method 
        this.setState((prevState)=>{
            return{
                qty: prevState.qty+1
            }
        });
    };

    decreaseQuantity = ()=>{
        // const { qty } = this.state;
        const { qty } = this.props.product;  // props is the object that we have passed from parent component(Cart) to child componenet(CartItem) in the form of props.

        if(qty === 0){
            return;
        }
        // we have used setState function becuase it will re-render the react component, means it will the render fnction again and hence we will see the updated value of qty.
        this.setState((prevState)=>{
            return{
                qty: prevState.qty-1
            }
        });
    }

    render(){  // render if function of React.Componenet

        // const {qty, price, title} = this.state; 
        const {qty, price, title} = this.props.product;             // props is the object that we have passed from parent component(Cart) to child componenet(CartItem) in the form of props.
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.images}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize : 22}}>{title}</div>
                    <div style={{color : '#777'}}>Rs {price}</div>
                    <div style={{color : '#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img 
                            className='action-icons' 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"  
                            alt='increase' 
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            className='action-icons' 
                            src="https://cdn-icons-png.flaticon.com/512/66/66889.png"  
                            alt='decrease'
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            className='action-icons' 
                            src="https://cdn-icons-png.flaticon.com/128/10302/10302799.png"  
                            alt='delete' 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

// for styling a component in react we can use an javascript object 
const styles ={
    images :{
        height:120,
        width: 120,
        borderRadius: 4,
        backgroundColor : '#777'
    }
}
export default CartItem;