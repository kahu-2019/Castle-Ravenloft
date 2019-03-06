import request from 'supertest'

const testDb = require('../../../server/db/adventures')
const server = require('../../../server/server')

jest.mock('../../../server/db/adventures', () => ({
  getAllAdv: jest.fn(),
  getAdvById: jest.fn()
}))

test('GET /api/v1/allAdventures returns all adventures', () => {
  let expected = true

  testDb.getAllAdv.mockImplementation(() => Promise.resolve(true))
  return request(server).get('/api/v1/allAdventures')
    .expect(200)
    .then(res => {
      let actual = res.body
      expect(actual).toEqual(expected)
    })
})