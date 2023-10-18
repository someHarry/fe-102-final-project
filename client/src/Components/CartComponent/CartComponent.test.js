import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Імпортуємо Provider з react-redux
import configureStore from 'redux-mock-store'; // Імпортуємо configureStore з redux-mock-store
import CartComponent from './CartComponent'; 

const mockStore = configureStore(); // Створюємо макет Redux-стору


test('renders CartComponent with no items', () => {
  const store = mockStore({
    cart: {
      subtotal: 0,
      cart: [],
    },
  });


  // Render the component with the mocked store
  render(
    <Provider store={store}>
      <CartComponent />
    </Provider>
  );

  // Verify that "There are no products in the basket!" is displayed
  const noItemsText = screen.getByText('There are no products in the basket!');
  expect(noItemsText).toBeInTheDocument();

  // Verify the "Back to Collection" link is displayed
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

  // Verify that the item names are displayed
  const item1Name = screen.getByText('Item 1');
  const item2Name = screen.getByText('Item 2');
  expect(item1Name).toBeInTheDocument();
  expect(item2Name).toBeInTheDocument();

  // Verify that the "Subtotal" is displayed
  const subtotalText = screen.getByText('Subtotal');
  expect(subtotalText).toBeInTheDocument();

  // Verify the "Back to Shopping" link is displayed
  const backToShoppingLink = screen.getByText('Back to Shopping');
  expect(backToShoppingLink).toBeInTheDocument();
});
