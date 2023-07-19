import React from 'react'
import { CartIcon } from '../icons';

export default function Navbar() {
  return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>redux toolkit</h3>
          <div className='nav-container'>
            <CartIcon />
            <div className='amount-container'>
              <p className='total-amount'>0</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
