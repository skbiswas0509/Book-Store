import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Books from './books/Books'

const App = () => {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/book" element={<Books/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App