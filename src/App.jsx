import { useState } from 'react'
import List from './components/List'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
