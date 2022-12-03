import CardStyle from './Card.module.sass';
import { useState } from 'react';
import React from 'react'



function Card({ id, onFavorits, price, title, imgUrl, onPlus, favorited = false, added = false }) {


    const [btnCheked, setBtnCheked] = useState(added);
    const [isFavorits, setIsFavorits] = useState(favorited);


    const onClickFavorits = () => {
        onFavorits({ id, price, title, imgUrl });
        setIsFavorits(!isFavorits);
    }
    const cheked = () => {
        onPlus({ id, price, title, imgUrl });
        setBtnCheked(!btnCheked);
    }










    return (
        <>

            <div className={CardStyle.card}>
                <div className={CardStyle.Favorite}>
                    <img onClick={onClickFavorits} src={isFavorits ? "/img/heard-like.svg" : "/img/heard-unlike.svg"} alt="Unlike" />
                </div>
                <img src={imgUrl} alt="Мужские Кроссовки" />
                <h5>
                    {title}
                </h5>
                <div className={CardStyle.tWr}>
                    <div className={CardStyle.pWr}>
                        <span>Цена:</span>
                        <b>{price} руб.</b>
                    </div>
                    <button className={CardStyle.button}>
                        <img onClick={cheked} className={CardStyle.plus} src={btnCheked ? "/img/btn-cheked.svg" : "/img/plus.svg"} alt="add" />
                    </button>
                </div>
            </div>

        </>
    )
}

export default Card;