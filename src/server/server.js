const app = require('express')()

const start = () => {
  app.listen(port, (err) => {
    if (err) {
      return Promise.reject(new Error('There was an error when starting application'));
    }

    return true;
  })
}

module.exports = { start }
