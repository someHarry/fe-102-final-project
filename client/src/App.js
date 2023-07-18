import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import ProductList from './Components/ProductList'
import Footer from './Components/Footer/Footer'
import ProductPage from './Pages/ProductPage'

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
                  items={[
                    {
                      id: 1,
                      name: 'Silver Oak Napa Valley Cabernet Sauvignon 2018',
                      variety: 'Cabernet Sauvigon',
                      region: 'Alexander Valley, Sonoma County',
                      country: 'California',
                      image:
                        'https://www.wine.com/product/images/w_768,h_1059,c_fit,q_auto:good,fl_progressive/qcng8hwtfumjbahz9po6.jpg',
                      price: 89.99,
                      discount: 0,
                    },
                    {
                      id: 2,
                      name: 'The Prisoner Wine Company Cabernet Sauvignon 2019',
                      variety: 'Cabernet Sauvigon',
                      region: 'Napa Valley',
                      country: 'California',
                      image:
                        'https://www.wine.com/product/images/w_480,h_600,c_fit,q_auto:good,fl_progressive/zluhfgt9fapsjfqlct4t.jpg',
                      price: 61.99,
                      discount: 0.2,
                    },
                    {
                      id: 3,
                      name: 'Silver Oak Napa Valley Cabernet Sauvignon 2018',
                      variety: 'Cabernet Sauvigon',
                      region: 'Alexander Valley, Sonoma County',
                      country: 'California',
                      image:
                        'https://www.wine.com/product/images/w_768,h_1059,c_fit,q_auto:good,fl_progressive/qcng8hwtfumjbahz9po6.jpg',
                      price: 89.99,
                      discount: 0,
                    },
                    {
                      id: 4,
                      name: 'The Prisoner Wine Company Cabernet Sauvignon 2019',
                      variety: 'Cabernet Sauvigon',
                      region: 'Napa Valley',
                      country: 'California',
                      image:
                        'https://www.wine.com/product/images/w_480,h_600,c_fit,q_auto:good,fl_progressive/zluhfgt9fapsjfqlct4t.jpg',
                      price: 61.99,
                      discount: 0.2,
                    },
                    {
                      id: 5,
                      name: 'Silver Oak Napa Valley Cabernet Sauvignon 2018',
                      variety: 'Cabernet Sauvigon',
                      region: 'Alexander Valley, Sonoma County',
                      country: 'California',
                      image:
                        'https://www.wine.com/product/images/w_768,h_1059,c_fit,q_auto:good,fl_progressive/qcng8hwtfumjbahz9po6.jpg',
                      price: 89.99,
                      discount: 0,
                    },
                    {
                      id: 6,
                      name: 'The Prisoner Wine Company Cabernet Sauvignon 2019',
                      variety: 'Cabernet Sauvigon',
                      region: 'Napa Valley',
                      country: 'California',
                      image:
                        'https://www.wine.com/product/images/w_480,h_600,c_fit,q_auto:good,fl_progressive/zluhfgt9fapsjfqlct4t.jpg',
                      price: 61.99,
                      discount: 0.2,
                    },
                    {
                      id: 7,
                      name: 'Silver Oak Napa Valley Cabernet Sauvignon 2018',
                      variety: 'Cabernet Sauvigon',
                      region: 'Alexander Valley, Sonoma County',
                      country: 'California',
                      image:
                        'https://www.wine.com/product/images/w_768,h_1059,c_fit,q_auto:good,fl_progressive/qcng8hwtfumjbahz9po6.jpg',
                      price: 89.99,
                      discount: 0,
                    },
                    {
                      id: 8,
                      name: 'The Prisoner Wine Company Cabernet Sauvignon 2019',
                      variety: 'Cabernet Sauvigon',
                      region: 'Napa Valley',
                      country: 'California',
                      image:
                        'https://www.wine.com/product/images/w_480,h_600,c_fit,q_auto:good,fl_progressive/zluhfgt9fapsjfqlct4t.jpg',
                      price: 61.99,
                      discount: 0.2,
                    },
                  ]}
                />
              }
            />
            <Route
              path={'shop/*'}
              element={<h2>Item id {window.location.href.substr(window.location.href.indexOf('/shop/') + 6)} page</h2>}
            />
            <Route path="cart" element={<h2>Cart page</h2>} />
            <Route path="product" element={ProductPage} />
            <Route path={'*' || '404'} element={<h2>404 page</h2>} />
          </Route>
        </Routes>
        <Footer catalogTitle="Collections" clientTitle="Clients" />
      </BrowserRouter>
    </div>
  )
}

export default App
