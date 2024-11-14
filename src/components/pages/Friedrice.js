import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css'
function Friedrice () {
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
                    <img src="/images/veg-friedrice.jpg" alt="veg-friedrice" />
                    
                    <div className="content1">
                        <h3>Veg-Friedrice</h3>
                        <p>Veg Fried Rice is Mixed vegetables and spices with cooked rice.</p>
                        <h4>₹149</h4>
                          <button className="btn1" onClick={() => handleOrderClick({ name: 'Veg-friedrice', price: 149 })}>Order</button>
                    </div>
                </div><br/><br/> 

            <div className="box2">
                    <img src="/images/paneer-friedrice.jpg" alt="Paneer-friedrice" />
                    
                    <div className="content2">
                        <h3>Paneer-Friedrice</h3>
                        <p>Paneer Fried Riceis a mix of  Paneer, vegetables, and spices mixed with rice.</p>
                        <h4>₹179</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Paneer friedrice', price: 199 })}>Order</button>
                    </div>
                </div><br/><br/>

        <div className="box1">
                    <img src="/images/chicken-friedrice.jpg" alt="chicken-friedrice" />
                 
                    <div className="content1">
                        <h3>Chicken-Friedrice</h3>
                        <p>9. Chicken Fried Rice: Cooked chicken, vegetables, and spices mixed with rice.</p>  
                        <h4>₹199</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'chicken friedrice', price: 199 })}>Order</button>
                    </div>
                    </div><br/><br/>

        <div className="box2">
                    <img src="/images/Egg-friedrice.jpg" alt="Egg-friedrice" />
                    
                    <div className="content2">
                        <h3>Egg-Friedrice</h3>
                        <p>Egg Fried Rice: Scrambled eggs, vegetables, and spices mixed with rice.</p>
                        <h4>₹169</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Egg Fried rice', price: 169 })}>Order</button>
                    </div>
                </div><br/><br/>
</div>
  )
}

export default Friedrice