import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import BlogPage from '../Pages/BlogPage/BlogPage'

describe('BlogPage', () => {
  test('We have BlogPage?', () => {
    const { container } = render(<BlogPage />)
    expect(container).toBeInTheDocument()
  })
})
