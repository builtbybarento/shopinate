import { Routes, Route  } from 'react-router'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { Checkout } from './Pages/checkout/Checkout'
import { Orders } from './Pages/Orders'
import { Tracking } from './Pages/Tracking'
import { PageNotFound } from './Pages/PageNotFound'


function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="tracking" element={<Tracking/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    
  )
}

export default App
