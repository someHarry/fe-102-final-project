import React from 'react'
import { render, fireEvent } from '@testing-library/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import AboutUs from '../Components/AboutUs/AboutUs'

test('AboutUs component snapshot', () => {
  const component = renderer.create(<AboutUs />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('AboutUs Component', () => {
test('renders correctly', () => {
  const { container } = render(<AboutUs />);
  expect(container).toBeInTheDocument();
});

test('displays basic elements', () => {
  const {getAllByRole } = render(<AboutUs />);
  const tabs = getAllByRole('listitem');
  expect(tabs.length).toBe(3);
});

test('changes active tab on click', () => {
  const { getByText, container } = render(<AboutUs />);
  fireEvent.click(getByText('About products'));
  const aboutProductsImage = container.querySelector('.aboutUs-content-img.section-active');
  expect(aboutProductsImage).toBeInTheDocument();
});
})
