class Personagem {
    constructor(nome,pontosVida,imagem) {
        this.nome = nome
        this.pontosVida = pontosVida
        this.imagem = imagem
    }

    adicionarDano() {
        if(this.verificarMorte()) {
            alert(`O jogador: ${this.nome} morreu!`)
        } else {
            this.pontosVida--
        }
    }

    adicionarCura() {
        if(this.pontosVida >= 7) {
            console.log(this.pontosVida);
            alert("Você não pode curar mais que o limite máximo de vida!")
        } else {
            this.pontosVida++
        }
    }

    adicionarDinamite() {
        if(this.verificarMorte()) {
            alert(`O jogador: ${this.nome} morreu!`)
        } else {
            this.pontosVida -= 3
        }
    }

    verificarMorte() {
        if(this.pontosVida <= 0) {
            return true
        } else {
            return false
        }
    }
}

//import Personagem from "./personagem.class.js"

const willy = new Personagem("Willy The Kid",7,"WillyTheKid.png")
const slab = new Personagem("Slab The Killer",7,"SlabTheKiller.png")
const janet = new Personagem("Calamity Janet",7,"CalamityJanet.png")
const elena = new Personagem("Elena Fuente",7,"ElenaFuente.png")
const jose = new Personagem("Jose Delgado",7,"JoseDelgado.png")
const apache = new Personagem("Apache Kid",7,"ApacheKid.png")
const molly = new Personagem("Molly Stark",7,"MollyStark.png")
const vera = new Personagem("Vera Custer",7,"VeraCuster.png")

let personagens = [willy,slab,janet,elena,jose,apache,molly,vera]
let jogadores = []

const qntAcoes = ["atirar", "beer", "dinamite", "indios"]
const imgAcoes = ["bang.png","beer.png","dinamite.png","indios.png"]


const adicionarJogador = document.getElementById('adicionar-jogador')
const sortearCarta = document.getElementById('sortear-carta')
const reiniciarJogo = document.getElementById('reiniciar-jogo')

function redefineJogadores() {
    const willy = new Personagem("Willy The Kid",7,"WillyTheKid.png")
    const slab = new Personagem("Slab The Killer",7,"SlabTheKiller.png")
    const janet = new Personagem("Calamity Janet",7,"CalamityJanet.png")
    const elena = new Personagem("Elena Fuente",7,"ElenaFuente.png")
    const jose = new Personagem("Jose Delgado",7,"JoseDelgado.png")
    const apache = new Personagem("Apache Kid",7,"ApacheKid.png")
    const molly = new Personagem("Molly Stark",7,"MollyStark.png")
    const vera = new Personagem("Vera Custer",7,"VeraCuster.png")

    personagens = [willy,slab,janet,elena,jose,apache,molly,vera]
}

function verificarLetra(qntJogadores) {
    if(isNaN(qntJogadores)) {
        return true
    }
}

function verificarQntJogadores(qntJogadores, campoQntJogadores) {

    if(jogadores.length > 0) {
        alert("Não é possível adicionar mais jogadores, pois o jogo já começou!")
    } else {
        if(qntJogadores < 2 || qntJogadores > 8) {
            alert("É necessário digitar um número de 2 a 8!")
        } else {

            for(let i = 0; i < qntJogadores; i++) {
                jogadores[i] = personagens[i]
            }
    
            exibirJogadoresNaTela(jogadores)
            campoQntJogadores.value = ""

        }
    } 
}

adicionarJogador.addEventListener('click', (e) => {
    e.preventDefault()
    let campoQntJogadores = document.getElementById("jogador")
    let qntJogadores = campoQntJogadores.value.toLowerCase()

    if(verificarLetra(qntJogadores)) {
        alert('Não é permitido o uso de letras!')
    } else {
        verificarQntJogadores(qntJogadores,campoQntJogadores)
    }  
})

function adicionarDano(i) {
    let jogador = jogadores[i]

    jogador.adicionarDano()
    
    exibirJogadoresNaTela(jogadores)
}

function adicionarCura(i) {
    let jogador = jogadores[i]

    jogador.adicionarCura()
    
    exibirJogadoresNaTela(jogadores)
}

function adicionarDinamite(i) {
    let jogador = jogadores[i]
    
    jogador.adicionarDinamite()
    
    exibirJogadoresNaTela(jogadores)
}

function exibirJogadoresNaTela(jogadores) {
    let html = ""

    jogadores = eliminaJogador(jogadores)

    for(let i = 0; i < jogadores.length; i++) {
        html += `<tr><td><img src=./src/images/${jogadores[i].imagem}></td>`
        html += `<td>🧔 ${jogadores[i].nome} 🪒</td>`
        html += `<td>${jogadores[i].pontosVida} 💖</td>`
        html += `<td><button onClick= adicionarDano(${i})>🔫 Tomar Dano 🔫</button></td>`
        html += `<td><button onClick= adicionarCura(${i})>🍺 Beber 🍺</button></td>`
        html += `<td><button onClick= adicionarDano(${i})>🏹 Índios 🏹</button></td>`
        html += `<td><button onClick= adicionarDinamite(${i})>🧨 Dinamite 🧨</button></td></tr>`
    }

    let tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

sortearCarta.addEventListener('click', (e) => {
    e.preventDefault()

    if(jogadores.length <= 0) {
        alert("Só é possível sortear uma carta após começar o jogo!")
    } else {
        let valorAcao = parseInt(Math.random() * qntAcoes.length)
        exibeCarta(valorAcao)
    }   
})

function exibeCarta(valorAcao) {
    let divCartaSorteada = document.getElementById('carta-sorteada')
    let html = ""

    console.log(valorAcao);

    switch(valorAcao) {
        case 0:
            //mostrar imagem do tiro
            html = `<img src=./src/images/${imgAcoes[valorAcao]}>` 
            break
        case 1:
            //mostrar imagem da cerveja
            html = `<img src=./src/images/${imgAcoes[valorAcao]}>` 
            break
        case 2:
            //mostrar imagem da dinamite
            html = `<img src=./src/images/${imgAcoes[valorAcao]}>` 
            break
        case 3:
            //mostrar imagem do indio
            html = `<img src=./src/images/${imgAcoes[valorAcao]}>` 
            break
        default:
            //mostrar imagem do indio
            html = ""
            break
    }

    divCartaSorteada.innerHTML = html
}

function eliminaJogador(jogadores) {

    for(let i = 0; i < jogadores.length;i++) {
        if((jogadores[i].verificarMorte())) {
            alert(`O jogador: ${jogadores[i].nome} morreu!`)
            jogadores.splice(i,1)
        }
    }
    return jogadores
}

function verificaVencedor(jogador) {
    let vencedor = jogador
    if(jogadores.length == 1) {
        alert(`O jogador vencedor foi: ${vencedor.nome}`)
    }
}

reiniciarJogo.addEventListener('click', (e) => {
    e.preventDefault()

    redefineJogadores()
    exibirJogadoresNaTela(jogadores = [])
    exibeCarta("")  
})

