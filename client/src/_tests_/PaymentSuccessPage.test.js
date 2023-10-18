/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { render, fireEvent } from '@testing-library/react'
import PaymentSuccessPage from '../Pages/PaymentSuccessPage/PaymentSuccessPage'

const mockStore = configureStore()

describe('PaymentSuccessPage', () => {
  let initialState
  let store

  beforeEach(() => {
    initialState = {
      cart: {
        subtotal: 100,
      },
      card: {
        bankCard: {
          cardNumber: '1234567812345678',
        },
      },
      user: {
        dataUser: {
          city: 'New York',
          street: 'Main Street',
          name: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          phone: '1234567890',
        },
      },
    }
    store = mockStore(initialState)
  })

  test('renders without errors', () => {
    const { getByText, getElementsByClassName } = render(
      <Provider store={store}>
        <Router>
          <PaymentSuccessPage />
        </Router>
      </Provider>
    )
    expect(getByText('THANK YOU!')).toBeInTheDocument()
    expect(getByText('Delivery Details')).toBeInTheDocument()
    expect(getByText('Shipping address')).toBeInTheDocument()
    expect(getByText('Recipient data')).toBeInTheDocument()
    expect(getByText('Contact information')).toBeInTheDocument()
  })

  test('renders order details with a random order number', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <PaymentSuccessPage />
        </Router>
      </Provider>
    )
    expect(getByText(/^Order details - \d+$/)).toBeInTheDocument()
  })

  test('displays correct delivery information', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <PaymentSuccessPage />
        </Router>
      </Provider>
    )
    expect(getByText('New York, Main Street')).toBeInTheDocument()
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('john.doe@example.com')).toBeInTheDocument()
    expect(getByText('1234567890')).toBeInTheDocument()
  })

  test('displays correct payment method information', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <PaymentSuccessPage />
        </Router>
      </Provider>
    )
    expect(getByText('Master card')).toBeInTheDocument()
    expect(getByText('XXXX XXXX XXXX 5678')).toBeInTheDocument()
    expect(getByText('Estimated shipping')).toBeInTheDocument()
    const estimatedShippingText = getByText('Estimated shipping').textContent
    expect(estimatedShippingText).toMatch(/^Estimated shipping/)
  })

  test('displays "Keep Shopping" button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <PaymentSuccessPage />
        </Router>
      </Provider>
    )
    const keepShoppingButton = getByText('keep shopping')
    expect(keepShoppingButton).toBeInTheDocument()
    expect(keepShoppingButton.closest('a')).toHaveAttribute('href', '/')
  })

  test('displays the total order amount', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <PaymentSuccessPage />
        </Router>
      </Provider>
    )
    const totalOrderElement = getByText('Total')
    expect(totalOrderElement).toBeInTheDocument()
  })
})
