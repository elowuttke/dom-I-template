const userName = document.getElementById("nome").value
console.log(userName)
// nome.value = ""

const userAdress = document.getElementById("endereco").value
console.log(userAdress)
// endereco.value = ""

const userEmail = document.getElementById("email").value
console.log(userEmail)
// email.value = ""

const limpaInputs = () => {
    nome.value = ""
    endereco.value = ""
    email.value = ""
}