import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css'
function Chickencurry() {
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
                    <img src="/images/chicken curry 1.jpg" alt="Chicken curry" />
                    <div className="content1">
                        <h3>Chicken Curry</h3>
                        <p>Chicken curry is a flavorful dish made with chicken pieces simmered in a spiced gravy and served with Rice and Roti</p>
                        <h4>₹259</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Chicken curry', price: 259 })}>Order</button>
                    </div>
                </div><br/><br/>

            <div className="box2">
                    <img src="/images/Chicken Tikka Masala 1.jpg" alt="ChickenTikkaMasala" />
                    
                    <div className="content2">
                        <h3>Chicken Tikka Masala</h3>
                        <p>
                        Chicken Tikka Masala features marinated grilled chicken pieces in a creamy, mildly spiced tomato-based sauce, blending tangy and savory flavors.</p>
                        <h4>₹269</h4>
                         <button className="btn1" onClick={() => handleOrderClick({ name: 'Chicken tikka masala', price: 269 })}>Order</button>
                    </div>
                </div><br/><br/>
</div>
  )
}

export default Chickencurry