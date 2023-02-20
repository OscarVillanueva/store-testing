import React from 'react'
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import ProviderMock from '../../__mocks__/ProviderMock'
import Header from '../../components/Header'
import { create } from 'react-test-renderer'

describe('Testing header component - <Header />', () => {

  test('should render the component', () => {

    render(
      <ProviderMock>
        <Header />
      </ProviderMock>
    )

    expect(screen.getByText(/Platzi Store/i)).toBeInTheDocument()

  })

  test('Header snapshot', () => {

    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    ).toJSON()

    expect(header).toMatchSnapshot()

  })

})
