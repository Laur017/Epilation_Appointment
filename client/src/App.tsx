import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Book from './components/Book/Book'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
 
  return (
    <div className='app-div'>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path='/book' element={<Book />} />
        <Route path='/login' element={<Login />} />
        <Route path={`/${import.meta.env.VITE_PATH}`} element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
