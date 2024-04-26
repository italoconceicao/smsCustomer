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
    
    console.log(conteudo); // <= CONFERENCIA
    let outputValue = document.querySelector('#texto').value;
    conteudoFormatado = outputValue.split(' ')


    console.log(conteudoFormatado) // <= CONFERENCIA
});

botaoEnviar.addEventListener('click', () => {

  resultado.innerText = `${conteudoFormatado[1]} ${conteudoFormatado[7]} ${conteudoFormatado[8]} ${conteudoFormatado[15]}`;
})






// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// const destinatario = null;

// const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message"

// const response = await fetch(GZAPPY_URL, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     "user_token_id": '$USER_TOKEN_ID'
//   },
//   body: JSON.stringify({
//     instance_id: '$INSTANCE_ID',
//     instance_token: '$INSTANCE_TOKEN',
//     message: [`Firmeza, irmão?!
// chegou ao nosso conhecimento que voce ta em débito com a Caixa Ecônomica, ta ligado
// e acontece que ficou feio pra tu
// e seguinte, tu vai te que ta fazendo uma pix pra gente pra gente ta resolvendo isso ae
//     `],
//     phone: ["5551982616617"]
//   })
// })

// const data = await response.json()
// console.log(data)
// { msg: 'Messages sent' }
