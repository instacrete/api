const express = require('express')
require('dotenv-safe').load()
// const jwt = require('jsonwebtoken')

const app = express()
const { routes } = require('./src/routes')

routes(app)

app.listen(3000, () => console.log('Server running on port 3000'))
