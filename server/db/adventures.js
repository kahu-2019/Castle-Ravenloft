const connection = require('./connection')

function getAllAdv(db = connection) {
  return db('adventures')
}

function getAdvById(id, db = connection) {
  return db('adventures')
    .where('adv_id', id)
}

module.exports = {
  getAllAdv,
  getAdvById
}