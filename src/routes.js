const express = require('express')

const PatientsController = require('./controllers/PatientsController')

const routes = express.Router()

routes.get('/patients', PatientsController.index)
routes.get('/patients/:id', PatientsController.getOne)
routes.post('/patients', PatientsController.create)
routes.put('/patients/:id', PatientsController.update)
routes.delete('/patients/:id', PatientsController.delete)

module.exports = routes
