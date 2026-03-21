let carisma = 0;

document.getElementById("carisma-valor");

let spanCarisma = document.getElementById("carisma-valor");

spanCarisma.textContent = carisma;

let botaoMais = document.getElementById("carisma-mais");
let botaoMenos = document.getElementById("carisma-menos");

botaoMais.addEventListener("click", function() {
    if (forca < 5) {
    forca++;
}
});

spanForca.textContent = forca;

botaoMenos.addEventListener("click", function() {
    if (forca > 0) {
    forca--;
}
});

spanForca.textContent = forca;s