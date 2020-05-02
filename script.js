
const frase = document.getElementById('centro__frase')
const botao = document.getElementById('centro__botao')

let clicou = false

botao.onclick = () => {
  let conteudoFrase = ''
  let conteudoBotao = ''
  
  if (clicou) {
    conteudoFrase = 'Aquela fofa &lsaquo;3'
    conteudoBotao = '&raquo; NÃO É! &laquo;'
    clicou = false
  } 
  else {
    conteudoFrase = 'Ela é. Você precisa aceitar :&#41;'
    conteudoBotao = '&raquo; Ok ;-; &laquo;'
    clicou = true
  }

  frase.innerHTML = conteudoFrase
  botao.innerHTML = conteudoBotao
}
