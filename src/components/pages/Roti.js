import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css'
function Roti() {

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
                    <img src="/images/pulka 1.jpg" alt="pulka" />
                    
                    <div className="content1">
                        <h3>Pulka</h3>
                        <p>Phulka is a thin, soft Indian flatbread, cooked on a griddle and then directly over a flame to puff up, creating light layers.</p>
                        <h4>₹5</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Pulka', price: 5 })}>Order</button>
                    </div>
                </div><br/><br/>

            <div className="box2">
                    <img src="/images/Tandooriu roti 1.jpg" alt="tandooriroti" />
                    
                    <div className="content2">
                        <h3>Tandooriu roti</h3>
                        <p>Tandoori roti is a thick, chewy Indian flatbread, traditionally cooked in a clay oven (tandoor) for a smoky flavor and slightly charred edges.</p>
                        <h4>₹10</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Tandoori Roti', price: 10 })}>Order</button>
                    </div>
                </div><br/><br/>

                <div className="box1">
                    <img src="/images/Butter roti 1.jpg" alt="butterroti" />
                    
                    <div className="content1">
                        <h3>Butter roti</h3>
                        <p>Butter roti is a soft, whole wheat flatbread cooked on a griddle and brushed with melted butter for extra flavor and richness.</p>
                        <h4>₹15</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Butter Roti', price: 15 })}>Order</button>
                    </div>
                </div><br/><br/>

        <div className="box2">
                    <img src="/images/Butter Naan 1.jpg" alt="Butternaan" />
                 
                    <div className="content2">
                        <h3>Butter Naan</h3>
                        <p>Butter naan is a soft, leavened flatbread made from refined flour, typically cooked in a tandoor oven, and finished with a generous brush of melted butter for a rich, fluffy texture.</p>
                        <h4>₹25</h4>
                        <button className="btn1" onClick={() => handleOrderClick({ name: 'Butter Naan', price: 25 })}>Order</button>
                    </div>
                    </div><br/><br/>
</div>
  )
}

export default Roti