let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')
let mapa = document.getElementById('mapa')
let botao = document.getElementsByClassName('button')
let nomeok = false
let emailok = false
let assuntook = false


nome.style.width = '25%'
email.style.width = '25%'
assunto.style.width = '25%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeok = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailok = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntook = true
    }
}

function enviar() {
    if (nomeok == true && emailok == true && assuntook == true) {
        alert('formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}