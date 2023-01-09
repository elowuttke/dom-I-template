console.log(document.getElementById("paragrafo").innerHTML)

const consolePrint = () => {
    console.log(document.getElementById("texto").value)
    texto.value = ""
}

const rewriteP = () => {
    paragrafo.innerHTML = texto.value
    texto.value = ""
}