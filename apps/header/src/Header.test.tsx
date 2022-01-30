import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'

test('Renders Header', async () => {
  render(<Header title="Foobar" />)

  const element = screen.getByTestId('header')
  expect(element).toHaveTextContent('Foobar')
})

