import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css';

function Biriyani() {
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
        style={{ fontSize: '10px', top: '80px', position:'sticky'}}
      >
        &#8617;
      </button>

        <div className="box1">
                    <img src="/images/chicken-biryani.jpeg" alt="Biryani" />
                    
                    <div className="content1">
                        <h3>Fried Chicken-Biryani</h3>
                        <p>Biryani is a popular dish of spiced Chicken and rice. It's traditionally cooked with dum pukht rice and fried chicken,layering ingredients in a pot, flavorful dish.</p>
                       <h4>₹249</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Fried chicken-Biryani', price: 249 })}>Order</button>
                    </div>
                </div><br/><br/>

            <div className="box2">
                    <img src="/images/mutton biryani.jpeg" alt="Biryani" />
                    
                    <div className="content2">
                        <h3>Mutton Biryani</h3>
                        <p>Biryani is a popular dish of spiced meat and rice. It's traditionally cooked using the dum pukht method,layering ingredients in a pot, flavorful dish.</p>
                       <h4>₹259</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Mutton Biryani', price: 259 })}>Order</button>
                    </div>
                </div><br/><br/>

                <div className="box1">
                    <img src="/images/Paneer Biryani.jpeg" alt="Biryani" />
                    
                    <div className="content1">
                        <h3>Paneer Biryani</h3>
                        <p>Biryani is a popular dish of spiced paneer and rice. It's layering ingredients in a pot, flavorful dish.</p>
                        <h4>₹199</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Paneer Biryani', price: 199 })}>Order</button>
                    </div>
                </div><br/><br/>

        <div className="box2">
                    <img src="/images/Egg Biryani.jpeg" alt="Biryani" />
                 
                    <div className="content2">
                        <h3>Egg Biryani</h3>
                        <p>Biryani is a popular dish of spiced Egg and rice. It's layering ingredients in a pot, flavorful dish.</p>
                        <h4>₹199</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Egg Biryani', price: 199 })}>Order</button>
                    </div>
                    </div><br/><br/>

        <div className="box1">
                    <img src="/images/Vegetable Biryani.jpeg" alt="Biryani" />
                    
                    <div className="content1">
                        <h3>Vegetable Biryani</h3>
                        <p>Biryani is a popular dish of spiced Vegetables and rice. Its layering ingredients in a pot, flavorful dish.</p>
                       <h4>₹149</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Vegetable Biryani', price: 149 })}>Order</button>
                    </div>
                </div><br/><br/>

                <div className="box2">
                    <img src="/images/Prawn Biryani.jpeg" alt="Biryani" />
                 
                    <div className="content2">
                        <h3>Prawns Biryani</h3>
                        <p>Biryani is a popular dish of spiced Prawns and rice. It's traditionally cooked using the dum pukht method,layering ingredients in a pot, flavorful dish.</p>
                        <h4>₹249</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Prawns Biryani', price: 249 })}>Order</button>
                    </div>
                    </div><br/><br/>

        <div className="box1">
                    <img src="/images/Fish Biryani.jpeg" alt="Biryani" />
                    
                    <div className="content1">
                        <h3>Fish Biryani</h3>
                        <p>Biryani is a popular dish of spiced fish and rice. Its layering ingredients in a pot, flavorful dish.</p>
                        <h4>₹279</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Fish Biryani', price: 279 })}>Order</button>
                    </div>
                </div><br/><br/>
</div>
  )
}

export default Biriyani
