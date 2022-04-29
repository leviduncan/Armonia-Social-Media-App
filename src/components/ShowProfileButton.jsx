import React from 'react'
import './ShowProfileButton.css'

function ShowProfileButton({ handleShow }) {
  return (
    <>
      
      <div className="profile-btn d-flex justify-content-between">
        <button className="btn btn-rose-lined btn-block" onClick={handleShow}>View Profile</button>
      </div>
    </>
  )
}

export default ShowProfileButton
