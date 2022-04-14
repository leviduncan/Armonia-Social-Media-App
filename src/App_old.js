import { useState, useEffect } from 'react'
import './App.css'
import GetAll from './components/GetAll'
import SideMenu from './components/SideMenu'
import { AppProvider } from './context/AppContext'

function App() {

  const [total, setTotal] = useState(0)
  const [gender, setGender] = useState("female")
  const [users, setUsers] = useState({})
  const [filteredData, setFilteredData] = useState([])
  const [totalUsers, setTotalUsers] = useState(60)
  const [loading, setLoading] = useState(false)
  const [cart, setCart] = useState([])
  const addUserToCart = (peeps) => {
    const item = peeps
    setCart([...cart, item])
  }

  const handleChange = (e) => {
      setGender(e.target.value)
      
  }

  const calculateTotal = (val) => {
    setTotal(val)
  }
 

  useEffect(() => {

      setLoading(true)
      fetch(`https://randomuser.me/api/?results=${totalUsers}`)
      .then((response) => setUsers(response.json()))
      console.log(users);
      setLoading(false)

}, [])

useEffect(() => {
  if (!users.results) {
    return
  }

  if (!gender) {
    setFilteredData(null)
    return
  }

  const searchResults = users.results.filter((e) => e.gender === gender)
  setFilteredData(searchResults)
},[gender])



  return (
   <AppProvider value={{
      total,
      gender,
      users,
      loading,
      cart,
      filteredData,
      calculateTotal,
      handleChange,
      addUserToCart
    }}>
      <div className="d-flex flex-row">
        <div className="side-menu" >
          <SideMenu />
        </div>
        <div className="content col">
          <GetAll />
        </div>
      </div>
   </AppProvider>
  );
}

export default App;
