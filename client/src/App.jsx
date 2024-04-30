import './App.css'
import About from './Pages/About/About'
import LandingPage from './Pages/LandingPage/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='.app' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={< About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
