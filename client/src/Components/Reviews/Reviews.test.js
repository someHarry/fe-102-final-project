import React from 'react';
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Reviews from './Reviews';

test('Reviews component snapshot', () => {
  const component = renderer.create(<Reviews/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Reviews Component', () => {
  test('renders Reviews component', () => {
    render(<Reviews />);
  });

  test('displays the Reviews section', () => {
    const { getByText } = render(<Reviews />);
    const reviewsSection = getByText('Reviews');
    expect(reviewsSection).toBeInTheDocument();
  });

  test('displays at least one review', () => {
    const { getAllByText } = render(<Reviews />);
    const sampleReviewText = 'Good Wine is an absolute delight for the senses!';
    const reviewTexts = getAllByText(sampleReviewText);
    expect(reviewTexts.length).toBeGreaterThan(0);
  });

  test('displays images for reviews', () => {
    const { getAllByAltText } = render(<Reviews />);
    const reviewImages = getAllByAltText('');
    expect(reviewImages.length).toBeGreaterThan(0);
  });
});