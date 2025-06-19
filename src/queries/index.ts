export async function getPuppies() {
  try {
    const response = await fetch(
      "http://react-from-scratch-api.test/api/puppies",
    )
    if (!response.ok) {
      const errorData = await response.json()
      throw errorData
    }
    return await response.json()
  } catch (error) {
    throw error
  }
}
