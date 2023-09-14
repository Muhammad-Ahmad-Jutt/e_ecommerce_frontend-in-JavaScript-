import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import Home from './Components/Home'
import Layout from './Components/Layout'
import Popular_products from './Components/Popular_products'
import Catalog from './Components/Catalog'
import About from './Components/About'
import Mycart from './Components/Mycart'
import ProductDetails from './Components/ProductDetails'
import Showlayout from './Components/Search_result'
import URlerr from './Components/URlerr'
import ScrollToTopOnNavigate from './Components/ScrollToTopOnNavigate'
export default function App() {
  return (
<>  <Layout>
  <ScrollToTopOnNavigate />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/products' element={<Products />} />
  <Route path='/popular' element={<Popular_products />} />
  <Route path='/catalog' element={<Catalog />} />
  <Route path='/about' element={<About />} />
  <Route path='/cart' element={<Mycart />} />
  <Route path='/search-result/:keyword' element={<Showlayout />} />
  <Route path='/productdetails/:id' element={<ProductDetails />} />
  
  <Route path="*" component={<URlerr />} />

</Routes>
</Layout>
</>
  
  )
}
