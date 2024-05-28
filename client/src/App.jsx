import './App.css'
import About from './Pages/About/About'
import Gallery from './Pages/Gallery/Gallery'
import LandingPage from './Pages/LandingPage/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './Pages/Portfolio/Portfolio'

function App() {

  return (
    <div className='.app' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={< About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
