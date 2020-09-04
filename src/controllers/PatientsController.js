const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    const {name, email, cpf} = req.body

    const emailAlreadyExists = await connection('patients').where('email', email).first()
    const cpfAlreadyExists = await connection('patients').where('cpf', cpf).first()
    
    if (!emailAlreadyExists && !cpfAlreadyExists) {
      await connection('patients').insert({
        name, 
        email, 
        cpf
      })

      return res.status(201).json({ cpf }) 
    } else {
      return res.status(400).json({erro: 'E-mail ou cpf ja cadastrado'})
    }
  }, 

  async index(req, res) {
    const patients = await connection('patients').select('*')

    return res.status(200).json(patients)
  },

  async delete(req, res) {
    const { id } = req.params
    const patientExist = await connection('patients').where('id', id).first()

    if (!patientExist) {
      return res.status(400).json({erro: 'Paciente não encontrado'})
    } else {

    await connection('patients')
      .where('id', id)
      .delete()
    
      return res.status(204).send()
    }
  },

  async getOne(req, res) {
    const { id } = req.params
    const patientExist = await connection('patients').where('id', id).first()

    if (!patientExist) {
      return res.status(400).json({erro: 'Paciente não encontrado'})
    }

    const patient = await connection('patients')
      .where('id', id)
      .select('*')

    return res.status(200).json(patient)
  },

  async update(req, res) {
    const { id } = req.params
    const {name, email, cpf} = req.body
    const patientExist = await connection('patients').where('id', id).first()

    if (!patientExist) {
      return res.status(400).json({erro: 'Paciente não encontrado'})
    }


    await connection('patients')
      .where('id', id)
      .update({
      name, 
      email, 
      cpf
    })

      return res.status(200).json({ cpf })
  }
}