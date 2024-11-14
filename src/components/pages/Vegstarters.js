import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css'
function Vegstarters() {
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
                    <img src="/images/Panner tikka 1.jpg" alt="ptikka" />
                    
                    <div className="content1">
                        <h3>Panner tikka</h3>
                        <p>Paneer Tikka is a Marinated paneer grilled to perfection.</p>
                        <h4>₹139</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Paneer Tikka', price: 139 })}>Order</button>
                    </div>
                </div><br/><br/>

            <div className="box2">
                    <img src="/images/Paneer Tikka Masala 1.jpg" alt="ptikkamasala" />
                    
                    <div className="content2">
                        <h3>Paneer Tikka Masala</h3>
                        <p>Paneer Tikka Masalais a Creamy tomato-based curry with grilled paneer.</p>
                        <h4>₹149</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Paneer tikka masala', price: 149 })}>Order</button>
                    </div>
                </div><br/><br/>

                <div className="box1">
                    <img src="/images/Paneer 65 1.jpg" alt="paneer65" />
                    
                    <div className="content1">
                        <h3>Paneer 65</h3>
                        <p>Paneer 65 is a Spicy paneer stir-fry with herbs and chili peppers.</p>
                        <h4>₹149</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Paneer 65', price: 149 })}>Order</button>
                    </div>
                </div><br/><br/>

        <div className="box2">
                    <img src="/images/gobi-manchurian.webp" alt="Biryani" />
                 
                    <div className="content2">
                        <h3>Gobi-manchurian</h3>
                        <p>Gobi Manchurian is aCrispy cauliflower fritters in spicy Manchurian sauce.</p>
                        <h4>₹159</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Gobi manchurian', price: 159 })}>Order</button>
                    </div>
                    </div><br/><br/>
</div>
  )
}

export default Vegstarters