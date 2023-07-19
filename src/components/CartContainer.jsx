import React from 'react'
import CartItem from './CartItem';

export default function CartContainer() {
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
     
        {/* {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })} */}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>$</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  )
}
