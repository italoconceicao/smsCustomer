let fileInput = document.querySelector('#arquivo');
let output = document.querySelector('#texto');
var conteudoFormatado = []

fileInput.addEventListener('change', async () => {
    const [file] = fileInput.files;
    
    if (file) {
        conteudo = await file.text();
        output.innerText = conteudo;
    }
    
    conteudoFormatado = conteudo.split(' ');
});
