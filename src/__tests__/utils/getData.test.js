import { getData } from '../../utils/getData';

global.fetch = require("jest-fetch-mock");

describe('Test the fetch API', () => {

  beforeEach(() => {
    fetch.resetMocks()
  })

  test('should get data from API', async () => {

    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }))

    const { data } = await getData("https://example.com")
    expect(data).toEqual("12345")

    expect(fetch.mock.calls[0][0]).toEqual('https://example.com')

  })

})