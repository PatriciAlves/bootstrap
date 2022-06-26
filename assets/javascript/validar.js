var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var mensagem = document.querySelector('#mensagem')
var nomeOk = false
var emailOk = false

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length<2){
        txtNome.innerHTML = 'Informe um nome válido'
        txtNome.style.color='red'
        nomeOk = false
    }else{
        txtNome.innerHTML = '❤'
        txtNome.style.color='red' 
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
        txtEmail.innerHTML = '❤'
        txtEmail.style.color='red' 
        emailOk = true
    }else{
        txtEmail.innerHTML = 'Informe um email válido'
        txtEmail.style.color='red' 
        emailOk = false
    }
}
    function enviar(){
        if(nomeOk == true){
            alert('Mensagem enviada com sucesso!')
        }else{
            alert('Preencha os campos corretamente 😪')
        }
    }
    function validaMensagem() {
        let txtMensagem = document.querySelector('#txtMensagem')
        if (mensagem.value.length < 15 || mensagem.value.length > 500) {
            txtMensagem.innerHTML = 'Escreva uma mensagem com no minimo 15 caracteres 😪'
            txtMensagem.style.color = 'red'
            assuntoOk = false
        } else {
            txtMensagem.innerHTML = "❤"
            txtMensagem.style.color = 'red'
            assuntoOk = true
        }
    }
    function enviar() {
        if (nomeOk == true && emailOk == true && assuntoOk == true) {
            alert('Mensagem enviada com sucesso')
        } else {
            alert('Você precisa preencher os campos corretamente.')
        }
    }