import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Logo from '../Components/Logo/Logo'

describe('Logo', () => {
  test('We have Log?', () => {
    const className = 'className'
    const { container } = render(
      <MemoryRouter>
        <Logo classNames={className} />
      </MemoryRouter>
    )
    expect(container).toBeInTheDocument()
  })
  test('Render Link', () => {
    const className = 'className'
    render(
      <MemoryRouter>
        <Logo classNames={className} />
      </MemoryRouter>
    )
    expect(screen.getByText('Nice Wine')).toBeInTheDocument()
  })
  test('We have SVG?', () => {
    const className = 'className'
    render(
      <MemoryRouter>
        <Logo classNames={className} />
      </MemoryRouter>
    )
    const svgElement = screen.getByTestId('logo__pic')
    expect(svgElement).toBeInTheDocument()
    expect(svgElement).toHaveAttribute('width', '64.000000pt')
    expect(svgElement).toHaveAttribute('height', '64.000000pt')
    expect(svgElement).toHaveAttribute('viewBox', '16 0 64.000000 64.000000')
  })
})
