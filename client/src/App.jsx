import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='.app' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
