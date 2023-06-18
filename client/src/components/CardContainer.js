import React, { useState } from 'react';
import Card from './Card';
import AddForm from './AddForm';

const CardContainer = () => {
  const [items, setItems] = useState([
     { name: "Kitchen Towel", description: 'Scott Kitchen Towel Rolls', price: 5, image: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13146286_XL1_20220802.jpg' },
     { name: "Airpods Gen 3", description: "Personalized Spatial Audio with dynamic head tracking places sounds all around you to create a three-dimensional listening experience for music, TV shows, movies, and more — immersing you in sounds from every direction so it feels like you're in your very own concert hall or theater", price: 169, image: 'https://www.rollingstone.com/wp-content/uploads/2021/10/DSC_0212.jpg?w=1600&h=900&crop=1' },
  ]);

  const handleAddItem = (newItem) => {
      setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (itemName) => {
      setItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
  };

  return (
    <div>
      <AddForm addItem={handleAddItem} />
      <div className="card-container">
        {items.map((item, index) => (
          <Card key={index} item={item} onDelete={handleDeleteItem}/>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
