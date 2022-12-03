import StylesHeader from './Header.module.sass';
import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../useContext/AppContext';
// import { useState } from 'react';



function Header(props) {



    const { cartItems, favorites } = React.useContext(AppContext);

    const cartPieces = Object.keys(cartItems).length;
    const favoritesLenght = Object.keys(favorites).length;


    const cartItemsSumm = cartItems.reduce((sum, obj) => sum + obj.price, 0);




    return (
        <>
            <header>
                <Link to="/">
                    <div className={StylesHeader.headerLeft}>
                        <img width={40} height={40} src="/img/logo.svg" alt="Logo" />
                        <div className={StylesHeader.headerInfo}>
                            <h3>React sneakers</h3>
                            <p>Магазин лучших кросовок</p>
                        </div>
                    </div>
                </Link>
                <ul className={StylesHeader.headerRight}>
                    <li onClick={props.openCartFun}>
                        <div className={StylesHeader.cartPiecesWrap}>
                            <div className={StylesHeader.cartPieces}>{cartPieces}</div>
                            <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
                        </div>
                        <span className={StylesHeader.headerPrice}>{cartItemsSumm} tl.</span>
                    </li>
                    <li>
                        <Link to="/favorits">
                            <div className={StylesHeader.cartPiecesWrap}>
                                <div className={StylesHeader.favoritsPieces}>{favoritesLenght}</div>
                                <img width={18} height={18} src="/img/favorits.svg" alt="favorits" />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg" alt="user" />
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header;