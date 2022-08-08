

let inputAdultosjs = document.getElementById("adultos");
let inputCriancajs = document.getElementById("criancas");
let inputDuracaojs = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adultos = inputAdultosjs.value;
    let criancas = inputCriancajs.value;
    let duracao = inputDuracaojs.value;
    

    let qdtTotalCarne = CarnePP(duracao) * adultos + (CarnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = CervejaPP(duracao) * adultos;
    let qdtTotalRefrigerante = RefrigerantePP(duracao) * adultos + (RefrigerantePP(duracao) / 2 * criancas);
    let qdtTotalPao = PaoPP(duracao) * adultos + (PaoPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne <p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} latas de Cerveja <p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalRefrigerante / 2000)} litros de refrigerante <p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalPao)} Pacotes de Pão de alho`
    resultado.innerHTML += `<p> Bom Churrasco <p>`
    let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    

    let qdtTotalCarne = CarnePP(duracao) * adultos + (CarnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = CervejaPP(duracao) * adultos;
    let qdtTotalRefrigerante = RefrigerantePP(duracao) * adultos + (RefrigerantePP(duracao) / 2 * criancas);
    let qdtTotalPao = PaoPP(duracao) * adultos + (PaoPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne <p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} latas de Cerveja <p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalRefrigerante / 2000)} litros de refrigerante <p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalPao)} Pacotes de Pão de alho`
    resultado.innerHTML += `<p> Bom Churrasco <p>`
    
}

function CarnePP(duracao) {
    if (duracao < 6){
        return 1000;
    } else {
        return 2000;
    }
}

function CervejaPP(duracao){
    if(duracao < 6){
        return 1200 ;
    } else {
        return 2000;
    }
}

function RefrigerantePP(duracao){
    if (duracao < 6){
        return 1000;
    } else {
        return 1500;
    }
}

function PaoPP(duracao){
    if (duracao < 6){
        return 1;
    } else {
        return 2;
    }
}



}

function CarnePP(duracao) {
    if (duracao < 6){
        return 1000;
    } else {
        return 2000;
    }
}

function CervejaPP(duracao){
    if(duracao < 6){
        return 1200 ;
    } else {
        return 2000;
    }
}

function RefrigerantePP(duracao){
    if (duracao < 6){
        return 1000;
    } else {
        return 1500;
    }
}

function PaoPP(duracao){
    if (duracao < 6){
        return 1;
    } else {
        return 2;
    }
}


