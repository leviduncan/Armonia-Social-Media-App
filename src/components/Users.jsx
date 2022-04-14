import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import PersonCard from './PersonCard'

function Users({ users }) {
    let { loading, filteredData } = useContext(AppContext)




    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <>
            <div className="d-flex flex-wrap text-left mt-3">

                {filteredData
                    ? filteredData.map((results, index) => <PersonCard key={index} results={results} />)
                    : users.map((results, index) => <PersonCard key={index} results={results} />)}


            </div>
        </>
    )
}

export default Users

