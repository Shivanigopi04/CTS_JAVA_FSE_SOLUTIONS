import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  render() {
    const items = [
      { itemname: 'T-shirt', price: 499 },
      { itemname: 'Jeans', price: 999 },
      { itemname: 'Sneakers', price: 1499 },
      { itemname: 'Backpack', price: 799 },
      { itemname: 'Watch', price: 1299 }
    ];

    return (
      <div>
        <h2>Welcome to the Online Shopping Portal</h2>
        {items.map((item, index) => (
          <Cart key={index} itemname={item.itemname} price={item.price} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;
