import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useEffect, useState} from "react";
import './App.css'
import Header from './Components/Header/Header'
import ProductList from './Components/ProductList'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
        .then(res => res.json())
        .then(
            (result) => {
              // setIsLoaded(true);
              setProducts(result);
            },
            // (error) => {
              // setIsLoaded(true);
              // setError(error);
            // }
        )
  }, [])

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
                  items={products}
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
