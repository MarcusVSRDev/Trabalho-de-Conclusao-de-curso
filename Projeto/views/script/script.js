function log(mensagem) {
    console.log(mensagem)
}


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