import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import SalesSlider from './Components/SalesSlider/SalesSlider'
import ProductList from './Components/ProductList'
import Footer from './Components/Footer/Footer'
import ProductPage from './Pages/ProductPage'
import NotFoundPage from './Pages/404Page/404Page'
import DeliveryPage from './Pages/DeliveryPage/DeliveryPage'
import PaymentPage from './Pages/PaymentPage'
import PaymentConfirmPage from './Pages/PaymentCorfimPage'
import PaymentSuccessPage from './Pages/PaymentSuccessPage/PaymentSuccessPage'
import InfoBlog from './Components/InfoBlog'

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
                  <InfoBlog />
                </>
              }
            />
            <Route path="shop" element={<ProductList />} />
            <Route
              path={'shop/*'}
              element={<ProductPage id={window.location.href.substr(window.location.href.indexOf('/shop/') + 6)} />}
            />
            <Route path="cart" element={<h2>Cart page</h2>} />
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path={'*' || '404'} element={<NotFoundPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="payment_confirm" element={<PaymentConfirmPage/>} />
             <Route path="payment_success" element={<PaymentSuccessPage/>} />
          </Route>
        </Routes>
        <Footer catalogTitle="Collections" clientTitle="Clients" />
      </BrowserRouter>
    </div>
  )
}

export default App
