import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

function ShowProfileButton({ handleShow }) {
  return (
    <>
      
      <div className="profile-btn d-flex justify-content-between">
        <button className="btn btn-rose-lined btn-block" onClick={handleShow}>View Profile</button>
        <button className="btn btn-rose-lined"><FaEnvelope color='#FFF' /></button>
      </div>
    </>
  )
}

export default ShowProfileButton
