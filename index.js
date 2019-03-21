const express = require('express')
const bodyParser = require('body-parser')
require('dotenv-safe').load()
// const jwt = require('jsonwebtoken')

const app = express()
const { routes } = require('./src/routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

app.listen(3000, () => console.log('Server running on port 3000'))
