import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
//import cartRequest from "../cartRequest"
import "../styles/cart.css";

const Cart = ({ cart, setCart, setRenderState, handleChange }) => {
  const [price, setPrice] = useState(0);


  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.qty * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const handleCart = e => {
      e.preventDefault();

      const data = cart
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "key": "1" },
        body: JSON.stringify(data)
      };
      fetch("http://localhost:9000/api/cart", requestOptions)

      setRenderState("payment")
  };

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.qty}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div className="pricetag">
            <span>${item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total cart ammount</span>
        <span>${price}</span>
        { cart.length > 0 &&
            // <button className="payment" onClick={() => handleCart()}>Payment</button>
            <div className="payment" onClick={handleCart}>
                <span>Payment</span>
            </div>
        }
      </div>
    </article>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
  })).isRequired,
  setCart: PropTypes.func.isRequired,
  setRenderState: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Cart;
