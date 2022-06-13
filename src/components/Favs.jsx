import { FaRegHeart, FaHeart } from 'react-icons/fa'
import './Favs.css'

const Favs = (props) => {
    const { heartMe, showFav, user, onAdd, onRemove } = props

    const addPerson = () => {
        onAdd(user)
        heartMe()
    }

    const removePerson = () => {
        onRemove(user)
        heartMe()
    }


    return (
        <div>
            {showFav === false
                ? <FaRegHeart className="favs tool-tip-add" onClick={addPerson} />
                : <FaHeart className="favs tool-tip-remove" onClick={removePerson} />}
        </div>
    )
}

export default Favs
