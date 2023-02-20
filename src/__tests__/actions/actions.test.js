import actions from '../../actions'
import { productMock } from '../../__mocks__/ProductMock'

describe('Actions', () => {

  test('should add a product to cart', () => {

    const payload = productMock
    const expected = {
      type: "ADD_TO_CART",
      payload
    }

    expect(actions.addToCart(payload)).toStrictEqual(expected)

  })

  test('should remove a product from cart', () => {

    const payload = productMock
    const expected = {
      type: "REMOVE_FROM_CART",
      payload
    }

    expect(actions.removeFromCart(payload)).toStrictEqual(expected)

  })

})