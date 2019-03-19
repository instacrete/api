const { healthcheck } = require('./healthcheck')

const routes = app => {
  healthcheck(app)
}

module.exports = { routes }