import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Banner from './components/Banner/Banner'
import Review from './components/Review/Review'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <Products/>
    <Review/>
    <Footer/>
     </div>
  )
}

export default App
