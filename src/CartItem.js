import React from 'react'

class CartItem extends React.Component {

  render () {
    return (
      <div className='item'>
        <img src={this.props.imgUrl} alt={this.props.name} />
        <div className='half'>
          {this.props.name}
        </div>
        <div className='half'>
          <span className='circle'>-</span>
          <span className='pad-left pad-right'>1</span>
          <span className='circle'>+</span>
          <strong className='right'>${this.props.price}</strong>
        </div>
        <hr />
        <div>
          <a href='#'>remove</a><br />
          <label>
            <input type='checkbox' /> wrap it for $5.99
          </label>
        </div>
      </div>
    )
  }
}

export default CartItem
