class heroi{
	constructor(nome, idade, classe, ataque){
    this.nome = nome
    this.idade = idade
    this.classe = classe
    this.ataque = ataque
    }
    atacar(){
    console.log(`O ${this.classe} atacou usando ${this.ataque}.`)
    }
    informacoes(){
    console.log(`O ${this.classe} tem ${this.idade} anos e seu nome é ${this.nome}.`)
    }
}
let mago = new heroi("Merlim", 120, "mago", "magia")
let guerreiro = new heroi("Guts", 37, "guerreiro", "espada")
let monge = new heroi("Wukong", 35, "monge", "artes marciais")
let ninja = new heroi("Minato", 24, "ninja", "shuriken")
mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()