var pessoas = []

const botao = document.getElementById('botaoAdicionar')

function criaPessoa (nome, imagem) {
    let pessoa = {
        nome: `${nome}`,
        imagem: `${imagem}`
    }

    return pessoa
}

function listaDePessoas (pessoaObjeto) {
    pessoas.push(pessoaObjeto)
}

function escreverPessoa (pessoa) {
    const resposta = document.getElementById('nomesCadastrados')

    resposta.innerHTML += `
        <div class="nome">
            <img src="${pessoa.imagem}">
            <p>${pessoa.nome}</p>
        </div>
    `
}

botao.addEventListener('click', () => {
    const nomePessoa = document.getElementById('pessoaNome').value
    const imagemPessoa = URL.createObjectURL(document.getElementById('pessoaImagem').files[0])

    console.log(criaPessoa(nomePessoa, imagemPessoa))
    listaDePessoas(criaPessoa(nomePessoa, imagemPessoa))
    escreverPessoa(criaPessoa(nomePessoa, imagemPessoa))
})