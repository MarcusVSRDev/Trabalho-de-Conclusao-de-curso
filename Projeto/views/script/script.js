var j = -1;
var y = [];
var i = 0;
var k = 0;

/**
<div class="card" draggable="true">
    <div class="content">
        <img src="img/Peso1e2.png" alt="">
            <p class="dont-break-out">Fingindo criar uma perguntar para testar como fica a formatação do
                texto no card para depois
                editar no css.</p>
    </div>
</div>
*/

function log(mensagem) {
    console.log(mensagem)
}
/**
    let i = 0
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

    let texto = []
    let divtext = document.createElement('div')
    divtext.classList.add('text')
    content.appendChild(divtext)
    divtext.innerHTML = texto[i]
*/

let cartas = 0;
while (cartas < 3) {
    let texto = ['O aumento na qualidade de imagem das camerâs para uso no CFTV está tirando a qualidade da internet do local. O que acha de um link secundario?',
        'Eu notei que a qualidade dos nossos equipamentos já está um pouco ultrapassada, poderiamos renovar os nossos equipamentos por novos mais atualizados, o que acha?',
        'Com a chegada de novos funcionarios, será necessários novos equipamentos... Compramos novos equipamentos ou revezamos o que já temos?']

    /** Sorteia um número aleatorio de acordo com o tamanho do array texto*/
    i = Math.floor(Math.random() * texto.length)

    let container = document.querySelector('#inicio')
    let card = document.createElement('div')
    card.classList.add('card')
    card.draggable = true
    container.appendChild(card)

    let content = document.createElement('div')
    content.classList.add('content')
    card.appendChild(content)

    let img = document.createElement('img')
    content.appendChild(img)

    let divtext = document.createElement('div')
    divtext.classList.add('text')
    content.appendChild(divtext)

    /** Peso 3 */
    if (i >= 21 && i <= 30) {
        img.src = "img/peso3.png"
        divtext.innerHTML = texto[i]
    }

    /** Peso 2 */
    else if (i >= 10 && i <= 20) {
        img.src = "img/peso2.png"
        divtext.innerHTML = texto[i]
    }

    /** Peso 1*/
    else if (i >= 0 && i <= 9) {
        img.src = "img/peso1.png"
        divtext.innerHTML = texto[i]
    }

    cartas++;
    y[cartas] = i;
}

for (x = 1; x < y.length; x++) {
    console.log(y[x]);
}
/**
 * Sorteia um número aleatório  V
 * Dependendo de qual número for, a pergunta vai ter um peso (0 a 9, peso 1, 10 a 20, peso 2, 21 a 30, peso 3) V
 * Como as perguntas tem pesos diferentes, a pontuação pode aumentar de acordo com a sua decisão e o dinheiro pode diminuir drasticamente V
 * Se o dinheiro chegar a 0 = Gameover V
 * Como fazer para reconhecer quando um item é posto dentro da div
 * Reconhecer quando o card é colocado no sim ou não
 * Gerar mais cards caso necessário
 * 
 */

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
let semana = 0
let money = 50000
let pont = document.querySelector('#pontuação')
pont.innerHTML = semana + ' Semana(s)'
let din = document.querySelector('#dinheiro')
din.innerHTML = 'R$ ' + money
var h = 1;

var observersim = new MutationObserver(mutations => {
    setTimeout(() => {
        if (j != 1) {
            mutations.forEach(record => {
                j = 1;
                console.log("A carta foi para o sim " + j);
                pont.innerHTML = semana + ' Semana(s)'
                console.log(y[h])
                if (y[h] >= 0 && y[h] <= 9) {
                    money -= 1000;
                    din.innerHTML = 'R$ ' + money
                }
                if (y[h] >= 10 && y[h] <= 20) {
                    money -= 3000
                    din.innerHTML = 'R$ ' + money
                    semana++;
                }
                if (y[h] >= 21 && y[h] <= 30) {
                    money -= 10000
                    din.innerHTML = 'R$ ' + money
                    semana++;
                    semana++;
                }
                if (semana == 30) {
                    window.alert('Parabéns! Você terminou o jogo')
                }
                if (money == 0) {
                    window.alert('Gameover')
                }
                h++;
            })
        }
    }, 50);
});

observersim.observe(dropzonesim, {
    childList: true
});


var observernao = new MutationObserver(mutations => {
    setTimeout(() => {
        if (j != 0) {
            mutations.forEach(record => {
                j = 0;
                console.log("A carta foi para o não " + j)
                pont.innerHTML = semana + ' Semana(s)'
                console.log(y[h])
                if (y[h] >= 0 && y[h] <= 9) {
                    money += 500;
                    din.innerHTML = 'R$ ' + money
                }
                if (y[h] >= 10 && y[h] <= 20) {
                    money += 1000
                    din.innerHTML = 'R$ ' + money
                }
                if (y[h] >= 21 && y[h] <= 30) {
                    money += 4000
                    din.innerHTML = 'R$ ' + money
                }
                if (semana == 28) {
                    window.alert('Parabéns! Você terminou o jogo')
                }
                if (money == 0) {
                    window.alert('Gameover')
                }
                h++;
            })
        }
    }, 50);
})

observernao.observe(dropzonenao, {
    childList: true
})

