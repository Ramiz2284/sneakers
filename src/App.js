
import Overlay from "./components/Overlay";
import Header from "./components/Header";
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import Favorits from "./pages/Favorits";
import AppContext from "./components/useContext/AppContext";




function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [serchValue, setSerchValue] = useState('');
  const [favorites, setFavorites] = useState([]);



  useEffect(() => {

    async function fecthData() {
      const cartRespponse = await axios.get('https://63825c3d9842ca8d3ca76cc5.mockapi.io/cart');
      const favoritsRespponse = await axios.get('https://63825c3d9842ca8d3ca76cc5.mockapi.io/favorits');
      const itemsRespponse = await axios.get('https://63825c3d9842ca8d3ca76cc5.mockapi.io/items');



      setCartItems(cartRespponse.data);
      setItems(itemsRespponse.data);
      setFavorites(favoritsRespponse.data);


    }
    fecthData()



  }, []);

  const onAddToCard = (obj) => {

    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://63825c3d9842ca8d3ca76cc5.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));

      } else {
        axios.post('https://63825c3d9842ca8d3ca76cc5.mockapi.io/cart', obj);
        setCartItems([...cartItems, obj]);

      }

    } catch (error) {
      alert('');
    }

  };



  const delToCart = (obj) => {
    axios.delete(`https://63825c3d9842ca8d3ca76cc5.mockapi.io/cart/${obj.id}`);
    setCartItems((prev) => prev.filter(item => item.id !== obj.id));

  };

  const onAddFavorits = async (obj) => {


    try {
      if (favorites.find(item => item.id === obj.id)) {
        axios.delete(`https://63825c3d9842ca8d3ca76cc5.mockapi.io/favorits/${obj.id}`);
        setFavorites((prev) => prev.filter(item => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://63825c3d9842ca8d3ca76cc5.mockapi.io/favorits', obj);
        setFavorites((prev) => [...prev, data]);
      }

    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }



  };

  const onChengeSerchInput = (event) => {
    setSerchValue(event.target.value);
  }



  const [openCart, setOpenCart] = useState(false)




  return (

    <AppContext.Provider value={{ favorites, cartItems, items }}>

      <div className="wrapper ">
        {openCart ? < Overlay
          items={cartItems}
          closeCart={() => setOpenCart(false)}
          noRemuve={delToCart}

        /> : null}
        <Header
          openCartFun={() => setOpenCart(true)}
        />
        <div className="devider"></div>


        <Routes>
          <Route path="/" element=
            {<Home
              items={items}
              cartItems={cartItems}
              serchValue={serchValue}
              favorites={favorites}
              setSerchValue={setSerchValue}
              onChengeSerchInput={onChengeSerchInput}
              onAddFavorits={onAddFavorits}
              onAddToCard={onAddToCard}
            />} />
          <Route path="/Favorits" element={<Favorits
            items={favorites}
            onAddFavorits={onAddFavorits}
          />} />

        </Routes>

      </div>

    </AppContext.Provider >


  );

}

export default App;
