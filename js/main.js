// prima fase: preparazione
let eta;
let km;


// 2nd fase: raccolta dati
const prezzoKm = 0.21;
let prezzoBiglietto = km * prezzoKm;




eta = Number(prompt("Scrivi la tua età"));
console.log(eta);
km = Number(prompt("scrivi quanti km vuoi percorrere"));
console.log(km);











// 3rd fase: elaborazione

if (eta < 18) { (prezzoBiglietto  * 20) / 100 };
console.log(prezzoBiglietto);


if (eta > 65) { (prezzoBiglietto * 40) / 100 };
console.log(prezzoBiglietto);






