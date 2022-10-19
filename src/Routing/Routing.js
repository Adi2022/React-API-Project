import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import AlbumList from '../Components/AlbumList'
import Albums from '../Components/Albums'
import GoToTopPage from '../Components/GoToTop'
import Header from '../Layouts/Header'
import Home from '../Pages/Home'

const Routing = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/albumlist" element={<AlbumList />} />
    <Route path="/album" element={<Albums />} />

    </Routes>
    <GoToTopPage/>
    
    </BrowserRouter>
  )
}

export default Routing