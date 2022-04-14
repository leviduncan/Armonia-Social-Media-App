import React, { useContext, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import AppContext from '../context/AppContext'

function Favs({ results }) {
  let { total, calculateTotal, fillCart, handleCartItemSwitch } = useContext(AppContext)

  const [favNum, setFavNum] = useState(0)
  const [showFav, setShowFav] = useState(false)

  const heartMe = () => {
    if(showFav === false){
      setShowFav(true)
    } else {
      setShowFav(false)
    }
  }

  const handleClick = () => {
    let val
    let switchVal
    if(favNum === 1){
      val = total - 1
      switchVal = 0
      setFavNum(0)
    } else {
      val = (total + 1)
      switchVal = 1
      setFavNum(1)
    }
      heartMe()
      calculateTotal(val)
      fillCart(results)
      handleCartItemSwitch(switchVal)
    }

  return (
    <>
     {showFav === false ? <FaRegHeart className="favs" onClick={handleClick}/> : <FaHeart className="favs" onClick={handleClick}/>}
    </>
  )
}

export default Favs