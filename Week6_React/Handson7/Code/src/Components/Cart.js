import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
        <h3>Item: {this.props.itemname}</h3>
        <p>Price: ₹{this.props.price}</p>
      </div>
    );
  }
}

// Default Props (optional)
Cart.defaultProps = {
  itemname: 'Unknown Item',
  price: 0
};

export default Cart;
