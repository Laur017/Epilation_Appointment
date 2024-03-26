import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Book from './components/Book/Book'
import Login from './components/Login/Login'

function App() {
 
  return (
    <div className='app-div'>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path='/book' element={<Book />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
