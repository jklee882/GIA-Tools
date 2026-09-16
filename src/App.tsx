import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HSBBM from './pages/HSBBM'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HSBBM" element={<HSBBM />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
