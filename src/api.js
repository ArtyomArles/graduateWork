import queryString from 'query-string'

const endpoint = 'http://localhost:8080'

class Api {

  async handleResponse (request) {
    const response = await request
    return await response.json()
  }

  get (path, params, prefix = '') {
    path = params ? `/${prefix}${path}?${queryString.stringify(params)}` : `/${prefix}${path}`
    return this.handleResponse(fetch(`${endpoint}${path}`, {headers: {'Content-Type' : 'application/json'}}))
  }

  post (path, body) {
    path = `/${path}`
    return this.handleResponse(
      fetch(`${endpoint}${path}`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(body)
      })
    )
  }
}

export default new Api()
