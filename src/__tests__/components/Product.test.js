import React from 'react'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"

import ProviderMock from '../../__mocks__/ProviderMock'
import Product from '../../components/Product'
import { productMock } from '../../__mocks__/ProductMock'

describe('<Product />', () => {

  const handleAddToCart = jest.fn()

  beforeEach(() => {
    render(
      <ProviderMock>
        <Product product={productMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    )
  })

  test('should render', () => {

    expect(screen.getByText(/Comprar/i)).toBeInTheDocument()

  })

  test('Test the shop button', async () => {

    const user = userEvent.setup()

    await user.click(screen.getByRole("button"))

    expect(handleAddToCart).toHaveBeenCalledTimes(1)

  })

})