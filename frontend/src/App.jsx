import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login.jsx'
import {Toaster} from 'react-hot-toast'
import SignUp from './pages/signup/Signup'
import { useAuthContext } from './context/AuthContext.jsx'

function App() {
  const {authUser} =useAuthContext();
  console.log(authUser);
  return (
    <>
    <div className="p-4 h-screen flex items-center justify-center">
    <Routes>

      {/* <Route path='/' element={<Home/>}></Route> */}
      <Route path='/' element={authUser?<Home></Home>: <Navigate to={"/login"}></Navigate>}></Route>
      <Route path='/login' element={authUser?<Navigate to="/"/>:<Login></Login>}/>
      <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp></SignUp>}/>
    </Routes>
    <Toaster></Toaster>
    </div>
    </>
  )
}

export default App
