const healthcheck = app => {
  app.get('/healthcheck', async (req, res) => {
    res.json({ alive: true })
  })
}

module.exports = { healthcheck }
