import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <p style={{margin:"3px"}}>Links:</p>
          <ul style={{listStyle:"none", display:"flex", flexDirection:"row", gap:"20px", margin:"0"}}>
            <li><a className="App-link" href="/">Home page</a></li>
            <li><a className="App-link" href="/shop">Shop page</a></li>
            <li><a className="App-link" href="/shop/42">Item id 42 page</a></li>
            <li><a className="App-link" href="/cart">Cart page</a></li>
            <li><a className="App-link" href="/404">404 page</a></li>
          </ul>
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

    </div>
  )
}

export default App
