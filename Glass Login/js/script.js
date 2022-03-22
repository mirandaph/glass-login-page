let user = document.getElementById('username')
let email = document.getElementById('email')
let pass = document.getElementById('password')
let btn = document.querySelector('#btn')

function login() {
    btn.addEventListener("click", function(e){
        e.preventDefault()
    })

    let userLen = user.value.length
    let emailLen = email.value.length
    let passLen = pass.value.length

    if (userLen >= 1 && emailLen >= 1 && passLen >= 1) {
        window.location.href = "sucess.html"
    }

    console.log(userLen)
    console.log(emailLen)
    console.log(passLen)
}