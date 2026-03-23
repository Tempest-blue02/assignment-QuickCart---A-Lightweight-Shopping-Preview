import React from 'react';

const Header = ({ totalItems, isCartOpen, setIsCartOpen }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>QuickCart</h1>
        <div className="cart-icon-container">
          <button
            className={`cart-toggle ${isCartOpen ? 'open' : ''}`}
            onClick={() => setIsCartOpen(!isCartOpen)}
            aria-label="Toggle cart"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 3h2l.4 2M7 13h10.8l1.7 5H6M7 13L5.4 5M20.4 19C21.4914 19 22 18.4914 22 17.5C22 17.083 21.842 16.696 21.5549 16.4142L17.5549 12.4142C17.2678 12.127 17 11.7123 17 11.25C17 10.8358 17.214 10.4505 17.5528 10.2121L20.5528 7.21211C21.1474 6.61756 21.1474 5.68444 20.5528 5.08989C19.9582 4.49533 19.0251 4.49533 18.4305 5.08989L15.4305 8.08989C14.6378 8.88262 14 9.74903 14 10.75C14 12.5449 15.4551 14 17 14H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
