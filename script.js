let conteudoFormatado = null

let fileInput = document.querySelector('#arquivo');
let output = document.querySelector('#texto');
let botaoEnviar = document.querySelector('#botaoEnviar')
let resultado = document.querySelector('#textoResultado')

fileInput.addEventListener('change', async () => {
  const [file] = fileInput.files;
    
  if (file) {
        conteudo = await file.text();
        output.innerText = conteudo;
  }
    
  let outputValue = document.querySelector('#texto').value;
  conteudoFormatado = outputValue.split(' ')
});

function hangleGetFormValues() {
  const whatsapp = ["555133711447"] // <========
  const mensagem = `${conteudoFormatado[1]} ${conteudoFormatado[7]} ${conteudoFormatado[8]} ${conteudoFormatado[15]}`;
  
  return {
    mensagem,
    whatsapp,
  }
}


async function dispararMensagem(mensagem, whatsapp){

  const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message"

  const response = await fetch(GZAPPY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "user_token_id": process.env.USER_TOKEN_ID // <= Variável de Ambiente
    },
    body: JSON.stringify({
      instance_id: process.env.INSTANCE_ID, // <= Variável de Ambiente
      instance_token: process.env.INSTANCE_TOKEN, // <= Variável de Ambiente
      message: mensagem,
      phone: whatsapp,
    })
  })

  const data = await response.json() // <====== REVISAR
  console.log(data)
  { msg: 'Messages sent' }
}

botaoEnviar.addEventListener('click', async () => {
  const dados = hangleGetFormValues();
  await dispararMensagem(dados.mensagem, dados.whatsapp)
})
