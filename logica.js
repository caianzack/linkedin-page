// let nome = prompt('qual seu nome: ')
// let ano = parseInt(prompt('qual sua idade'))
// let linguagem = prompt('qual linguagem de programação você esta estudando: ')

// alert(`Ola ${nome}, você tem ${ano} anos e ja esta aprendendo ${linguagem}`)

// let continuar = prompt('Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.')
// if (continuar == '1'){
//     alert('Muito bom! Continue estudando e você terá muito sucesso.')
// } else {
//     if (continuar == '2'){
//     alert('Ahh que pena... Já tentou aprender outras linguagens?')
// }
// }


// const elemento = document.querySelector('texto')

// elemento.addEventListener('click', (evento) => {
//     elemento.innerHTML = 'fui clicdo'
// })


// let nome = document.getElementById('texto')
//     if (nome === nome){
//         document.getElementById('texto').innerText = 'ola mundo'
//     }

// let nome = document.querySelector('texto')
//     if (nome == nome){
//         document.getElementById('texto').innerText = 'Rei do norte'
//     }

// alert('bem vindo ao jogo de adivinhção')
// let min = parseInt(prompt('dig o numero minimo: '))
// let max = parseInt(prompt('diga o numero maximo: '))
// let tentativas = parseInt(prompt('diga a quantidade de tentativas: '))

// const numeroAdivinhacao = Math.floor(Math.random() * (max - min + 1) + min);
// let chute = "";
// let acertou = false;

// for(let contador = 0; contador < tentativas; contador++){    
//     chute = prompt(`tente adivinhar o numero de ${min} a ${max}`);
//     if(chute == numeroAdivinhacao){
//         alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
//         acertou = true;
//         break;
//     }
//     alert("Errado!");
// }
// if(!acertou){
//     alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
// }



// let máximo = 10
// let mínimo = 1
// let tentativas = 3

// let chute = ""
// let acertou = false
// for(let contador = 0; contador < tentativas; contador++){
//     chute = prompt('tente adivinhar o numero de 1 a 10')
//     if (chute == sortear()){
//         alert(`parabens você acertou o numero secreto era ${sortear()}`)
//         acertou = true
//         break
//     }
//     alert('errado')
// }
// if (!acertou){
//     alert(`você errou o numero era ${sortear()}`)
// }
// function sortear(){
//     return Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
// }
// console.log(sortear())

// let laticinius = []
// let frutas = []
// let congelados = []
// let doce = []
// let itens =''
// let categoria = ''

// alert('bem vindo as compras')
// pergunta = prompt('você quer realizar as compras: s/n')

// while(pergunta != 'n'){
//     pergunta = prompt('você quer realizar as compras: s/n')
//     while(pergunta != 's' && pergunta != 'n'){
//         pergunta = prompt('você quer realizar as compras: s/n')
//     }

//     if (pergunta === 'n'){
//         break
//     }

//     itens = prompt('Qual comida você deseja comprar: ')
//     categoria = prompt('qual categoria você gostaria de colocar a compra: 1 ="laticinius", 2 ="frutas", 3 ="congeldos, 4 ="doce" ')
//     if(categoria === '1'){
//         laticinius.push(itens)
//     } else if(categoria === '2'){
//         frutas.push(itens)
//     } else if(categoria === '3'){
//         congelados.push(itens)
//     } else if(categoria === '4'){
//         doce.push(itens)
//     } else {
//         alert('categoria não definida')
//     }
// }
// alert(`Lista de compras:\n  laticinius: ${laticinius}\n  frutas: ${frutas}\n  congelados: ${congelados}\n  doces: ${doce}`)

// const tecla = document.getElementById('texto')

// const conteiner = []
// let number = ''

// function numeros (){
//     number = parseInt(prompt('digite um numero: '))
//     if (number > 0){
//         console.log(`o numero ${number} é positivo`)
//     } else if(number < 0){
//         console.log(`o numero ${number} é negativo`)
//     } else if (number === 0){
//         console.log('o numero é neutro : 0')
//     }
// }
// function tamanho(){
    
// }

// addEventListener('click', (evento) => {
//     tecla.onclick = evento
//     console.log(numeros())
// })

let res = document.getElementById('pesquisa').value
addEventListener('click')
alert (res)























