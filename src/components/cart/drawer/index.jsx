import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../item';
import InputButton from '../../input-button';
import { toggleCart, clearCart } from '../../../redux/cart/actions';
import { selectItemsInCart } from '../../../redux/cart/reducer';
import { selectTotalPriceInCart } from '../../../redux/cart/reducer';

const CartDrawer = ({
  isOpen,
  items,
  toggleCart,
  clearCart,
  total,
  history
}) => {
  return (
    <div className={`cart ${isOpen ? 'drawer-open' : ''}`}>
      <div className="close-drawer" onClick={toggleCart}>
        &#10008;
      </div>
      <div className="cart-items">
        {items.length ? (
          items.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-cart">No items in cart</span>
        )}
      </div>
      <div className="footer">
        <h3>Total: ${total}</h3>
        <InputButton
          isDisabled={items.length ? false : true}
          onClick={clearCart}
        >
          Clear Cart
        </InputButton>
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
    </div>
  );
};

const mapStateToProps = state => ({
  items: selectItemsInCart(state),
  total: selectTotalPriceInCart(state)
});

export default withRouter(
  connect(
    mapStateToProps,
    { toggleCart, clearCart }
  )(CartDrawer)
);
