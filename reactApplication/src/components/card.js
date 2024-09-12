import React from "react";
import PropTypes from 'prop-types';

const Cards = ({ item, handleClick }) => {
  const { name, description, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{description}</p>
        <p>Price - ${price}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

Cards.propTypes = {
  item: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Cards;

// id, name, description, price, img
