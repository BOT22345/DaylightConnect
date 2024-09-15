import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'

function App() {
  
  return (
    <>
    <div className="p-4 h-screen flex items-center justify-center">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path="/signup" element={<SignUp></SignUp>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
