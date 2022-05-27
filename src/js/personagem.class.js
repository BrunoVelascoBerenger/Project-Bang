export default class Personagem {
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

export default function adicionarDano(i) {
    let jogador = jogadores[i]

    jogador.adicionarDano()
    
    exibirJogadoresNaTela(jogadores)
}