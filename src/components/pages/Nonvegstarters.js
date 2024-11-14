import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css'
function Nonvegstarters() {
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
                    <img src="/images/Tandoori chicken 1.jpg" alt="Tandoorichicken" />
                    
                    <div className="content1">
                        <h3>Tandoori chicken</h3>
                        <p>Marinated chicken roasted in a clay oven (tandoor) with yogurt and spices.</p>
                        <h4>₹189</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Tandoori chicken', price: 189 })}>Order</button>
                    </div>
                </div><br/><br/>

            <div className="box2">
                    <img src="/images/prawn fry 1.jpg" alt="Prawnfry" />
                    
                    <div className="content2">
                        <h3>Prawn Fry</h3>
                        <p>Shrimp sautéed with garlic, ginger, and spices, often served with lemon.</p>
                        <h4>₹239</h4>
                        <button className="btn2" onClick={() => handleOrderClick({ name: 'Prawn fry', price: 239 })}>Order</button>
                    </div>
                </div><br/><br/>

                <div className="box1">
                    <img src="/images/mutton fry 1.jpg" alt="muttonfry" />
                    
                    <div className="content1">
                        <h3>Mutton Fry</h3>
                        <p>Tender mutton cooked with onions, tomatoes, and spices, often served with rice</p>
                        <h4></h4>₹239
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Mutton fry', price: 239 })}>Order</button>
                    </div>
                </div><br/><br/>

        <div className="box2">
                    <img src="/images/Fish fry 1.jpg" alt="Fishfry" />
                 
                    <div className="content2">
                        <h3>Fish Fry</h3>
                        <p>Crispy fried fish coated with spices, herbs, and lemon juice.</p>
                        <h4>₹229</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Fish fry', price: 229 })}>Order</button>
                    </div>
                    </div><br/><br/>

        <div className="box1">
                    <img src="/images/Chicken tikka 1.jpg" alt="Chickentikka" />
                    
                    <div className="content1">
                        <h3>Chicken Tikka</h3>
                        <p> Marinated chicken grilled or baked with yogurt, spices, and herbs.</p>
                        <h4>₹199</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Chicken tikka', price: 199 })}>Order</button>
                    </div>
                </div><br/><br/>

                <div className="box2">
                    <img src="/images/Chicken popcorn 1.jpg" alt="Chickenpopcorn" />
                 
                    <div className="content2">
                        <h3>Chicken Popcorn</h3>
                        <p>Crispy fried chicken bites tossed in spicy sauce and herbs</p>
                        <h4>₹199</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Chicken popcorn', price: 199 })}>Order</button>
                    </div>
                    </div><br/><br/>

        <div className="box1">
                    <img src="/images/Chicken 65 1.jpg" alt="Chicken65" />
                    
                    <div className="content1">
                        <h3>Chicken 65</h3>
                        <p> It is a spicy, deep-fried chicken recipe that has gained widespread acclaim across the country.</p>
                        <h4>₹239</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Chicken 65', price: 239 })}>Order</button>
                    </div>
                </div><br/><br/>
</div>
  )
}

export default Nonvegstarters
