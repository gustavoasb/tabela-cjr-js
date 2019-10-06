// informação a ser inserida na tabela
const tableInfo = [
  {
    nome: 'sapo de chocolate (1 unidade)',
    tipo: 'comida',
    valor: -15.50,
  },
  {
    nome: 'prêmio da competição de melhor animorfo',
    tipo: 'prêmio',
    valor: 28.8,
  },
  {
    nome: 'Varinha Nova',
    tipo: 'utilitário',
    valor: -69.69,
  },
  {
    nome: 'Foto da Focátia que se mexe',
    tipo: 'fofo',
    valor: -88.88,
  },
  {
    nome: 'Salário do estágio na loja de doces mágicos',
    tipo: 'salário',
    valor: 450.00,
  },
  {
    nome: 'Nimbus 2000',
    tipo: 'vroom vroom',
    valor: -199.90,
  },
  {
    nome: 'Caixa de Feijões de Todos os Sabores (250g)',
    tipo: 'comida',
    valor: -10.50,
  }
]

// pegando uma referência ao corpo da tabela (onde inserir os itens)
const totalsRow = document.querySelector("#minha-linda-tabela > tbody #tabela-total")

// criando o HTML correspondente
tableInfo
  .map((item, id) => `
    <tr>
      <th scope="row">${id+1}</th>
      <td>${item.nome}</td>
      <td>${item.tipo}</td>
      <td>${item.valor.toFixed(2)}</td>
    </tr>
  `)
  // inserindo o html na posição certa
  .forEach(item => totalsRow.insertAdjacentHTML('beforebegin', item))
