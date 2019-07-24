import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InputButton from '../../input-button';
import CartItem from '../item';
import { selectItemsInCart } from '../../../redux/cart/reducer';
import { toggleCart } from '../../../redux/cart/actions';

const CartDropdown = ({ items, history, toggleCart }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.length ? (
        items.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-cart">No items in cart</span>
      )}
    </div>
    <InputButton
      isDisabled={items.length ? false : true}
      onClick={() => {
        history.push('/checkout');
        toggleCart();
      }}
    >
      Check Out
    </InputButton>
  </div>
);

const mapStateToProps = state => ({ items: selectItemsInCart(state) });

export default withRouter(
  connect(
    mapStateToProps,
    { toggleCart }
  )(CartDropdown)
);
