import React, { useState, useContext } from 'react'
import Users from './Users'
import Pagination from './Pagination'
import FavsCount from './FavsCount'
import AppContext from '../context/AppContext'

function GetAll() {
let { gender, data } = useContext(AppContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(20)

    // Get current users
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = data.results.slice(indexOfFirstUser, indexOfLastUser)

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
      <>
        <div className='pt-5'>
          <div className='col d-flex justify-content-between'>
            <h2>{gender === 'male' ? 'Who would you like to meet today?' : 'Get to know someone special today'}</h2>
            <FavsCount />
          </div>

          <Users users={currentUsers}  />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={data.results.length}
            paginate={paginate}
          />
        </div>
      </>
    );
}

export default GetAll
    

