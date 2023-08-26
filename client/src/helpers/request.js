async function sendRequest(url, method, options) {
  try {
    const response = await fetch(url, {
      // eslint-disable-next-line object-shorthand
      method: method,
      ...options,
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Network error occurred')
  }
}

sendRequest.defaultProps = {
  method: 'GET',
}

export default sendRequest
