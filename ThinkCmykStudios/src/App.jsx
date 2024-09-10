import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Pages/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
      <Banner/>
       

    </>
  )
}

export default App
