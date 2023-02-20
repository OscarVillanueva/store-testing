export const getData = async (api) => {
  try {
    const res = await fetch(api)
    const response = await res.json()
    return response
  } catch (err) {
    return err
  }
}