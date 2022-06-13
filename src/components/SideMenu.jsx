import './SideMenu.css'
import { FaHeart } from 'react-icons/fa'

const SideMenu = (props) => {
    const { cartItems, onRemove } = props;

    return (
        <div className="side-menu">
            <div className="text-center my-3">
                <h2>Arm<FaHeart color='#FF675D' className="py-1" />nia</h2>
            </div>
            <div>Favorites: {cartItems.length} </div>
            <hr />
            <div>
                {cartItems.length === 0 && <div>Your Favorites list is empty</div>}
                {cartItems.map((item) => (
                    <>
                        <div key={item.login.uuid} className="d-flex align-items-center side-menu__person">
                            <img className="side-menu__image" src={item.picture.thumbnail} alt={`${item.name.first} ${item.name.last}`} />
                            <div>{item.name.first} {item.name.last}</div>
                            
                        </div>

                    </>
                ))}
            </div>
        </div>
    )
}

export default SideMenu
