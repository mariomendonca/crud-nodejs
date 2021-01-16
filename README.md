*Crud desenvolvido em nodejs* 
- Neste projeto utilizei além do nodejs, usei o Express para criar a API, Knex.js como query builder e  sqlite3 no banco de dados.

*Como executar o projeto*
- ter node instalado
- no terminal dar comando <b>npm install</b> ou <b>yarn install</b> para instalar as dependências
- depois dar comando <b>npx knex migrate:latest</b> ou <b>yarn knex migrate:latest</b> para criar as tabelas no banco de dados

<h4>Rotas</h4>

*Rota GET api/patients*

- Rota para listar todos os pacienetes já cadastrados

*Rota GET api/patients/:id*

- Rota para listar um paciente através do seu id, que é recebido na url 
- Caso não exista paciente com esse id, retorna uma mensagem de erro

*Rota POST api/patients*

- Rota de criação de pacientes através de um json
- Caso o E-mail ou cpf ja esteja cadastrado em outro paciente, retorna uma mensagem de erro
- Caso o cpf nao tenha 11 dígitos, retorna uma mensagem de erro 

*Rota PUT api/patients/:id*

- Rota de atualização de pacientes através de um id recebido na url e envio de json com novos dados
- Caso o paciente não exista, retorna mensagem de erro
- Caso o cpf nao tenha 11 dígitos, retorna uma mensagem de erro 

*Rota DELETE api/patients/:id* 

- Rota para excluir pacientes através de um id recebido na url
- Caso o paciente não exista, retorna mensagem de erro
