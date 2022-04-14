import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

function FavsCount() {

    let { total } = useContext(AppContext)
    
  return (
    <div>
        {total} Favorites
    </div>
  )
}

export default FavsCount