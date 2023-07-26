async function sendRequest(url, method, options) {
  const response = await fetch(url, {
    // eslint-disable-next-line object-shorthand
    method: method,
    ...options,
  })
  const result = await response.json()
  return result
}

sendRequest.defaultProps = {
  method: 'GET',
}

export default sendRequest
