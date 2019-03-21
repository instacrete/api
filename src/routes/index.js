const { healthcheck } = require('../healthcheck')
const { login } = require('../login')

const routes = app => {
  healthcheck(app)
  login(app)
}

module.exports = { routes }
