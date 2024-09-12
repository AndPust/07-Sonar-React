import React, { useState } from "react";
import PropTypes from 'prop-types';
// import useItems from "../itemHook";
import Cards from "./card";
import "../styles/store.css";

const Store = ({ handleClick, items }) => {
  return (
    <section>
      {items.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

Store.propTypes = {
  handleClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    // Add other item properties here, for example:
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // ... other properties
  })).isRequired,
};

export default Store;
