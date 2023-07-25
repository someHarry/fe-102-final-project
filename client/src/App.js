import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import SalesSlider from './Components/SalesSlider/SalesSlider'
import ProductList from './Components/ProductList'
import Footer from './Components/Footer/Footer'
import ProductPage from './Pages/ProductPage'
import NotFoundPage from './Pages/404Page/404Page'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  <SalesSlider />
                  <h2>Home page</h2>
                </>
              }
            />
            <Route path="shop" element={<ProductList />} />
            <Route
              path={'shop/*'}
              element={<h2>Item id {window.location.href.substr(window.location.href.indexOf('/shop/') + 6)} page</h2>}
            />
            <Route path="cart" element={<h2>Cart page</h2>} />
            <Route path="product" element={<ProductPage />} />
            <Route path={'*' || '404'} element={<NotFoundPage />} />
          </Route>
        </Routes>
        <Footer catalogTitle="Collections" clientTitle="Clients" />
      </BrowserRouter>
    </div>
  )
}

export default App
