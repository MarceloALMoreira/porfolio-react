import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
// import './App.css'

export default function App() {

  return (
    <BrowserRouter>
      <Home />
      <Routes>
        {/* <Route path='/sobre' element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  )
}


