import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css'
function Fishcurry() {
  const handleBack = () => {
    window.history.back();
  };
  const [selectedOrders, setSelectedOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('cart')) || [];
    setSelectedOrders(savedOrders);
  }, []);

  const handleOrderClick = (item) => {
    const updatedOrders = [...selectedOrders, item];
    setSelectedOrders(updatedOrders);

    localStorage.setItem('cart', JSON.stringify(updatedOrders));

    alert(`${item.name} has been Selected for order!`);
  };
  return (
    <div className="fulldiv">
         <button
        className="back-btn"
        onClick={handleBack}
        style={{ fontSize: '10px', top: '80px',position:'sticky'}}
      >
        &#8617;
      </button>

        <div className="box1">
                    <img src="/images/fish-curry.webp" alt="fish-curry" />
                    
                    <div className="content1">
                        <h3>Fish-Curry</h3>
                        <p>Fish Curry is processed as Spicy fish stew cooked in coconut-based gravy with Indian spices.</p>
                        <h4>₹259</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Fish Curry', price: 259 })}>Order</button>
                    </div>
                </div><br/><br/>

            <div className="box2">
                    <img src="/images/Fish fry 1.jpg" alt="Fish fry" />
                    
                    <div className="content2">
                        <h3>Fish fry</h3>
                        <p>Fish Fry: Crispy fried fish coated with spices, herbs, and lemon juice.</p>
                        <h4>₹229</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Fish fry', price: 229 })}>Order</button>
                    </div>
                </div><br/><br/>
</div>
  )
}

export default Fishcurry