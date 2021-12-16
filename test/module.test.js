const LOADING_TIMEOUT = 20000
jest.setTimeout(LOADING_TIMEOUT)
process.env.PORT = process.env.PORT || 5000
process.env.NODE_ENV = 'production'
process.env.APP_URL = process.env.APP_URL || 'http://localhost'
process.env.NUXT_TELEMETRY_DISABLED = 1

const { Nuxt, Builder } = require('nuxt')

const config = require('./fixture/nuxt.config')

// const url = path => `${process.env.APP_URL}:${process.env.PORT}${path}`

describe('Module', () => {
  let nuxt

  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    // TODO Implement Test
    // const html = await nuxt.renderAndGetWindow(url('/'), {}, { loadingTimeout: LOADING_TIMEOUT })
    // expect(html).toContain('OK!')
  })
})
