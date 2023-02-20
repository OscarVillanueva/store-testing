import React from 'react'
import { render, screen } from "@testing-library/react"
import { create } from 'react-test-renderer';
import "@testing-library/jest-dom"

import Footer from '../../components/Footer'

describe('Testing footer component - <Footer />', () => {

  render(<Footer />);

  test('should render the component', () => {

    expect(screen.getByText(/Platzi Store/i)).toBeInTheDocument()

  })

  test('should create a snapshot', () => {

    const footer = create(<Footer />).toJSON()
    expect(footer).toMatchSnapshot();

  })

})
