import React, { useState } from 'react';

const AYURVEDA = 'AYURVEDA';
const SALON = 'SALON';
const SPA = 'SPA';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    
    {
        category: SALON,
        name:'Hair Root Touchup',
        cost: 4.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdTOrUxvQ2QQ2Q2VXI0k_ZsxcRzMzxat7pNw&usqp=CAU',
    },
    {
        category: SALON,
        name:'Hair Nourish/Repair',
        cost: 4.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuimaeo50PocsZx0Z8OvKULOa5ocPwkFov3Q&usqp=CAU',
    },
    {
      category: AYURVEDA,
      name: 'Abhyanga',
      cost: 16.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNe_Ua9IzuMGALQgLFjxEOt-2fwr1XGMo8wQ&usqp=CAU',
    },
    
   {
        category: AYURVEDA,
        name: 'Udwarthanam',
        cost: 15.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScYs-EbQTHZYlFJMbnGtDo4REhTnzckcf5-w&usqp=CAU',
    },
    {
        category: SPA,
        name: 'fish massage',
        cost: 30.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwV4OdD8Hx9brd_oiaJWKBx9mpTkS0bnZVWQ&usqp=CAU'
      },
      {
        category: SPA,
        name: 'Head massage',
        cost: 20.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPO-gKalqkbHYXc0msRmKlEsXQQ7L1Mt7X0Q&usqp=CAU'
      },
     
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(AYURVEDA);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={AYURVEDA}>{AYURVEDA}</option>
        <option value={SALON}>{SALON}</option>
        <option value={SPA}>{SPA}</option>
      </select>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
        }
      