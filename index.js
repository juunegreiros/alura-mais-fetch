const apiUrl = 'http://localhost:5000/clientes'
const listaClientes = document.querySelector('#listaClientes')

fetch(apiUrl)
  .then(resposta => resposta.json())
  .then(clientesApi => clientesApi.forEach(cliente => 
    listaClientes.innerHTML += `<li>nome: ${cliente.nome} cpf: ${cliente.cpf} </li>`)
  )
  .catch(erro => listaClientes.innerHTML = `<p>Erro :(</p>`)