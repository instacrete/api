const healthcheck = app => {
  app.get('/', async (req, res) => {
    res.json({ alive: true })
  })
}

module.exports = { healthcheck }
