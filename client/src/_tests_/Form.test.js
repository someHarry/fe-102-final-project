import React from 'react'
import { render, fireEvent } from '@testing-library/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Form from '../Components/Form/Form'

test('Form component snapshot', () => {
  const component = renderer.create(<Form />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Form component', () => {
  test('calls onSubmit when the form is submitted', () => {
    const onSubmitMock = jest.fn();
    const { getByText } = render(
      <Form onSubmit={onSubmitMock} className="test-form">
        <button type="submit">Submit</button>
      </Form>
    );
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalled();
  });
    test('renders correctly with the given className', () => {
    const { container } = render(<Form className="test-form" />);
    const form = container.querySelector('form');
    expect(form).toBeInTheDocument();
    expect(form).toHaveClass('test-form');
  });

});