//Variáveis Globais de Elementos
const botaoAdicionaNomeANomes = document.getElementById('adicionarNome')
const roletaDeNomes = document.getElementById('roleta')
const botaoSortearNomes = document.getElementById('botaoSortearNomes')
const logDeSorteados = document.getElementById('resultado')
const nomesAdicionados = document.getElementById('nomesAdicionados')
    nomesAdicionados.style.display = 'none'

//Variáveis Globais de Sorteio
var nomes = []
    nomes = ["KETLEEN", "VITORIA", "DAVID", "AMANDA"]
var sorteados = []
var sorteado = ""

//Escutadores de Eventos
botaoAdicionaNomeANomes.addEventListener('click', adicionarANomes)
botaoAdicionaNomeANomes.addEventListener('click', mostrarNomes)
botaoSortearNomes.addEventListener('click', sortearNome)

//Funções
function mostrarNomes () {
    nomesAdicionados.style.display = 'block'
    nomesAdicionados.innerHTML = nomes
}

function adicionarANomes () {
    var pessoaNome = document.getElementById('pessoaNome')
    var oNome = pessoaNome.value
    pessoaNome.value = ''

    if (oNome == '') {

    } else {
        oNome = oNome.toUpperCase()
        nomes.push(oNome)
        console.log(nomes)
    }
    pessoaNome.focus()
}

function sortearNome () {
    var sorteandoNomes = setInterval (
        () => {
            logDeSorteados.innerHTML = `
                <p>Sorteando os nomes!!</p>
            `

            var posicao = Math.floor(Math.random()*nomes.length);
            roleta.innerHTML = `
                <p>${String.fromCodePoint(0x1F449)} ${nomes[posicao]}</p>
            `
            sorteado = nomes[posicao]
        },
        100
    )
    var nomeSorteado = setTimeout (
        () => {
            clearInterval(sorteandoNomes)
            setTimeout(
                () => {
                    roleta.innerHTML = ``
                },
                1000
            )
            checarSorteado()
        },
        2500
    )
}

function checarSorteado () {
    var existeSorteado = sorteados.includes(sorteado)

    if (existeSorteado === false) {
        sorteados.push(sorteado)
            logDeSorteados.innerHTML = `
                <p class="ok">O sorteado foi: ${String.fromCodePoint(0x1F449)} ${sorteado}</p>
            `
            if (sorteados.length === nomes.length) {
                setTimeout (
                    () => {
                        logDeSorteados.innerHTML = `
                            <p class="and">Todos já foram sorteados!!!!!!</p>
                        `
                    },
                    1000
                )
            } else {
                setTimeout (
                    () => {
                        logDeSorteados.innerHTML = `
                            <p class="next">Próximo a sortear!!!!</p>
                        `
                    },
                    1000
                )
            }
    } else {
        if (sorteados.length === nomes.length) {
            logDeSorteados.innerHTML = `
                <p class="and">Todos já foram sorteados!!!!!!</p>
            `
        } else {
            sortearNome()
        }
    }

    console.log(sorteados, sorteado)
}