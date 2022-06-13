import React, { useEffect, useState } from 'react'
import GetAllUsers from './components/GetAllUsers'
import SideMenu from './components/SideMenu'
import './App.css'
import Pagination from './components/Pagination'

const App = () => {


    const [userData, setUserData] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [filteredData, setFilteredData] = useState(null)
    const [totalUsers, setTotalUsers] = useState(20)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(5)

    const fetchUserData = async () => {
        const url = `https://randomuser.me/api/?results=${totalUsers}`
        const resp = await fetch(url)
        const users = await resp.json()
        setUserData(users.results)
        console.log(users.results);
    }
    useEffect(() => {
        fetchUserData()
    }, [totalUsers])

    //Get current users
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser)

    //Paginate
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const onAdd = (person) => {
        const exist = cartItems.find((cart) => cart.id === person.id);
        if (exist) {
            setCartItems(
                cartItems.map((cart) =>
                    cart.id === person.id ? { ...exist, qty: exist.qty + 1 } : cart
                )
            );
        } else {
            setCartItems([...cartItems, { ...person, qty: 1 }]);
        }
    };


    const onRemove = (person) => {
        const exist = cartItems.find((cart) => cart.id === person.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((cart) => cart.id !== person.id));
        } else {
            setCartItems(
                cartItems.map((cart) =>
                    cart.id === person.id ? { ...exist, qty: exist.qty - 1 } : cart
                )
            );
        }
    };

    return (
        <>
            <div className="app-layout">
                <SideMenu
                    cartItems={cartItems}
                    onRemove={onRemove}
                />

                <GetAllUsers
                    userData={currentUsers}
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    user={indexOfLastUser}
                    usersPerPage={usersPerPage}
                    totalUsers={userData.length}
                    paginate={paginate}
                />

            </div>
            <Pagination
                usersPerPage={usersPerPage}
                totalUsers={userData.length}
                paginate={paginate}
            />
        </>
    )
}

export default App
