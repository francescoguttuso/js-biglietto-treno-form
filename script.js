const chilometri = document.getElementById('km');
const eta = document.getElementById('eta');
const form = document.querySelector('form');
const kmInseriti = document.getElementById('km-inseriti');
const etaInserita = document.getElementById('eta-inserita');
const prezzoDelBiglietto = document.getElementById('prezzo-biglietto');


form.addEventListener('submit', event =>{
event.preventDefault()

const prezzoPerKm = 0.21;
const etaUtente = parseInt(eta.value);
const kmUtente = parseInt(km.value);
let prezzoBiglietto = kmUtente * prezzoPerKm;

if (etaUtente < 18) {
    prezzoBiglietto = prezzoBiglietto * 0.8; //  sconto del 20% per i minorenni

} else if (etaUtente > 65) {
    prezzoBiglietto = prezzoBiglietto * 0.6; // sconto del 40% per gli over 65

}
console.log(prezzoBiglietto);


kmInseriti.textContent = `Chilometri dichiarati: ${kmUtente} km`;
etaInserita.textContent = `Età dichiarata: ${etaUtente} anni`;
prezzoDelBiglietto.textContent = `Prezzo totale del Biglietto: ${prezzoBiglietto.toFixed(2)}€`;
});


 