import { Routes, Route  } from 'react-router'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { Checkout } from './Pages/Checkout'


function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    
  )
}

export default App
