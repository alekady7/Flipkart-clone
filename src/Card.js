import FavoriteIcon from '@mui/icons-material/Favorite';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import React, { useCallback, useEffect, useState } from 'react'
import './Card.css'

function Card({offerPrice,image,name,rating,actualPrice}) {

  const [index, setIndex] = useState(0)  
  const [show, setShow] = useState(false)
  
  //This is the animation of the items hover change every 
  //time we hover

  //for every 1s index will change
  const carousel = useCallback(() => {
    setTimeout(()=> {
        if(index<image.length-1) {
            setIndex(index+1)
        }else{
            setIndex(0)
        }
    },1500)
  }, [index,image.length])

  useEffect(()=> {
    show && carousel( )
  }, [show,carousel])

  return (
    <div className='card'>
        <div className='card__heart'>
            <FavoriteIcon />
        </div>

        {
            //connecting the array of hover buttons with the 
            //function with length same as array of images 
            Array(image.length).fill().map((_,i) => {
                if(i===index){
                   return show &&<FiberManualRecordIcon className='dots'/>
                }else{
                    return show &&<FiberManualRecordOutlinedIcon className='dots'/>
                }
            })
        }

        <div className='card__image'>
            <img 
                onMouseOver={()=>setShow(true)} 
                onMouseLeave={()=>setShow(false)} 
                src={image[index]} 
                alt='images' 
            />
        </div>
        <div className='productDet'>
            <div className='card__details'>
                <p className='title'>adidas</p>
                <p>running shoes</p>
                <span className='span1'>₹{offerPrice}</span>
                <span className='span2'>₹{actualPrice}</span>
                <span className='span3'>56%</span>
            </div>
            <div className='card__size'>
                <p>size <span>6,7,8,9</span></p>
            </div>
        </div>
    </div>
  )
}

export default Card