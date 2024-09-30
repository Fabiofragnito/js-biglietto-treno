// prima fase: preparazione
let eta;
let km;


// 2nd fase: raccolta dati
const prezzoKm = 0.21;




eta = Number(prompt("Scrivi la tua età"));
console.log(eta);
km = Number(prompt("scrivi quanti km vuoi percorrere"));
console.log(km);

let prezzoBiglietto = km * prezzoKm;


console.log(prezzoBiglietto);








// 3rd fase: elaborazione




if (eta < 18) 
    {
    // Sconto del 20% per minorenni
    prezzoBiglietto = prezzoBiglietto * 0.80;
} 


else if (eta > 65)
     {
    // Sconto del 40% per over 65
    prezzoBiglietto = prezzoBiglietto * 0.60;
}
alert(`Il prezzo del biglietto è: ${prezzoBiglietto}€`);
     


 
    







