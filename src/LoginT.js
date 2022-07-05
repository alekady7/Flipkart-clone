import React from 'react'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StoreIcon from '@mui/icons-material/Store';
import './LoginT.css';

function LoginT() {
  return (
    <div className='loginT'>
        <hr />
        <div className='loginT__in'>
            <h2>New Customer?</h2>
            <p className='signup'>Signup</p>
        </div>
        <hr />
        <div className='loginT__in'>
            <AccountCircleIcon />
            <p className='font-color'>My Profile</p>
        </div>
        <hr />
        <div className='loginT__in'>
            <img 
                src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
                alt='' 
            />
            <p className='font-color'>Flipkart Plus Zone</p>
        </div>
        <hr />
        <div className='loginT__in'>
            <StoreIcon />
            <p className='font-color'>Orders</p>
        </div>
        <hr />
        <div className='loginT__in'>
            <FavoriteIcon />
            <p className='font-color'>Wishlist</p>
        </div>
        <hr />
        <div className='loginT__in'>
            <ConfirmationNumberIcon />
            <p className='font-color'>Rewards</p>
        </div>
        <hr />
        <div className='loginT__in'>
            <CardGiftcardIcon />
            <p className='font-color'>Gift Cards</p>
        </div>
    </div>
  )
}

export default LoginT