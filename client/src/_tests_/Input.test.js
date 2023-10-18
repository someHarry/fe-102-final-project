import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../Components/Input/Input';

describe('Input Component', () => {
 
  test('renders input component with a label', () => {
    const label = 'Test Label'; 
    const { getByText } = render(<Input label={label} />);
    const labelElement = getByText(label);
    expect(labelElement).toBeInTheDocument();
  });

 test('calls onChange handler when input value changes', () => {
  const onChangeMock = jest.fn();
  const { container } = render(<Input onChange={onChangeMock} />);
  const inputElement = container.querySelector('input');
  fireEvent.change(inputElement, { target: { value: 'new value' } });
  expect(onChangeMock).toHaveBeenCalledWith(
    expect.objectContaining({
      target: expect.objectContaining({ value: 'new value' })
    })
  );
});
  test('renders error message when error is true', () => {
    const errorMessage = 'This field is required';
    const { getByText } = render(<Input error errorMessage={errorMessage} />);
    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  test('renders input component with default type "text"', () => {
    const { container } = render(<Input />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test('renders input component with type "password"', () => {
    const { container } = render(<Input type="password" />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toHaveAttribute('type', 'password');
  });

    test('renders input component with correct placeholder', () => {
    const placeholder = 'Placeholder'; 
    const { container } = render(<Input placeholder={placeholder} />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toHaveAttribute('placeholder', placeholder);
  });
});