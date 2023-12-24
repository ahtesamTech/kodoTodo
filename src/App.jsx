
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './utility/Navber/Navber'
import Footer from './utility/Footer/Footer'


function App() {


  return (
  <div>
    <Navber></Navber>
    
   <Outlet></Outlet>
<Footer></Footer>
  </div>
  )
}

export default App
