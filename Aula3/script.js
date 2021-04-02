var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while(tentativas > 0){
    var chute = parseInt(prompt("Digite um número entre 0 e 10"))

        if (numeroSecreto == chute){
            alert("Parabéns! Você acertou!!")
            break
        } else if (chute > numeroSecreto){
            alert("O numero secreto é menor")
            tentativas = tentativas - 1
        } else if (chute < numeroSecreto){
            alert("O numero secreto é maior")
            tentativas = tentaticas - 1
        }
}

if(chute != numeroSecreto){
    alert(`Suas tentativas acabaram. O numero secreto era ${numeroSecreto}`)
}

document.write(`<p style="color: #ffffff; position: absolute; bottom: 250px; left: 40%; text-align: center; background-color: black; border-radius: 4px; padding: 0px 10px;"> O numero secreto é: ${numeroSecreto}</p>`)