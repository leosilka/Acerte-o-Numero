function verificaChute(chute){
    const numero = +chute

    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botao para jogar novamente!</h3>
                <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
            document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += `
                <div> Valor Invalido!</div>
            `
            return
        }
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

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
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

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})