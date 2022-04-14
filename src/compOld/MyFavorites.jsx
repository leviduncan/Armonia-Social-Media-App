import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

function MyFavorites() {
  let { cart } = useContext(AppContext)
  return (
    <div className="profile mt-3 p-3">
        <h5>Favorites</h5>
        <div className="d-flex align-items-center">
  {cart.map(item => <li key={item}>{item}</li>)}
        </div>
    </div>
  )
}

export default MyFavorites