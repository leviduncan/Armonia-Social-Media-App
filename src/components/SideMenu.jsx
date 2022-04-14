import React, { useContext } from 'react'
import { FaHeart } from 'react-icons/fa'
import FavsCount from './FavsCount'
import SideProfile from './SideProfile'
import AppContext from '../context/AppContext'

function SideMenu() {
    let { cart, cartItemSwitch } = useContext(AppContext)
    return (
        <div className="">
            <div className="text-center my-3">
                <h2>Arm<FaHeart color='#FF675D' className="py-1" />nia</h2>
            </div>
            <SideProfile />

            <div className="pt-3">
                <FavsCount /><hr />
            </div>
            <div className="cart">
                {cart.map(ppl => {
                    return (
                        <>
                            <div key={ppl.firstName} className="pb-2">
                                <img src={ppl.image} alt={`${ppl.firstName} ${ppl.lastName}`} />
                                {ppl.firstName} {ppl.lastName}
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default SideMenu
