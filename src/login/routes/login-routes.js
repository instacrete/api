const { auth } = require('../controller/login-controller')

const login = app => {
  app.post('/login', async (request, response) => {
    const { body } = request
    response.json(auth(body))
  })
}

module.exports = { login }
