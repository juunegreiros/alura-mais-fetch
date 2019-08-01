const apiUrl = 'http://localhost:5000/clientes'
const clientes = [{nome: 'teste', cpf: '00000000000'}]
const listaClientes = document.querySelector('#listaClientes')

fetch(apiUrl)
  .then(resposta => resposta.json())
  .then(clientesApi => clientesApi.forEach(cliente => clientes.push({
    nome: cliente.nome,
    cpf: cliente.cpf
  })))

  clientes.forEach(cliente => listaClientes.innerHTML += `<li>nome: ${cliente.nome} cpf: ${cliente.cpf} </li>`)