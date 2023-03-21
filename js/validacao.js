function verificaChute(chute){
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += `
            <div> Valor Invalido!</div>
        `
        return
    }

    if (numeroMaiorMenorPermitido(numero)){
        elementoChute.innerHTML +=`
            <div>Fale um numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Voce Acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O numero secreto e menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O numero secreto e maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}