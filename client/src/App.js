import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Input from './Components/Input/Input'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <p>Links:</p>
          <a href="/">Home page</a>
          <a href="/shop">Shop page</a>
          <a href="/shop/42">Item id 42 page</a>
          <a href="/cart">Cart page</a>
          <a href="/404">404 page</a>
        </header>
        <Routes>
          <Route path="/">
            <Route index element={<h2>Home page</h2>} />
            <Route path="shop" element={<h2>Shop page</h2>} />
            <Route
              path={'shop/*'}
              element={<h2>Item id {window.location.href.substr(window.location.href.indexOf('/shop/') + 6)} page</h2>}
            />
            <Route path="cart" element={<h2>Cart page</h2>} />
            <Route path={'*' || '404'} element={<h2>404 page</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
        <Input/>
    </div>
  )
}

export default App
