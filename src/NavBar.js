import React from 'react';

function NavBar(props){

    return(
        <div style={style.nav}>
            <div style={style.cartIconContainer}>
                <img style={style.cartIcon} src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="cart-icon" />
                <span style={style.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}

const style ={
    cartIcon: {
        height : 50,
        marginRight: 30
        
    },
    nav:{
        height:70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer:{
        positon: 'relative'
    },
    cartCount:{
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right:10,
        top:2
    }
}

export default NavBar;