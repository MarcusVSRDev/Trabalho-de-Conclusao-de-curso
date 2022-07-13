/**<div class="card" draggable="true">
    <div class="content">
        <img src="img/Peso1e2.png" alt="">
            <p class="dont-break-out">Fingindo criar uma perguntar para testar como fica a formatação do
                texto no card para depois
                editar no css.</p>
    </div>
</div>*/

function log(mensagem) {
    console.log(mensagem)
}
/**
let container = document.querySelector('#nao')
let card = document.createElement('div')
card.classList.add('card')
card.draggable = true
container.appendChild(card)

let content = document.createElement('div')
content.classList.add('content')
card.appendChild(content)

let img = document.createElement('img')
img.src = 'img/peso1e2.png'
content.appendChild(img)

let texto = 'Fingindo criar uma perguntar para testar como fica a formatação do texto no card para depois editar no css.'
let p = document.createElement('p')
content.appendChild(p)
p.innerHTML = texto
*/

let container = document.querySelector('#nao')
let card = document.createElement('div')
card.classList.add('card')
card.draggable = true
container.appendChild(card)

let content = document.createElement('div')
content.classList.add('content')
card.appendChild(content)

let img = document.createElement('img')
img.src = 'img/peso1e2.png'
content.appendChild(img)

let texto = 'Fingindo criar uma perguntar para testar como fica a formatação do texto no card para depois editar no css.'
let divtext = document.createElement('div')
divtext.classList.add('text')
content.appendChild(divtext)
divtext.innerHTML = texto

/**
let semana = 1
let money = 3000
let pont = document.querySelector('#pontuação')
pont.innerHTML = semana + ' Semanas'
let din = document.querySelector('#dinheiro')
din.innerHTML = 'R$ ' + money
*/


const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

/** Cards */

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    //log('CARD: Começou a se mover')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('Movendo')
}

function drag() {
    //log('CARD: Está se movendo')
}

function dragend() {
    //log('CARD: Parou de se mover')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('Movendo')
}

/** Dropzones */

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    //log('DROPZONE: Entrou na zona')

}

function dragover() {
    //log('DROPZONE: Está na zona')

    this.classList.add('Over')

    const cardArrastado = document.querySelector('.Movendo')

    this.appendChild(cardArrastado)
}

function dragleave() {
    //log('DROPZONE: Saiu da zona')
    this.classList.remove('Over')
}

function drop() {
    //log('DROPZONE: Dropou na zona')
    this.classList.remove('Over')
}
