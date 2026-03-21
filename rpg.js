// - CARISMA - 
let carisma = 0;

let spanCarisma = document.getElementById("carisma-valor");

spanCarisma.textContent = carisma;

let botaoMais = document.getElementById("carisma-mais");
let botaoMenos = document.getElementById("carisma-menos");

botaoMais.addEventListener("click", function () {
    if (carisma < 5) {
        carisma++;
        spanCarisma.textContent = carisma;
    }
});

botaoMenos.addEventListener("click", function () {
    if (carisma > 0) {
        carisma--;
        spanCarisma.textContent = carisma;
    }
});

// - CONSTITUIÇAO -
let constituicao = 0;

let spanConstituicao = document.getElementById("constituicao-valor");
let coBMais = document.getElementById("constituicao-mais");
let coBMenos = document.getElementById("constituicao-menos");

spanConstituicao.textContent = constituicao;

coBMais.addEventListener("click", function () {
    if (constituicao < 5) {
        constituicao++;
        spanConstituicao.textContent = constituicao;
    }
});

coBMenos.addEventListener("click", function () {
    if (constituicao > 0) {
        constituicao--;
        spanConstituicao.textContent = constituicao;
    }
});

// - DESTREZA -
let destreza = 0;

let spanDestreza = document.getElementById("destreza-valor");
let dexBMais = document.getElementById("destreza-mais");
let dexBMenos = document.getElementById("destreza-menos");

spanDestreza.textContent = destreza;

dexBMais.addEventListener("click", function () {
    if (destreza < 5) {
        destreza++;
        spanDestreza.textContent = destreza;
    }
})

dexBMenos.addEventListener("click", function () {
    if (destreza > 0) {
        destreza--;
        spanDestreza.textContent = destreza;
    }
})

// - ENERGIA -
let energia = 0;

let spanEnergia = document.getElementById("energia-valor");
let eneBMais = document.getElementById("energia-mais");
let eneBMenos = document.getElementById("energia-menos");

spanEnergia.textContent = energia;

eneBMais.addEventListener("click", function () {
    if (energia < 5) {
        energia++;
        spanEnergia.textContent = energia;
    }
});

eneBMenos.addEventListener("click", function () {
    if (energia > 0) {
        energia--;
        spanEnergia.textContent = energia;
    }
});

// - FORÇA -
let forca = 0;

let spanForca = document.getElementById("forca-valor");
let forBMais = document.getElementById("forca-mais");
let forBMenos = document.getElementById("forca-menos");

spanForca.textContent = forca;

forBMais.addEventListener("click", function () {
    if (forca < 5) {
        forca++;
        spanForca.textContent = forca;
    }
});

forBMenos.addEventListener("click", function () {
    if (forca > 0) {
        forca--;
        spanForca.textContent = forca;
    }
});

// - INTELIGÊNCIA -
let inteligencia = 0;

let spanInteligencia = document.getElementById("inteligencia-valor");
let intBMais = document.getElementById("inteligencia-mais");
let intBMenos = document.getElementById("inteligencia-menos");

spanInteligencia.textContent = inteligencia;

intBMais.addEventListener("click", function () {
    if (inteligencia < 5) {
        inteligencia++;
        spanInteligencia.textContent = inteligencia;
    }
});

intBMenos.addEventListener("click", function () {
    if (inteligencia > 0) {
        inteligencia--;
        spanInteligencia.textContent = inteligencia;
    }
});

// - VONTADE -
let vontade = 0;

let spanVontade = document.getElementById("vontade-valor");
let vonBMais = document.getElementById("vontade-mais");
let vonBMenos = document.getElementById("vontade-menos");

spanVontade.textContent = vontade;

vonBMais.addEventListener("click", function () {
    if (vontade < 5) {
        vontade++;
        spanVontade.textContent = vontade;
    }
});

vonBMenos.addEventListener("click", function () {
    if (vontade > 0) {
        vontade--;
        spanVontade.textContent = vontade;
    }
});