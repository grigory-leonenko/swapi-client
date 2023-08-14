import { describe, expect, test, afterEach } from 'vitest'
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Card } from './Card'

describe('components/Card', () => {
  // Bug with auto cleanup https://github.com/vitest-dev/vitest/issues/1430
  afterEach(cleanup)

  test('person card has image and correct alt', async () => {
    render(
      <MemoryRouter>
        <Card id="1" name="Luke Skywalker" birth="19BBY" isLoading={false} />
      </MemoryRouter>,
    )

    await waitFor(() => {
      expect(screen.getByTestId('person-card-img').getAttribute('src')).toBe('/persons/1.jpg')
      expect(screen.getByTestId('person-card-img').getAttribute('alt')).toBe('Luke Skywalker avatar')
    })
  })

  test('person has name and birth date', async () => {
    render(
      <MemoryRouter>
        <Card id="1" name="Luke Skywalker" birth="19BBY" isLoading={false} />
      </MemoryRouter>,
    )

    const nameElement = screen.getByText('Luke Skywalker')
    const birthElement = screen.getByText('19BBY')

    await waitFor(() => {
      expect(birthElement).toBeInTheDocument()
      expect(nameElement).toBeInTheDocument()
    })
  })

  test('applies correct styles when isLoading is false', () => {
    render(
      <MemoryRouter>
        <Card id="1" name="Luke Skywalker" birth="19BBY" isLoading={false} />
      </MemoryRouter>,
    )

    const cardElement = screen.getByTestId('person-card')

    expect(cardElement).toHaveClass('cursor-pointer')
    expect(cardElement).not.toHaveClass('pointer-events-none')
    expect(cardElement).not.toHaveClass('brightness-50')
  })

  test('applies correct styles when isLoading is true', () => {
    render(
      <MemoryRouter>
        <Card id="1" name="Luke Skywalker" birth="19BBY" isLoading={true} />
      </MemoryRouter>,
    )

    const cardElement = screen.getByTestId('person-card')

    expect(cardElement).toHaveClass('pointer-events-none')
    expect(cardElement).toHaveClass('brightness-50')
    expect(cardElement).not.toHaveClass('cursor-pointer')
  })
})
