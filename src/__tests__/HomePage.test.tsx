import {render, screen} from '@testing-library/react'
import Home from '../app/page'

describe('Homepage', () => {
  test('should render the main container with the class "hero', () => {
    render(<Home />)
    const element = screen.getByRole('main')
    expect(element).toHaveClass('hero')
  })
  // Replicates the original test function 'should handle missing or incorrect image src gracefully'
  test('should handle missing or incorrect image src gracefully', () => {
    render(<Home />)
    const images = screen.getAllByRole('img')
    images.forEach((image) => {
      expect(image).toHaveAttribute('src')
      expect(image).toHaveAttribute('alt')
    })
  })
})
