import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from './index'

describe('Footer', () => {
  test('We have Footer?', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    expect(container).toBeInTheDocument()
  })
  test('Render link', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    expect(screen.getByText('Jura')).toBeInTheDocument()
  })
  test('Render phone', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    expect(screen.getByText('+1 (234) 567-890')).toBeInTheDocument()
  })
  test('Render with title', () => {
    const title = 'title'
    render(
      <MemoryRouter>
        <Footer catalogTitle={title} />
      </MemoryRouter>
    )
    expect(screen.getByText(title)).toBeInTheDocument()
  })
  test('Render with clientTitle', () => {
    const title = 'title'
    render(
      <MemoryRouter>
        <Footer clientTitle={title} />
      </MemoryRouter>
    )
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
