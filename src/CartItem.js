import React from 'react';

// In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.
// Since the inline CSS is written in a JavaScript object, properties with two names, like background-color, must be written with camel case syntax like: backgroundColor, fontSize and etc

class CartItem extends React.Component{
    render(){
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.images}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize : 25}}>Phone</div>
                    <div style={{color : '#777'}}>999</div>
                    <div style={{color : '#777'}}>Qty: 1</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

// for styling a component in react we can use an javascript object 
const styles ={
    images :{
        height:110,
        width: 110,
        borderRadius: 4
    }
}
export default CartItem;