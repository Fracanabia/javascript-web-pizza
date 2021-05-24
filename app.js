const botoesDecrementa = document.querySelectorAll(".btn-decrementa")
for (let botao of botoesDecrementa) {
  botao.addEventListener('click', decrementa)
  function decrementa() {
    const item = botao.closest('.item')
    const input = item.querySelector('.quantidade')
    if (input.value > 0) {
      input.value--
      const preco = pegaPrecoItem(item)
      adicionaAoTotal(-preco)
    }
  }
}

const botoesIncrementa = document.querySelectorAll(".btn-incrementa")
for (let botao of botoesIncrementa) {
  botao.addEventListener('click', incrementa)
  function incrementa() {
    const item = botao.closest('.item')
    const input = item.querySelector('.quantidade')
    input.value++
    const preco = pegaPrecoItem(item)
    adicionaAoTotal(preco)
  }
}

function pegaPrecoItem(item) {
  const precoItem = item.querySelector('.preco-item')
  return Number(precoItem.textContent)
}

function adicionaAoTotal(preco) {
  const total = document.querySelector('#total')
  total.textContent = preco + Number(total.textContent)
}

const formPedido = document.forms.pedido
formPedido.addEventListener('submit', (event) => {

  let contador = 0
  const inputs = formPedido.querySelectorAll('input.quantidade')
  for (let input of inputs) {
    if (input.value > 0) {
      contador++
    }
  }
  if (contador === 0) {
    alert('Deve ter pelo menos 1 pizza no pedido')
    event.preventDefault()
  }

})