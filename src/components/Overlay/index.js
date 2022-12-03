import React from 'react'
import OverlayStyle from './Overlay.module.sass';
import AppContext from '../useContext/AppContext';

function Overlay({ noRemuve, closeCart, items = [] }) {
    const { cartItems } = React.useContext(AppContext);

    const cartItemsSumm = cartItems.reduce((sum, obj) => sum + obj.price, 0);

    return (
        <>
            <div className={OverlayStyle.overlay}>
                <div className={OverlayStyle.cartPopap}>
                    <div className={OverlayStyle.cartTitleWrap}>
                        <div className={OverlayStyle.cartTitle}>
                            Корзина
                        </div>
                        <img onClick={closeCart} className={OverlayStyle.cartDelete} src="/img/cart-delete.svg" alt="Close" />
                    </div>

                    <div className={OverlayStyle.cartItemWrap}>
                        {items.map((obj) => (
                            <div key={obj.id} className={OverlayStyle.cartItem} >
                                <img src={obj.imgUrl} alt="airmax" />
                                <div >
                                    <p>{obj.title}</p>
                                    <span>{obj.price} руб.</span>
                                </div>
                                <img onClick={() => noRemuve(obj)} className={OverlayStyle.cartDelete} src="/img/cart-delete.svg" alt="Delete" />
                            </div>
                        ))}

                    </div>

                    <div className={OverlayStyle.cartTotalWrap}>
                        <div className={OverlayStyle.totalWrap}>
                            <div className={OverlayStyle.total}>Итого:</div>
                            <div className={OverlayStyle.dat}></div>
                            <div className={OverlayStyle.price}>{cartItemsSumm} руб. </div>
                        </div>
                        <div className={OverlayStyle.totalWrap}>
                            <div className={OverlayStyle.total}>Налог 5%: </div>
                            <div className={OverlayStyle.dat}></div>
                            <div className={OverlayStyle.price}>{cartItemsSumm * 0.05} руб.</div>
                        </div>
                    </div>

                    <div className={OverlayStyle.cartOrderBtn}>
                        <div className={OverlayStyle.cartBtnWrap}>
                            <div>
                                Оформить заказ
                            </div>
                            <img src="/img/left.svg" alt="left" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Overlay;