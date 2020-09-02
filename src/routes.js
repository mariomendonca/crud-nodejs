const express = require('express')

const connection = require('./database/connection')

const routes = express.Router()

routes.post('/patients', async (req, res) => {
  const {name, email, cpf} = req.body

  await connection('patients').insert({
    name, 
    email, 
    cpf
  })

  return res.json({ cpf })
})

module.exports = routes
