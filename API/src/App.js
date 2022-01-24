import React from 'react'
import UserList from './Components/UserList/UserList.jsx'
import Navbar from './Components/Navbar/navbar.jsx'
import './App.css'
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <UserList/>
    </div>
  )
}
export default App
