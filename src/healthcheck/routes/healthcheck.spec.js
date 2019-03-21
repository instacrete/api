const app = require('express')()
const request = require('supertest')

const { healthcheck } = require('./healthcheck')

describe('Healthcheck route', () => {
  test('It should response the healthcheck method', async () => {
    healthcheck(app)
    const response = await request(app).get('/healthcheck')
    expect(response.statusCode).toBe(200)
  })
})
