// function prepararBolo(callbackMassaPronta, callbackBoloPronto) {
//     console.log("Batendo a massa...");
//     console.log("Massa indo ao forno...");
//     callbackMassaPronta();
//     console.log("Preparando o recheio...");
//     console.log("Recheio pronto...");
//     callbackBoloPronto();

// }

// function meuBooEstaPronto() {
//     console.log("Bolo Pronto!");
// }

// prepararBolo(() => console.log("Massa pronta QUADRADA"), meuBooEstaPronto);
// prepararBolo(() => console.log("Massa pronta REDONDA"), meuBooEstaPronto);
console.log("Sinal verde");
setTimeout(() => console.log("Sinal amarelo"), 600);
setTimeout(() => console.log("Sinal vermelho"), 1000);