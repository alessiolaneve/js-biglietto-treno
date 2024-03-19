console.log('biglietto del treno')
const prezzoKm = 0.21
// km percorsi
const inputKm = document.getElementById('km') 
console.log (km)
// età del passeggero
const inputAge = document.getElementById('age')  
console.log (age)
// bottone calcola
const buttonElement = document.getElementById('submit')
console.log (buttonElement)
buttonElement.addEventListener('click', function (){
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
}


