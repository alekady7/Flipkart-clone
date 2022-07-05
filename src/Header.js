import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MoreT from './MoreT';
import LoginT from './LoginT';
import 'tippy.js/themes/light.css'

function Header() {
  return (
    <div className="header">
        <div className='header__first'>
            <img 
                src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="flipkart logo"
            />
            <div className='header__first1'>
                <span style={{
                    fontSize: '11px',
                    color: 'white',
                    fontStyle: 'italic'
                }}>Explore</span>
                <span style={{
                    color: '#f9e107',
                    fontSize: '11px',
                    fontStyle: "italic"
                }}>plus</span>
                <span>
                    <img 
                    width="10"
                        src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" 
                        alt="">
                    </img>
                </span>
            </div>
        </div>
        <div className='header__second'>
            <input type="text" placeholder='Search for products, brands and more' />
            <SearchIcon />
        </div>
        <div className='header__third'>
            <Tippy 
                theme='light'
                //visible={true}   //makes visible at development time
                content={<LoginT></LoginT>} //Importing the component
                interactive = {true}
                offset={[5, 11]}  //for tooltip (left is tooltip direction and right is tooltip vertical distance)
            >
                <button>Login</button>
            </Tippy>
        </div>
        <div className='header__fourth'>
            <Tippy 
                theme='light'
                content={<MoreT></MoreT>}
                interactive = {true}   //to let the hover items stay
                offset={[5, 16]}
            >
                <span>More</span>
            </Tippy>
            <ExpandMoreIcon />
        </div>
        <div className='header__fifth'>
            <ShoppingCartIcon />
            <p>Cart</p>
        </div>
    </div>   
  )
}

export default Header