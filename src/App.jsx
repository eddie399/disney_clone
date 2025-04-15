
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Production from './components/Production'
import GenreMovieList from './components/GenreMovieList'
import Footer from './components/Footer'


function App() {
  

  return (
    <div>
      <Header />

      <Slider />

      <Production />

      <GenreMovieList />
      <Footer />
    </div>
  )
}

export default App
