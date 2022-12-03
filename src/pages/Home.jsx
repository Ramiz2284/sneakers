import Card from "../components/Card";
import AppContext from '../components/useContext/AppContext';
import React from 'react'

function Home({ items,
    serchValue,
    setSerchValue,
    onChengeSerchInput,
    onAddFavorits,
    onAddToCard }) {

    const { cartItems, favorites } = React.useContext(AppContext);




    return (
        <div className="content">
            <div className="title">
                <h1>{serchValue ? `Поиск по запросу: "${serchValue}"` : 'Все кросовки'}</h1>
                <div className="input-wr">
                    <img src="/img/serch.svg" alt="icon" />
                    {serchValue && <img className="serchClear" onClick={() => setSerchValue('')} src="/img/cart-delete.svg" alt="Close" />}
                    <input onChange={onChengeSerchInput} value={serchValue} type="text" className="title-input" placeholder="Поиск..." />
                </div>
            </div>

            <div className="sneakers">
                {items.filter(item => item.title.toLowerCase().includes(serchValue.toLowerCase()))
                    .map((item) => (
                        <Card
                            added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
                            favorited={favorites.some(obj => Number(obj.id) === Number(item.id))}
                            key={item.url}
                            title={item.title}
                            id={item.id}
                            price={item.price}
                            imgUrl={item.url}
                            onFavorits={(obj) => onAddFavorits(obj)}
                            onPlus={(obj) => onAddToCard(obj)}

                        />
                    ))}
            </div>

        </div>
    );
}

export default Home;