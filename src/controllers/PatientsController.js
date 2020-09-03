const connection = require('../database/connection')
const { update } = require('../database/connection')

module.exports = {
  async create(req, res) {
    const {name, email, cpf} = req.body

    await connection('patients').insert({
      name, 
      email, 
      cpf
    })

    return res.json({ cpf })
  }, 

  async index(req, res) {
    const patients = await connection('patients').select('*')

    return res.json(patients)
  },

  async delete(req, res) {
    const { id } = req.params

    await connection('patients')
      .where('id', id)
      .delete()
    
    return res.send('Paciente deletado com sucesso')
  },

  async getOne(req, res) {
    const { id } = req.params
    
    const patient = await connection('patients')
      .where('id', id)
      .select('*')

    return res.json(patient)
  },

  async update(req, res) {
    const { id } = req.params

    const {name, email, cpf} = req.body

    await connection('patients')
      .where('id', id)
      .update({
      name, 
      email, 
      cpf
    })

    return res.json({ cpf })
  }

}