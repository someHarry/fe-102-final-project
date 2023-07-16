import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import ProductList from './Components/ProductList'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* END HEADER */}
        <Routes>
          <Route path="/">
            <Route index element={<h2>Home page</h2>} />
            <Route
              path="shop"
              element={
                <ProductList
                  items={[]}
                />
              }
            />
            <Route
              path={'shop/*'}
              element={<h2>Item id {window.location.href.substr(window.location.href.indexOf('/shop/') + 6)} page</h2>}
            />
            <Route path="cart" element={<h2>Cart page</h2>} />
            <Route path={'*' || '404'} element={<h2>404 page</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
