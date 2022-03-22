// Variáveis
let user = document.getElementById('username')
let email = document.getElementById('email')
let pass = document.getElementById('password')
let btn = document.querySelector('#btn')
let errorMessage = document.querySelector('.msg')

// Redirecionamento página de sucesso
function login() {
    let userLen = user.value.length
    let emailLen = email.value.length
    let passLen = pass.value.length

    if (userLen >= 1 && emailLen >= 1 && passLen >= 1) {
        window.location.href = "sucess.html"
    }
}

// Pressionar botão com a key "Enter"
document.addEventListener("keypress", function(i){
    if(i.key == "Enter"){
        btn.click()
    }
}) 

// Validação
btn.addEventListener('click', function(e) {
    let userVal = user.value
    let emailVal = email.value
    let passVal = pass.value
    // Mensagem de validação
    if (userVal == '' || emailVal == '' || passVal == '') {
        errorMessage.textContent = "Please, fill all the fields correctly!"
        errorMessage.classList = 'error'
    }
    // Validação input
    if (userVal == '') {
        user.classList = 'errorInput'
    } else {
        user.classList.remove = 'errorInput'
    }
    
    if (emailVal == '') {
        email.classList = 'errorInput'
    }
    
    if (passVal == '') {
        pass.classList = 'errorInput'
    }

    // Validação Email
    if (emailVal.indexOf("@") == -1 || emailVal.indexOf(".") == -1 || emailVal.indexOf(".") == -1 || emailVal.indexOf("@") == -1 ) {
        email.classList = 'errorInput'
    }
})
