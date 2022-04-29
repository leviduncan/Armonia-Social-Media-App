import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Favs from '../components/Favs'
import ShowProfileButton from './ShowProfileButton'
import { FaEnvelope } from 'react-icons/fa'
import './UserCard.css'

const UserCard = (props) => {
    const { user, onAdd, onRemove } = props
    const [show, setShow] = useState(false)
    const handleHide = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showButton, setShowButton] = useState(false)
    const handleShowButton = () => setShowButton(true)
    const handleHideButton = () => setShowButton(false)
    const [showFav, setShowFav] = useState(false)

    const pic = user.picture.large
    const firstName = user.name.first
    const lastName = user.name.last
    const gender = user.gender
    const phone = user.phone
    const age = user.dob.age
    const email = user.email


    const heartMe = () => {
        if (showFav === false) {
            setShowFav(true)
        } else {
            setShowFav(false)
        }
    }


    return (
        <>
            <div className="user-grid__card" key={user.login.uuid} onMouseOver={handleShowButton} onMouseLeave={handleHideButton}>
                <div className="d-flex flex-column">
                    <div className={showButton === true ? 'show' : 'hide'}>
                        <ShowProfileButton handleShow={handleShow} />
                    </div>
                    <img className="user-grid__card__img " src={pic} alt="Person" />

                    <Favs
                        heartMe={heartMe}
                        showFav={showFav}
                        user={user}
                        onAdd={onAdd}
                        onRemove={onRemove}
                    />

                    <div className="user-grid__card__footer d-flex justify-content-between align-items-start">
                        <div className={!showButton === true ? 'show' : 'hide'}>
                            <h5>{firstName}, {age}</h5>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleHide} size="sm"
                    centered>
                    <Modal.Body>
                        <div className="text-center">
                            <img src={pic} alt="" className="mk-rounded rose-border" />
                        </div>
                        <div className="text-center my-3 tiny-text">
                            <div className="normal d-flex justify-content-between">
                                <strong>Name: </strong>{firstName} {lastName}
                            </div>
                            <div className="normal d-flex justify-content-between"><strong>Gender:</strong> {gender}</div>
                            <div className="d-flex justify-content-between">
                                <strong className="normal">Age: </strong>{age}
                            </div>
                        </div>
                        <hr />
                        <div className="normal tiny-text">
                            <strong>A little About Me: </strong>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos aliquam incidunt ipsam vitae qui minima iure facilis odio.</p>
                            <div className="d-flex justify-content-between"><strong>Let's connect: </strong> {phone}</div>
                        </div>
                        <Favs
                            heartMe={heartMe}
                            showFav={showFav}
                            user={user}
                            onAdd={onAdd}
                            onRemove={onRemove}
                        />

                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-between">

                        <button className="btn btn-rose-lined"><FaEnvelope color='#FFF' /></button>
                        <Button variant="rose" onClick={handleHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default UserCard
