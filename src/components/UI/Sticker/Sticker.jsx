import React from 'react';
//css
import './Sticker.css'

const Sticker = ({bg, color, text}) => {
  return (
    <div className="sticker">
         <div  className="sticker__block" style={{background: bg, color: color}}>{text}</div>
    </div>
   
  )
}

export default Sticker