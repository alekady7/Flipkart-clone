import React from 'react'
import GetAppIcon from '@mui/icons-material/GetApp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './MoreT.css';

function MoreT() {
  return (
    <div className='moreT'>
        <hr />
        <div className='moreT__in'>
            <NotificationsIcon />
            <p className='font-color'>Notification Preferences</p>
        </div>
        <hr />
        <div className='moreT__in'>
            <MonetizationOnIcon />
            <p className='font-color'>Sell on Flipkart</p>
        </div>
        <hr />
        <div className='moreT__in'>
            <LiveHelpIcon />
            <p className='font-color'>24x7 Customer Care</p>
        </div>
        <hr />
        <div className='moreT__in'>
            <TrendingUpIcon />
            <p className='font-color'>Advertise</p>
        </div>
        <hr />
        <div className='moreT__in'>
            <GetAppIcon />
            <p className='font-color'>Download App</p>
        </div>
        
    </div>
  )
}

export default MoreT