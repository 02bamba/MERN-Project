import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from "react-hot-toast"

export default function App() {
  return (
    <div>
    <button onClick={() => toast.error("Good job !")}>click me</button>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/create' element={<CreatePage/>}/>
      <Route path='/note/:id' element={<NoteDetailPage/>}/>
    </Routes>
    </div>
  )
}
