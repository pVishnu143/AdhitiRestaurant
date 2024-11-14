import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css';

function Curdrice() {
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
      <button className="back-btn" onClick={() => window.history.back()} style={{ fontSize: '10px', top: '80px',position:'sticky' }}>
        &#8617;
      </button>

      <div className="box1">
        <img src="/images/Curd rice 1.jpg" alt="curdrice" />
        <div className="content1">
          <h3>Curd Rice</h3>
          <p>Also known as Yogurt Rice or Thayir Sadam, Curd Rice is a popular South Indian dish </p>
          <h4>₹149</h4>
      <button className="btn1" onClick={() => handleOrderClick({ name: 'Curd Rice', price: 149 })}>
            Order
          </button>
        </div>
      </div>
      <br />
      <br />

      <div className="box2">
        <img src="/images/CURD.jpg" alt="curd" />
        <div className="content2">
          <h3>Curd</h3>
          <p>CURD is a traditional dairy product made by fermenting milk with lactic acid bacteria, resulting creamy yogurt-like substance rich in probiotics.</p>
          <h4>₹49</h4>
            <button className="btn2" onClick={() => handleOrderClick({ name: 'Curd Rice', price: 49})}>
            Order
          </button>
        </div>
      </div>

      <br />
      <br />
      
    </div>
  );
}

export default Curdrice;
