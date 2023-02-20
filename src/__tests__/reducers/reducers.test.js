import reducer from '../../reducers'
import { productMock } from '../../__mocks__/ProductMock'

describe('Testing reducers', () => {

  test('should return the initial state', () => {

    expect(reducer({}, '')).toStrictEqual({})

  })

  test('should add a product to cart', () => {

    const initialState = {
      cart: []
    }

    const payload = productMock
    const action = {
      type: "ADD_TO_CART",
      payload
    }

    const expected = { cart: [productMock] }

    expect(reducer(initialState, action)).toStrictEqual(expected)

  })

  test('should remove a product from cart', () => {

    const initialState = {
      cart: [productMock]
    }

    const payload = productMock
    const action = {
      type: "REMOVE_FROM_CART",
      payload
    }

    const expected = { cart: [] }

    expect(reducer(initialState, action)).toStrictEqual(expected)

  })

})