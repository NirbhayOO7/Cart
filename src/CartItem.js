// import React from 'react';

// In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.
// Since the inline CSS is written in a JavaScript object, properties with two names, like background-color, must be written with camel case syntax like: backgroundColor, fontSize and etc

const CartItem = (props)=>{
    // console.log('props', props);
    const {qty, price, title} = props.product;             // props is the object that we have passed from parent component(Cart) to child componenet(CartItem) in the form of props.

        const { product, handleIncreaseQuantity, handleDecreaseQuantity, handleDeleteItem } = props;

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
                            onClick={()=>handleIncreaseQuantity(product)}  //always use arrow function as the value of this will the value of its class, incase of normal function we will lost the value of this.
                        />
                        <img 
                            className='action-icons' 
                            src="https://cdn-icons-png.flaticon.com/512/66/66889.png"  
                            alt='decrease'
                            onClick={()=> handleDecreaseQuantity(product)}
                        />
                        <img 
                            className='action-icons' 
                            src="https://cdn-icons-png.flaticon.com/128/10302/10302799.png"  
                            alt='delete' 
                            onClick={()=> handleDeleteItem(product.id)}
                        />
                    </div>
                </div>
            </div>
        );

}

// We can either use above function component of below class componenet 

// class CartItem extends React.Component{

//     render(){  // render is a function of React.Componenet

//         // const {qty, price, title} = this.state; 
//         const {qty, price, title} = this.props.product;             // props is the object that we have passed from parent component(Cart) to child componenet(CartItem) in the form of props.

//         const { product, handleIncreaseQuantity, handleDecreaseQuantity, handleDeleteItem } = this.props;

//         return(
//             <div className='cart-item'>
//                 <div className='left-block'>
//                     <img style={styles.images}/>
//                 </div>
//                 <div className='right-block'>
//                     <div style={{fontSize : 22}}>{title}</div>
//                     <div style={{color : '#777'}}>Rs {price}</div>
//                     <div style={{color : '#777'}}>Qty: {qty}</div>
//                     <div className='cart-item-actions'>
//                         {/* Buttons */}
//                         <img 
//                             className='action-icons' 
//                             src="https://cdn-icons-png.flaticon.com/512/992/992651.png"  
//                             alt='increase' 
//                             onClick={()=>handleIncreaseQuantity(product)}  //always use arrow function as the value of this will the value of its class, incase of normal function we will lost the value of this.
//                         />
//                         <img 
//                             className='action-icons' 
//                             src="https://cdn-icons-png.flaticon.com/512/66/66889.png"  
//                             alt='decrease'
//                             onClick={()=> handleDecreaseQuantity(product)}
//                         />
//                         <img 
//                             className='action-icons' 
//                             src="https://cdn-icons-png.flaticon.com/128/10302/10302799.png"  
//                             alt='delete' 
//                             onClick={()=> handleDeleteItem(product.id)}
//                         />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

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