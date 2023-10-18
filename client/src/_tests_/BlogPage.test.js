import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import BlogPage from '../Pages/BlogPage/BlogPage'

describe('BlogPage', () => {
  test('We have BlogPage?', () => {
    const { container } = render(<BlogPage />)
    expect(container).toBeInTheDocument()
  })
  test('Title', () => {
    render(<BlogPage />)
    const title = screen.getByText('Wine Blog')
    expect(title).toBeInTheDocument()
  })
  test('List of articles', () => {
    render(<BlogPage />)
    const articleList = screen.getByRole('list')
    expect(articleList).toHaveClass('wine-blog__list')
  })
  test('List-item of articles', () => {
    render(<BlogPage />)
    const articles = screen.getAllByRole('listitem')
    expect(articles).toHaveLength(5)
  })
  test('Subtitle Jura', () => {
    render(<BlogPage />)
    const subtitle = screen.getByText('Jura')
    expect(subtitle).toBeInTheDocument()
  })
  test('Subtitle Porto', () => {
    render(<BlogPage />)
    const subtitle = screen.getByText('Porto')
    expect(subtitle).toBeInTheDocument()
  })
  test('Subtitle Priorat', () => {
    render(<BlogPage />)
    const subtitle = screen.getByText('Priorat')
    expect(subtitle).toBeInTheDocument()
  })
  test('Subtitle Sicily', () => {
    render(<BlogPage />)
    const subtitle = screen.getByText('Sicily')
    expect(subtitle).toBeInTheDocument()
  })
  test('Subtitle Switzerland', () => {
    render(<BlogPage />)
    const subtitle = screen.getByText('Switzerland')
    expect(subtitle).toBeInTheDocument()
  })
  test('Render Link history...', () => {
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    )
    expect(screen.getByText('history...')).toBeInTheDocument()
  })
  test('Render Link production...', () => {
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    )
    expect(screen.getByText('production...')).toBeInTheDocument()
  })
  test('Render Link influence...', () => {
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    )
    expect(screen.getByText('influence...')).toBeInTheDocument()
  })
  test('Render Link regions...', () => {
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    )
    expect(screen.getByText('regions...')).toBeInTheDocument()
  })
  test('Render Link where...', () => {
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>
    )
    expect(screen.getByText('where...')).toBeInTheDocument()
  })
})
