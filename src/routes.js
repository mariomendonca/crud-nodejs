const express = require('express')

const PatientsController = require('./controllers/PatientsController')

const routes = express.Router()

routes.get('/patients', PatientsController.index)
routes.get('/patients/:id', PatientsController.getOne)
routes.post('/patients', PatientsController.create)
routes.delete('/patients/:id', PatientsController.delete)

module.exports = routes
