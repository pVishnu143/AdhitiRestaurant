import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css'
function Muttoncurry() {
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
                    <img src="/images/mutton-curry.webp" alt="Mutton-curry" />
                    
                    <div className="content1">
                        <h3>Mutton-Curry</h3>
                        <p>Mutton curry is a hearty, flavorful dish made with tender pieces and  often enriched with yogurt or coconut for a deep, rich taste.</p>
                        <h4>₹269</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Mutton curry', price: 269 })}>Order</button>
                    </div>
                </div><br/><br/>

            <div className="box2">
                    <img src="/images/Mutton paya 1.jpg" alt="Mutton paya" />
                    
                    <div className="content2">
                        <h3>Mutton Paya</h3>
                        <p>Mutton Paya is a flavorful South Asian stew made with meat in aromatic spices and herbs, rich in protein </p>
                        <h4>₹259</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Mutton paya', price: 259 })}>Order</button>
                    </div>
                </div><br/><br/>
</div>
  )
}

export default Muttoncurry