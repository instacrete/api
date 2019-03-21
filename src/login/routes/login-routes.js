const { auth } = require('../controller/login-controller')

const login = app => {
  app.post('/login', async (req, res) => {
    const response = auth(req)
    res.json(response)
  })
}

module.exports = { login }
