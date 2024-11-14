import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css'
function Prawncurry() {
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
        style={{ fontSize: '10px', top: '80px'}}
      >
        &#8617;
      </button>

        <div className="box1">
                    <img src="/images/Prawn curry 1.jpg" alt="prawncurry" />
                    
                    <div className="content1">
                        <h3>Prawn Curry</h3>
                        <p>Biryani is a popular dish of spiced meat and rice that originated in Persia. It's traditionally cooked using the dum pukht method,layering ingredients in a pot, flavorful dish.</p>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Prawn curry', price: 259 })}>Order</button>
                    </div>
                </div><br/><br/>

            <div className="box2">
                    <img src="/images/prawn fry 1.jpg" alt="prawnfry" />
                    
                    <div className="content2">
                        <h3>Prawn Fry</h3>
                        <p>Biryani is a popular dish of spiced meat and rice that originated in Persia. It's traditionally cooked using the dum pukht method,layering ingredients in a pot, flavorful dish.</p>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Prawn fry', price: 239 })}>Order</button>
                    </div>
                </div><br/><br/>
</div>
  )
}

export default Prawncurry