import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css'
function Paneeritems() {
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
                    <img src="/images/Shahi Paneer 1.jpg" alt="shahipaneer" />
                    
                    <div className="content1">
                        <h3>Shahi Paneer</h3>
                        <p>Shahi Paneeris made of Rich, creamy paneer curry with nuts and spices. </p>
                        <h4>₹229</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Shahi Paneer', price: 229 })}>Order</button>
                    </div>
                </div><br/><br/>

                <div className="box2">
                    <img src="/images/Panner butter masala 1.jpg" alt="buttermasala" />
                    
                    <div className="content2">
                        <h3>Panner butter masala</h3>
                        <p>Paneer Butter Masalais a Creamy paneer in spiced butter and tomato sauce.</p>
                        <h4>₹229</h4>
                        <button className="btn2" onClick={() => handleOrderClick({ name: 'Paneer butter masala', price: 229 })}>Order</button>
                    </div>
                </div><br/><br/>

        <div className="box1">
                    <img src="/images/paneer-curry.jpg" alt="paneercurry" />
                 
                    <div className="content1">
                        <h3>Paneer-curry</h3>
                        <p>Paneer Curry if made of Spiced paneer in tomato-based gravy.</p>
                        <h4>₹199</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Paneer curry', price: 199 })}>Order</button>
                    </div>
                    </div><br/><br/>

        <div className="box2">
                    <img src="/images/Kadai Paneer 1.jpg" alt="Biryani" />
                    
                    <div className="content2">
                        <h3>Kadai Paneer</h3>
                        <p>Khadi Paneeris made of Spicy paneer curry with yogurt and gram flour.</p> 
                        <h4>₹229</h4>
                        <button className="btn2" onClick={() => handleOrderClick({ name: 'kadai paneer', price: 229 })}>Order</button>
                    </div>
                </div><br/><br/>


</div>
  )
}

export default Paneeritems