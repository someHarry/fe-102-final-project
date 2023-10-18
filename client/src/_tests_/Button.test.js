import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer'
import Button from '../Components/Button'

describe('Button', () => {
  afterEach(() => {
    cleanup()
  })

  const mockData = {
    text: 'mock text',
    btnStyles: 'mock_style',
    btnClick: jest.fn(),
  }

  test('should exist', () => {
    render(<Button btnStyles={mockData.btnStyles} text={mockData.text} btnClick={mockData.btnClick} />)
    const btn = screen.getByTestId('btn')
    expect(btn).toBeInTheDocument()
  })

  test('should have some text', () => {
    render(<Button btnStyles={mockData.btnStyles} text={mockData.text} btnClick={mockData.btnClick} />)
    const btn = screen.getByTestId('btn')
    expect(btn).toHaveTextContent('mock text')
  })

  test('should have btnClick', () => {
    render(<Button btnStyles={mockData.btnStyles} text={mockData.text} btnClick={mockData.btnClick} />)
    const btn = screen.getByTestId('btn')
    fireEvent.click(btn)
    expect(mockData.btnClick).toHaveBeenCalled()
  })
})

test('matches snapshot', () => {
  const mockData = {
    text: 'mock text',
    btnStyles: 'mock_style',
    btnClick: jest.fn(),
  }
  const tree = renderer
    .create(<Button btnStyles={mockData.btnStyles} text={mockData.text} btnClick={mockData.btnClick} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
