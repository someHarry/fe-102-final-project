import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CartComponent from './CartComponent'; 

const mockStore = configureStore();


test('renders CartComponent with no items', () => {
  const store = mockStore({
    cart: {
      subtotal: 0,
      cart: [],
    },
  });


  render(
    <Provider store={store}>
      <CartComponent />
    </Provider>
  );

  const noItemsText = screen.getByText('There are no products in the basket!');
  expect(noItemsText).toBeInTheDocument();

  const backToCollectionLink = screen.getByText('Back to Collection');
  expect(backToCollectionLink).toBeInTheDocument();
});

test('renders CartComponent with items', () => {
  const store = mockStore({
    cart: {
      subtotal: 100,
      cart: [
        {
          itemNo: 1,
          imageUrls: '/path/to/image1.jpg',
          name: 'Item 1',
          quant: 2,
          currentPrice: 50,
        },
        {
          itemNo: 2,
          imageUrls: '/path/to/image2.jpg',
          name: 'Item 2',
          quant: 1,
          currentPrice: 25,
        },
      ],
    },
  });

  render(
    <Provider store={store}>
      <CartComponent />
    </Provider>
  );

  const item1Name = screen.getByText('Item 1');
  const item2Name = screen.getByText('Item 2');
  expect(item1Name).toBeInTheDocument();
  expect(item2Name).toBeInTheDocument();

  const subtotalText = screen.getByText('Subtotal');
  expect(subtotalText).toBeInTheDocument();

  const backToShoppingLink = screen.getByText('Back to Shopping');
  expect(backToShoppingLink).toBeInTheDocument();
});
