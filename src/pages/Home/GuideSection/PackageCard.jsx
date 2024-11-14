import React from 'react';
import {useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const PackageCard = ({ image, title, type, price }) => {
  const navigate = useNavigate();

  const handleWishlist = () => {
    // Implement the wishlist functionality here
    alert(`${title} added to wishlist!`);
  };

  const viewPackage = () => {
    navigate('/package-details');
  };

  return (
    <div className="package-card">
      <div className="package-image">
        <img src={image} alt={title} />
        <FaHeart onClick={handleWishlist} className="wishlist-icon" />
      </div>
      <div className="package-details">
        <h4>{title}</h4>
        <p>Type: {type}</p>
        <p>Price: {price}</p>
        <button onClick={viewPackage}>View Package</button>
      </div>
    </div>
  );
};

export default PackageCard;
