let valorEmDolarFloat
let valorEmDolarTxt
let valorEmReal

valorEmDolarTxt = prompt("Qual o valor em Dolar você quer converter?")

valorEmDolarFloat = parseFloat(valorEmDolarTxt)

confirm(`Esse é o valor a ser convertido? ${valorEmDolarFloat}`)

valorEmReal = valorEmDolarFloat * 5.50


alert(valorEmReal.toFixed(2).replace(".", ","))

// Revisão:
// var, let, const = Váriaveis e constante que é utilizado para alocar espaço em memória (Int, Float e String)
//alert - parseInt - parseFloat - prompt
//