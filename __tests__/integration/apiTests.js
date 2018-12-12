const r2 = require('r2')
const ActionHero = require('actionhero')
const ahProcess = new ActionHero.Process()

let url

describe('Local API Integration Tests', () => {
  beforeAll(async () => {
    await ahProcess.start() // Can be set to variable named "api"
    url = `http://localhost:8081/api`
  })
  afterAll(async () => ahProcess.stop())

  describe('--- Images ---', () => {
    // Image uploads successfully when user is authenticated
    test('- should upload successfully when user is authenticated"', async () => {
      const res = await r2.post(`${url}/images/new`, { json: { userName: 'test', password: 'test', data: 'PRETEND_FILE', token: '' } }).json
      console.log(res)
      expect(res.error).toBeUndefined()
    })
  })
})
