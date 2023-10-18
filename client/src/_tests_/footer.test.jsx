import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from '../Components/Footer/index'

describe('Footer', () => {
  test('We have Footer?', () => {
    const title = 'title'
    const titleTwo = 'titleTwo'
    const { container } = render(
      <MemoryRouter>
        <Footer clientTitle={title} catalogTitle={titleTwo} />
      </MemoryRouter>
    )
    expect(container).toBeInTheDocument()
  })
  test('Render link', () => {
    const title = 'title'
    const titleTwo = 'titleTwo'
    render(
      <MemoryRouter>
        <Footer clientTitle={title} catalogTitle={titleTwo} />
      </MemoryRouter>
    )
    expect(screen.getByText('Jura')).toBeInTheDocument()
  })
  test('Render phone', () => {
    const title = 'title'
    const titleTwo = 'titleTwo'
    render(
      <MemoryRouter>
        <Footer clientTitle={title} catalogTitle={titleTwo} />
      </MemoryRouter>
    )
    expect(screen.getByText('+1 (234) 567-890')).toBeInTheDocument()
  })
  test('Render with title', () => {
    const title = 'title'
    const titleTwo = 'titleTwo'
    render(
      <MemoryRouter>
        <Footer catalogTitle={titleTwo} clientTitle={title} />
      </MemoryRouter>
    )
    expect(screen.getByText(title)).toBeInTheDocument()
  })
  test('Render with clientTitle', () => {
    const title = 'title'
    const titleTwo = 'titleTwo'
    render(
      <MemoryRouter>
        <Footer clientTitle={title} catalogTitle={titleTwo} />
      </MemoryRouter>
    )
    expect(screen.getByText(titleTwo)).toBeInTheDocument()
  })
})
