
let passwords = []
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
let genPass = "";
let password = []

let listEl = [
    document.getElementById("input-1"),
    document.getElementById("input-2"),
    document.getElementById("input-3"),
    document.getElementById("input-4")

]

let button = document.getElementById("password-btn")
button.addEventListener("click", function() {
    passwords.splice(0, passwords.length)
    for (let i=0; i < 4; i++) {
        createPassword()
    }
    for (let x = 0; x < passwords.length; x++) {
        listEl[x].value = passwords[x]
    }
})

function createPassword() {
    for (let i = 0; i < 17; i++) {
    let x = Math.floor(Math.random() * charset.length)
    password.push(charset[x])
    }
    generatePassword()
}

function generatePassword() {
    for (let g = 0; g < password.length; g++) {
            genPass += password[g]
        }
        passwords.push(genPass)
        genPass = ""
        password.splice(0, password.length)
}

