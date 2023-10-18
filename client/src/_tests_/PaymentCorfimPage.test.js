import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { render, fireEvent } from '@testing-library/react'
import PaymentCorfimPage from '../Pages/PaymentCorfimPage/PaymentCorfimPage'

const mockStore = configureStore()

describe('PaymentCorfimPage', () => {
  let initialState
  let store

  beforeEach(() => {
    initialState = {
      cart: {
        subtotal: 100,
      },
    }
    store = mockStore(initialState)
  })

  test('PaymentCorfimPage snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <PaymentCorfimPage />
        </Router>
      </Provider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders component with correct subtotal', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <PaymentCorfimPage />
        </Router>
      </Provider>
    )

    const subtotalElement = getByText(`$${initialState.cart.subtotal}`)
    expect(subtotalElement).toBeInTheDocument()
  })

  test('loader is visible initially', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <PaymentCorfimPage />
        </Router>
      </Provider>
    )

    const loaderElement = getByTestId('loader')
    expect(loaderElement).toBeInTheDocument()
  })

  test('success icon is not visible initially', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Router>
          <PaymentCorfimPage />
        </Router>
      </Provider>
    )

    const successIconElement = queryByTestId('success-icon')
    expect(successIconElement).toBeNull()
  })

  test('clicking Confirm Pay button hides loader and shows success icon', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <Provider store={store}>
        <Router>
          <PaymentCorfimPage />
        </Router>
      </Provider>
    )

    const confirmPayButton = getByText('Confirm pay')
    fireEvent.click(confirmPayButton)

    const loaderElement = queryByTestId('loader')
    expect(loaderElement).toBeNull()

    const successIconElement = getByTestId('success-icon')
    expect(successIconElement).toBeInTheDocument()
  })
})
