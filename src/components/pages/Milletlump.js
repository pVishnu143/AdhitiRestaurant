import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css'
function Milletlump() {

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
                    <img src="/images/ragi-mudda.webp" alt="ragi" />
                    
                    <div className="content1">
                        <h3>Millet Lump(Ragi Mudda)</h3>
                        <p>Millet Lump (Bajra or Jowar): Nutritious millet dumplings, often served with gravy.</p>
                        <h4>₹169</h4>
                         <button className="btn1" onClick={() => handleOrderClick({ name: 'Millet lump', price: 169 })}>Order</button>
                    </div>
                </div><br/><br/>

            {/* <div className="box2">
                    <img src="/images/ragi-mudda.webp" alt="ragi1" />
                    
                    <div className="content2">
                        <h3>Ragi Mudda</h3>
                        <p>Biryani is a popular dish of spiced meat and rice that originated in Persia. It's traditionally cooked using the dum pukht method,layering ingredients in a pot, flavorful dish.</p>
                        <button className="btn2">Order</button>
                    </div>
                </div><br/><br/> */}
</div>
  )
}

export default Milletlump