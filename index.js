let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
const password = [];
let genPass = "";
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
    console.log(genPass)
    genPass = ""
    password.splice(0, password.length)
}
