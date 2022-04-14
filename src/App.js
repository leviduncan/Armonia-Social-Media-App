import React, { useEffect, useState } from 'react'
import { AppProvider } from './context/AppContext'
import './App.css'
import SideMenu from './components/SideMenu'
import Header from './components/Header'
import GetAll from './components/GetAll'

function App() {
    const [data, setData] = useState({})
    const [filteredData, setFilteredData] = useState(null)
    const [gender, setGender] = useState("female")
    const [totalUsers, setTotalUsers] = useState(60)
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])
    const [cartItemSwitch, setCartItemSwitch] = useState(1)

    const handleCartItemSwitch = (switchVal) => {
      if (switchVal === 1){
        setCartItemSwitch(0)
      } else {
        setCartItemSwitch(1)
      }
      console.log(cartItemSwitch);
    }

    const fillCart = (item) => {
      const people = {
        id: item.id,
        image: item.picture.medium,
        firstName: item.name.first,
        lastName: item.name.last
      }

      setCart(cart => [...cart, people])
      console.log(cart);
    }

    const handleChange = (e) => {
      setGender(e.target.value)
    }

    const calculateTotal = (val) => {
      setTotal(val)
    }

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=${totalUsers}`)
          .then((response) => response.json())
          .then(setData)
      }, [])

    useEffect(() => {
        if (!data.results) {
            return
        }

        if (!gender) {
            setFilteredData(null);
            return;
        }

        const searchResults = data.results.filter((e) => e.gender === gender);
        setFilteredData(searchResults);
 }, [gender])



  return (
    <AppProvider value={{
      gender,
      data,
      filteredData,
      loading,
      total,
      cart,
      cartItemSwitch,
      fillCart,
      handleChange,
      calculateTotal,
      handleCartItemSwitch
    }}>
      <div className="d-flex flex-row">
      {data.results ? 
        (<div>
          <div className="d-flex flex-row">
            <div className="side-menu" >
              {/* SideMenu */}
                <SideMenu />
              {/* End SideMenu */}
            </div>
            <div className="content col">
              {/* Content */}
                <Header />
                <GetAll />
              {/* End Content */}
            </div>
          </div>            
            </div>) :
            (<div>loading...</div>)
        }
    </div>
    </AppProvider>
  )
}
export default App
