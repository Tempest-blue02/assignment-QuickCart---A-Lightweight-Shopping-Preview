
// CartSidebar.jsx
import React from 'react';
import CartItem from './CartItem';

const CartSidebar = ({
  isOpen,
  cart,
  totalItems,
  totalPrice,
  updateQuantity,
  removeFromCart,
  setIsCartOpen
}) => {
  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button
          className="close-cart-btn"
          onClick={() => setIsCartOpen(false)}
        >
          ×
        </button>
      </div>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p>Add some products to get started!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="summary-row">
                <span>Total Items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="summary-row total">
                <span>Total Price:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button className="checkout-btn" disabled={cart.length === 0}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
