const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonAsk = document.querySelector('#buttonAsk')





// quais minhas variaveis?
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Rapaz.. to pra dizer q é vdd.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "Cpa sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "A perspectiva não é boa (uma merda).",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Vc é guei",
  "Ai nem eu sei meu nobre",
  "Sinais apontam que sim.",
  "Você já sabe a resposta.."
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == ""){
    alert("Digite sua pergunta..")
    return
  }

  buttonAsk.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"
  const totalRespostas = respostas.length
  //Math.floor aleatorizará qualquer uma das respostas
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  console.log(respostas[numeroAleatorio])

  elementoResposta.innerHTML = pergunta + respostas [numeroAleatorio]

  elementoResposta.style.opacity = 1;
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonAsk.removeAttribute("disabled")
  }, 3000)

}
