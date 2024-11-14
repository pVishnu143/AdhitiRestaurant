import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './about.css';

function Home() {
    const [isReservationOpen, setIsReservationOpen] = useState(false);
    const [reservationData, setReservationData] = useState({
        name: '',
        date: '',
        time: '',
        guests: 1,
        tableno:1
    });

    const navigate=useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservationData({
            ...reservationData,
            [name]: value
        });
    };

    const handleReserveTable = (e) => {
        e.preventDefault();
        alert(`Reservation confirmed for ${reservationData.name} on 
            ${reservationData.date} at ${reservationData.time} 
            for ${reservationData.guests} guests.`);
        setIsReservationOpen(false);
        navigate('/Menu');
    };

    const today = new Date().toISOString().split('T')[0];

    const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return (
        <div className='forback'>
        <div className="home">
            <div className='hero1'
             style={{ backgroundImage: 'url("/images/welcome.jpeg")',
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat', 
                    backdropFilter: 'blur(3px)',
                     }}
                >
            <header className="hero">
                <h1>WELCOME</h1>
                <p>Your favorite place for delicious food.</p>
                <button className="reserve-button" onClick={() => setIsReservationOpen(true)}>Reserve a Table</button>
            </header>
            </div>
            
         {isReservationOpen && (
            <div className="reservation-form">
            <h2>Reserve a Table</h2>
    <form onSubmit={handleReserveTable}>
    <label htmlFor="name">Name:</label>
    <input
        type="text"
        id="name"
        name="name"
        value={reservationData.name}
        placeholder="Enter Name"
        onChange={handleChange}
        required
    />

    <div className="grid-container">
        <div className="grid-item">
            <label htmlFor="date">Date:</label>
            <input
                type="date"
                id="date"
                name="date"
                value={reservationData.date}
                min={today}
                onChange={handleChange}
                required
            />
        </div>

        <div className="grid-item">
            <label htmlFor="time">Time:</label>
            <input
                type="time"
                id="time"
                name="time"
                value={reservationData.time}
                min={reservationData.date === today ? currentTime : "00:00"}
                onChange={handleChange}
                required
            />
        </div>

        <div className="grid-item">
            <label htmlFor="guests">Number of Guests:</label>
            <input
                type="number"
                id="guests"
                name="guests"
                value={reservationData.guests}
                onChange={handleChange}
                min="1"
                required
            />
        </div>

        <div className="grid-item">
            <label htmlFor="tableno">Table No:</label>
            <input
                type="number"
                id="tableno"
                name="tableno"
                value={reservationData.tableno}
                onChange={handleChange}
                min="1"
                max="10"
                required
            />
        </div>
    </div>

    <button type="submit" className='conform'>Confirm Reservation</button>
    <button type="button" className='cancel' onClick={() => setIsReservationOpen(false)}>Cancel</button>
</form>

                </div>
            )}
        </div>
        <br/><br/>

        <div class="about-container">
    <section class="about-section">
        <h1 class="about-heading">About Us</h1>
        <p class="about-description">
            Welcome to Athidi Restaurant, where we serve delicious food made with love and passion. Our mission is to provide a memorable dining experience through exquisite dishes and exceptional service.
        </p>
    </section> 
    <br/><br/>

    <section class="our">
        <div class="mission-section">
            <img src="/images/mutton biryani.jpeg" alt="mutton"/>
            <p class="mission-description">
                Our mission is to create a unique dining experience for every guest, offering fresh and high-quality.
            </p> 
        </div>

        <div class="values-section">
            <img src="/images/paneer-tikka.webp" alt="paneer"/>
            <p class="mission-description">
            To support local farmers and producers by sourcing ingredients locally,relations and sustainability.</p>
        </div>
        <div class="mission-section">
            <img src="/images/mutton-curry.webp" alt="curry"/>
            <p class="mission-description">
            Creative and dynamic work environment that inspires our team to deliver the best possible dining experience.
            </p> 
        </div>
        <div class="values-section">
            <img src="/images/curd-rice.webp" alt="rice"/>
            <p class="mission-description">
            To prioritize customer feedback, our menu and services to meet and exceed customer expectations.  </p>
        </div>
    </section>
    <br /><br />

    <section className="team-section">
    <h2 className="team-heading">Meet Our Team</h2>
      <div className="team-container">
      <div className="team-member">
      {/* <img src="/images/chef1.jpg" alt="Chef 1" className="team-photo" /> */}
      <h3 className="team-member-name">Bavani</h3>
      <p className="team-member-role">Head Chef</p>
      </div>

      <div className="team-member">
      {/* <img src="/images/manager.jpg" alt="Manager" className="team-photo" /> */}
      <h3 className="team-member-name">Deelip</h3>
      <p className="team-member-role">Restaurant Manager</p>
      </div>

      </div>
    </section>
    </div>
        <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Athidi Restaurant. All Rights Reserved.</p>
                    <div className="footer-links">
                        <a href="/home">About Us</a> | 
                        <a href="/contact">Contact</a> |
                        <a href="/home">Privacy Policy</a>
                    </div>
                </div>
            </footer>
            
        </div>
    );
}

export default Home;
