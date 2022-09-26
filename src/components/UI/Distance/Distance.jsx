import React from 'react';
//components
import Sticker from '../Sticker/Sticker';

const Distance = () => {

  const distanceArr = [
      {id: 1, text: 'Normal', bg: "#29CC97"},
      {id: 2, text: 'High', bg: "#F12B2C"},
      {id: 3, text: 'Low', bg: "#FEC400"},
  ]

  const randomNumber = Math.floor(Math.random() * 3) + 1;

  return (
    <>
      {distanceArr.map(block => 
          block.id ===  randomNumber && <Sticker key={block.id} bg={block.bg}  color="#fff"  text={block.text}/>
      )}
    </>
  )
}

export default Distance