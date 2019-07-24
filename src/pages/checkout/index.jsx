import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectItemsInCart } from '../../redux/cart/reducer';
import { selectTotalPriceInCart } from '../../redux/cart/reducer';

const Checkout = ({ items, total }) => (
  <div className="checkout">
    <div className="header-row">
      <div className="header">
        <span>Product</span>
      </div>
      <div className="header">
        <span>Name</span>
      </div>
      <div className="header">
        <span>Quantity</span>
      </div>
      <div className="header">
        <span>Price</span>
      </div>
      <div className="header">
        <span>Remove</span>
      </div>
    </div>
    {items.map(item => (
      <p key={item.name}>{item.name}</p>
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectItemsInCart,
  total: selectTotalPriceInCart
});

export default connect(mapStateToProps)(Checkout);
