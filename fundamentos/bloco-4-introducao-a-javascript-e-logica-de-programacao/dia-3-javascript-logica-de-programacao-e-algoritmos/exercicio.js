var n = 5
let resultado = []
let arrayComResultado = []


for (let contador = 0; contador <= n; contador += 1) {
    let temporario = []
    if (contador < n) {
        temporario += '*'
    }
    resultado += temporario
}

for (let contador = 0; contador < resultado.length; contador += 1) {
    arrayComResultado.push(resultado)
}

for (let resultadoFinal of arrayComResultado) {
    console.log(resultadoFinal)
}