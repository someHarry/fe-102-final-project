import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import SalesSlider from './Components/SalesSlider'
import ProductList from './Components/ProductList'
import Footer from './Components/Footer/Footer'
import ProductPage from './Pages/ProductPage'
import NotFoundPage from './Pages/404Page/404Page'
import CartPage from './Pages/CartPage/CartPage'
import DeliveryPage from './Pages/DeliveryPage/DeliveryPage'
import PaymentPage from './Pages/PaymentPage'
import PaymentConfirmPage from './Pages/PaymentCorfimPage'
import PaymentSuccessPage from './Pages/PaymentSuccessPage/PaymentSuccessPage'
import BlogPage from './Pages/BlogPage'
import Jura from './Pages/BlogPage/Blogs/Jura'
import Porto from './Pages/BlogPage/Blogs/Porto/Porto'
import Priorat from './Pages/BlogPage/Blogs/Priorat'
import Sicily from './Pages/BlogPage/Blogs/Sicily'
import Switzerland from './Pages/BlogPage/Blogs/Switzerland'
import AboutUs from './Components/AboutUs/AboutUs'
import Reviews from './Components/Reviews/Reviews'
import Contact from './Pages/ContactUs/Contact'
import CartModal from './Components/CartModal'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <CartModal/>          
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  <SalesSlider />
                  <AboutUs />
                  <Reviews />
                </>
              }
            />
            <Route path="shop" element={<ProductList />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path={'shop/*'}
              element={<ProductPage id={window.location.href.substr(window.location.href.indexOf('/shop/') + 6)} />}
            />
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path={'*' || '404'} element={<NotFoundPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="payment_confirm" element={<PaymentConfirmPage />} />
            <Route path="payment_success" element={<PaymentSuccessPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/jura" element={<Jura />} />
            <Route path="blog/porto" element={<Porto />} />
            <Route path="blog/priorat" element={<Priorat />} />
            <Route path="blog/sicily" element={<Sicily />} />
            <Route path="blog/switzerland" element={<Switzerland />} />
          </Route>
        </Routes>
        <Footer catalogTitle="Blog" clientTitle="Contacts" />
      </BrowserRouter>
    </div>
  )
}

export default App
