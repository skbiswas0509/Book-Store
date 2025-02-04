import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Books from './books/Books'
import Signup from './components/Signup'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'

const App = () => {
  const [authUser, setAuthUser] = useAuth()
    console.log(authUser)
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/book" element={authUser?<Books/>:<Navigate to="/signup"/>}/>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      <Toaster/>
      </div>
    </>
  )
}

export default App