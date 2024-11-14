import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css'
function Rices() {
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
                    <img src="/images/Plane rice 1.jpg" alt="plainrice" />
                    
                    <div className="content1">
                        <h3>Plain Rice</h3>
                        <p>Plain Rice is Simple steamed rice.</p>
                        <h4>₹99</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'plain Rice', price: 99 })}>Order</button>
                    </div>
                </div><br/><br/>

            <div className="box2">
                    <img src="/images/Jeera rice 1.jpg" alt="jeerarice" />
                    
                    <div className="content2">
                        <h3>Jeera Rice</h3>
                        <p>Jeera Rice is a Cumin-flavored rice with coriander and turmeric.</p>
                        <h4>₹110</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Jeera Rice', price: 110 })}>Order</button>
                    </div>
                </div><br/><br/>
</div>
  )
}

export default Rices