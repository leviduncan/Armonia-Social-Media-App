import { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import ShowProfileButton from './ShowProfileButton'
import AppContext from '../context/AppContext'
import Favs from './Favs'

function PersonCard({ results }) {
  let { gender } = useContext(AppContext)

  const [show, setShow] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const handleShow = () => setShow(true)
  const handleHide = () => setShow(false)

  const handleShowButton = () => setShowButton(true)
  const handleHideButton = () => setShowButton(false)

  const pic = results.picture.large
  const firstName = results.name.first
  const lastName = results.name.last

 

  return (
    <div className="card user m-2" onMouseOver={handleShowButton} onMouseLeave={handleHideButton}>
      <div className="connect"><Favs results={results}/></div>
      <img src={pic} className="card-img" alt="" />
      <div className={showButton === true ? 'show' : 'hide'}>
        <ShowProfileButton handleShow={handleShow} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{results.name.first} {results.name.last}</h5>
      </div>
      <Modal show={show} onHide={handleHide} size="sm"
        centered>
        <Modal.Body>
          <div className="text-center">
            <img src={pic} alt="" className="mk-rounded rose-border" />
          </div>
          <div className="text-center my-3 tiny-text">
            <div className="normal">
              <strong>Name: </strong>{firstName} {lastName}
            </div>
            <div className="normal"><strong>Gender:</strong> {gender}</div>
            <div>
              <strong className="normal">Email: </strong>{results.email}
            </div>
            <div>
              <strong className="normal">Age: </strong>{results.age}
            </div>
          </div>
          <div className="normal tiny-text">
            <strong>A little About Me: </strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos aliquam incidunt ipsam vitae qui minima iure facilis odio! Ipsum, atque ut, earum laudantium possimus rem magnam ad impedit perspiciatis fuga dicta eum enim voluptatibus rerum facilis commodi, animi nulla.</p>
            <strong>Let's connect: </strong> {results.phone}
          </div>

        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between"><Favs />
          <Button variant="rose" onClick={handleHide}>
            Close
                        </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PersonCard
