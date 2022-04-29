import React, { useEffect, useState } from 'react'
import GetAllUsers from './components/GetAllUsers'
import SideMenu from './components/SideMenu'
import './App.css'

const App = () => {

    const url = 'https://randomuser.me/api/?results=40'
    const [userData, setUserData] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [filteredData, setFilteredData] = useState(null)

    const fetchUserData = async () => {
        const resp = await fetch(url)
        const users = await resp.json()
        setUserData(users.results)
        console.log(users.results);
    }
    useEffect(() => {
        fetchUserData()
    }, [])



    const onAdd = (person) => {
        const exist = cartItems.find((x) => x.id === person.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === person.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...person, qty: 1 }]);
        }
    };


    const onRemove = (person) => {
        const exist = cartItems.find((x) => x.id === person.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== person.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === person.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    return (
        <div className="app-layout">
            <SideMenu
                cartItems={cartItems}
                onRemove={onRemove}
            />
            <GetAllUsers
                userData={userData}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
            />
        </div>
    )
}

export default App
