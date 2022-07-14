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
let divtext = document.createElement('div')
divtext.classList.add('text')
content.appendChild(divtext)
divtext.innerHTML = texto
*/

let cartas = 0;
while (cartas <= 100) {
    let container = document.querySelector('#inicio')
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

    cartas++;
}



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
    dropzonenao.classList.add('Nao')
    dropzonesim.classList.add('Sim')

    this.classList.add('Movendo')
}

function drag() {
    //log('CARD: Está se movendo')
}

function dragend() {
    //log('CARD: Parou de se mover')
    dropzonenao.classList.remove('Nao')
    dropzonesim.classList.remove('Sim')

    this.classList.remove('Movendo')
}

/** Dropzones */

var dropzonesim = document.querySelector('#sim')
var dropzonenao = document.querySelector('#nao')


/** Habilita o movimento para o Dropzone "Sim" */
dropzonesim.addEventListener('dragenter', dragenter)
dropzonesim.addEventListener('dragover', dragover)
dropzonesim.addEventListener('dragleave', dragleave)
dropzonesim.addEventListener('drop', drop)

/**Habilita o movimento para o Dropzone "Não" */
dropzonenao.addEventListener('dragenter', dragenter)
dropzonenao.addEventListener('dragover', dragover)
dropzonenao.addEventListener('dragleave', dragleave)
dropzonenao.addEventListener('drop', drop)


function dragenter() {
    //log('DROPZONE: Entrou na zona')

}

function dragover() {
    //log('DROPZONE: Está na zona')

    dropzonenao.classList.add('Nao')
    dropzonesim.classList.add('Sim')

    const cardArrastado = document.querySelector('.Movendo')

    this.appendChild(cardArrastado)
}

function dragleave() {
    //log('DROPZONE: Saiu da zona')
    dropzonenao.classList.remove('Nao')
    dropzonesim.classList.remove('Sim')
}

function drop() {
    //log('DROPZONE: Dropou na zona')
    dropzonenao.classList.remove('Nao')
    dropzonesim.classList.remove('Sim')
}

let dropzoneinicio = document.querySelector('#inicio')


/** Observa quando o DOM é modificado */

/** 
 var target = document.querySelector('[data-js="sim"]');
 var observer = new MutationObserver(handleMutationObserver);
 var config = { childList: true };
 
 function handleMutationObserver(mutations) {
     mutations.forEach(function (mutation) {
         console.log(mutation.type);
        });
    }
    
    observer.observe(target, config);
*/

/**
 * 
 var target = document.querySelector('[data-js="inicio"]');
 var observer = new MutationObserver(handleMutationObserver);
 var config = { childList: true };
 
 function handleMutationObserver(mutations) {
     mutations.forEach(function (mutation) {
         console.log(mutation.type);
        });
    }
    observer.observe(target, config);
    observer.disconnect
    */