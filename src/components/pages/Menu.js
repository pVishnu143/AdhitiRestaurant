import React, { useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

const dishes = [
  {
    name: "Biryani",
    description: "Biryani is a popular dish of spiced meat and rice with flavorful spices.",
    image: "/images/biryani.webp",
    link: "/Biryani"
  },
  {
    name: "Chicken Curry",
    description: "Chicken curry is a beloved dish known for its rich, aromatic sauce and tender, comforting flavors.",
    image: "/images/chicken-curry.webp",
    link: "/Chickencurry"
  },
  {
    name: "Roti",
    description: "Roti is a soft, unleavened flatbread made from whole wheat flour, widely enjoyed as a staple in South Asian cuisine.",
    image: "/images/butter-roti.webp",
    link: "/Roti"
  },
  {
    name: "Mutton Curry",
    description: "Mutton curry is a hearty dish with tender pieces of mutton in a rich, spiced gravy.",
    image: "/images/mutton-curry.webp",
    link: "/Muttoncurry"
  },
  {
    name: "Fish Curry",
    description: "It's a flavorful dish made by simmering fish in a rich blend of aromatic spices.",
    image: "/images/fish-curry.webp",
    link: "/Fishcurry"
  },
  {
    name: "Nonveg-Starters",
    description: "Non-vegetarian starters offer a delicious variety of flavors, textures, and spices.",
    image: "/images/starters.webp",
    link: "/Nonvegstarters"
  },
  {
    name: "Plain Rice",
    description: "Plain rice is a staple food made by simply boiling or steaming rice grains.",
    image: "/images/Plane rice 1.jpg",
    link: "/Rices"
  },
  {
    name: "Paneer Butter Masala",
    description: "A rich and creamy curry made with paneer cooked in butter with aromatic spices.",
    image: "/images/panner.jpg",
    link: "/Paneeritems"
  },
  {
    name: "Fried Rice",
    description: "A flavorful dish made by stir-frying cooked rice with vegetables and seasonings.",
    image: "/images/fried-rice.webp",
    link: "/FriedRice"
  },
  {
    name: "Veg-Starters",
    description: "Starters offer a delicious variety of flavors, textures, and spices.",
    image: "/images/paneer-tikka.webp",
    link: "/Veg-starters"
  },
  {
    name: "Finger Millet",
    description: "Finger millet is a nutrient-rich grain known for its high fiber content.",
    image: "/images/ragi-mudda.webp",
    link: "/Milletlump"
  },
  {
    name: "Curd Rice",
    description: "Curd rice is a popular South Indian comfort meal made with soft cooked rice and yogurt.",
    image: "/images/curd-rice.webp",
    link: "/Curdrice"
  }
];

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDishes = dishes.filter(dish =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div>
          <section className="gallery" id="gallery">
              <u>
                  <h1 className="heading">
                      <h3>N O N - V E G & V E G</h3>
                  </h1>
              </u>
              <input 
                  type="text" 
                  placeholder="Search for dishes..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="search-input" 
              />
              <br /><br />
              <div className="box-container">
                  {filteredDishes.map((dish, index) => (
                      <div className='name' key={index}>
                          <div className="box">
                              <figure>
                                  <img src={dish.image} alt={dish.name} />
                              </figure>
                              <div className="content">
                                  <h3>{dish.name}</h3>
                                  <p>{dish.description}</p>
                                  <Link to={dish.link} style={{ textDecoration: 'none' }}>
                                      <button className="btn">See more</button>
                                  </Link>
                              </div>
                          </div>
                          <figcaption>{dish.name}</figcaption>
                      </div>
                  ))}
              </div>
          </section>
      </div>
  );
}

export default Menu;