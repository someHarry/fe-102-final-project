/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { render, fireEvent } from '@testing-library/react'
import PaymentPage from '../Pages/PaymentPage/PaymentPage'

const mockStore = configureStore()

describe('PaymentPage', () => {
  let initialState
  let store

  beforeEach(() => {
    initialState = {
      cart: {
        subtotal: 100,
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

  test('PaymentPage snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <PaymentPage />
        </Router>
      </Provider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('display user data correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <PaymentPage />
        </Router>
      </Provider>
    )
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('New York, Main Street')).toBeInTheDocument()
    expect(getByText('john.doe@example.com')).toBeInTheDocument()
    expect(getByText('1234567890')).toBeInTheDocument()
  })
  test('should display correct subtotal and total', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <PaymentPage />
        </Router>
      </Provider>
    )

    const subtotalElement = getByText(/Subtotal/)
    expect(subtotalElement).toBeInTheDocument()
    expect(subtotalElement.nextSibling).toHaveTextContent('$100')

    const totalElement = getByText(/Total/)
    expect(totalElement).toBeInTheDocument()
    expect(totalElement.nextSibling).toHaveTextContent('$100')
  })
  test('should handle save click', async () => {
    const { getByText, findByText } = render(
      <Provider store={store}>
        <Router>
          <PaymentPage />
        </Router>
      </Provider>
    )

    await act(async () => {
      fireEvent.click(getByText('EDIT DETAILS'))
    })

    expect(await findByText('SAVE')).toBeInTheDocument()
    await act(async () => {
      fireEvent.click(getByText('SAVE'))
    })
  })
  test('should handle payment process', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <PaymentPage />
        </Router>
      </Provider>
    )

    await act(async () => {
      fireEvent.click(getByText('Pay'))
    })
  })
  test('should handle card number input and format it', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <PaymentPage />
        </Router>
      </Provider>
    )
    await act(async () => {
      const cardNumberInput = getByTestId('cardNumber')
      fireEvent.change(cardNumberInput, { target: { value: '1234567812345678' } })
      expect(cardNumberInput).toHaveValue('1234567812345678')
    })
  })
  test('should handle expiration date input and format it', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <PaymentPage />
        </Router>
      </Provider>
    )
    await act(async () => {
      const expirationDateInput = getByTestId('expirationDate')
      fireEvent.change(expirationDateInput, { target: { value: '1224' } })
      expect(expirationDateInput).toHaveValue('1224')
    })
  })
})
