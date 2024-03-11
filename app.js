console.log('biglietto del treno')
const prezzoKm = 0.21
// km percorsi
const km = parseInt(prompt('Inserisci il numero di km del viaggio')) 
console.log (km)
// età del passeggero
const age = parseInt(prompt('Inserisci la tua età')) 
console.log (age)
// prezzo totale, sconto < 18 o > 65
const prezzo = prezzoKm * km
console.log (prezzo)

let sconto = 0

if(age<18){
    sconto = prezzo * 0.2
} 
else if (age=>65){
    sconto = prezzo * 0.4
} 

let prezzoTot = prezzo - sconto
console.log(prezzoTot)
// prezzo a due decimali
document.getElementById("prezzo_html").innerHTML = "Il prezzo del biglietto è: " + prezzoTot;