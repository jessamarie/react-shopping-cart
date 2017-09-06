import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import CartItem from './CartItem'

const items = [
  {
    imgUrl: 'https://scene7-secure.targetimg1.com/is/image/Target/39598742?wid=90&hei=90',
    name: 'Gaiam Kids Yoga Headband - Pink/Blue',
    price: 27.92
  },
  {
    imgUrl: 'https://scene7-secure.targetimg1.com/is/image/Target/12953828?wid=90&hei=90',
    name: 'Gaiam Kids Yoga Headband - Pink/Blue',
    price: 27.92
  }
]

class ShoppingCart extends React.Component {

  constructor () {
    super()
    this.state = {
      subtotal: 0
    }
  }

//   Build a Shopping Cart component that:
//
// Allows the user to add a new item to the cart
// Each item has a name, cost and quantity
// Displays each item in the cart, as well as the calculated total of all items cost
// Allows the user to update the quantity of each item in the cart
// Allows the user to remove an item from the cart
// Allows the user to wrap an item as a gift for an incurred cost
// Calculates the sales tax and adds it to the subtotal of the items to be purchased
// Bonus:
//
// Allows the user to enter a unique promo that applies a pre-designated discount off the total of the cart
// Your cart should be initialized with a list of predetermined promo codes, and only valid inputed codes receive the discount
// No promo can be used more than once

  render () {
    var cartItems = items.map((item, index) => {
      return (
        <CartItem key={index} imgUrl={item.imgUrl} name={item.name} price={item.price} />
      )
    })
    return (
      <div className='cart'>
        <div className='items'>
          <h2>cart total: <span>$9.38</span></h2>
          <div className='half right'>
            <a href='#' className='checkout'>i'm ready to checkout</a>
          </div>
          {cartItems}
        </div>
        <div className='summary'>
          <h3>order summary</h3>
          <div>
            <strong>subtotal</strong>
            <small> (3 items)</small>
            <strong className='right'>$8.98</strong>
          </div>
          <div>
            <strong>delivery</strong>
            <strong className='right red'>free</strong>
          </div>
          <div>
            <strong>estimated tax</strong>
            <strong className='right'>$0.40</strong>
          </div>
          <hr />
          <h3>total <span className='right'>$9.38</span></h3>
          <hr />
          <small>cart number: 1016396673255</small>
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <ShoppingCart />,
  document.getElementById('root')
)
