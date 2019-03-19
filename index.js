const express = require('express')

const app = express()
const { routes } = require('./src/routes')

routes(app)

app.listen(3000, () => console.log('Server running on port 3000'))
