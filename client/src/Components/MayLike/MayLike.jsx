/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import ProductCard from '../ProductCard'
import Loader from '../Loader'
import NotFoundPage from '../../Pages/404Page/404Page'
import './MayLike.scss'

function MayLike() {
  const [productOne, setProductOne] = useState(null)
  const [productTwo, setProductTwo] = useState(null)
  const [productThree, setProductThree] = useState(null)

  const request = async () => {
    const { data } = await axios.get('http://localhost:4000/api/products/filter?perPage=3')
    return data
  }

  const { data, isError, isLoading } = useQuery('Get_Three_Products', request)

  useEffect(() => {
    if (!isError && !isLoading && data) {
      if (data.products.length >= 1) {
        setProductOne(data.products[0])
        setProductTwo(data.products[1])
        setProductThree(data.products[2])
      }
    }
  }, [data, isError, isLoading])

  if (isLoading) {
    return (
      <div className="container product-loader">
        <Loader />
      </div>
    )
  }

  if (isError) {
    return (
      <Routes>
        <Route path={'*' || '404'} element={<NotFoundPage />} />
      </Routes>
    )
  }

  return (
    <div className="container like">
      <h2 className="like__title">You may also like</h2>
      <div className="like__wrapper">
        {isLoading ? (
          <Loader />
        ) : data ? (
          <ul className="like__list">
            {productOne ? (
              <ProductCard
                itemNo={productOne?.itemNo}
                name={productOne?.name}
                variety={productOne?.variety}
                region={productOne?.region}
                country={productOne?.country}
                imageUrls={productOne?.imageUrls}
                currentPrice={productOne?.currentPrice}
                previousPrice={productOne?.previousPrice}
                discount={productOne?.discount}
              />
            ) : (
              <Loader />
            )}
            {productTwo ? (
              <ProductCard
                itemNo={productTwo.itemNo}
                name={productTwo.name}
                variety={productTwo.variety}
                region={productTwo.region}
                country={productTwo.country}
                imageUrls={productTwo.imageUrls}
                currentPrice={productTwo.currentPrice}
                previousPrice={productTwo.previousPrice}
                discount={productTwo.discount}
              />
            ) : (
              <Loader />
            )}
            {productThree ? (
              <ProductCard
                itemNo={productThree.itemNo}
                name={productThree.name}
                variety={productThree.variety}
                region={productThree.region}
                country={productThree.country}
                imageUrls={productThree.imageUrls}
                currentPrice={productThree.currentPrice}
                previousPrice={productThree.previousPrice}
                discount={productThree.discount}
              />
            ) : (
              <Loader />
            )}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default MayLike
