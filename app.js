console.log('biglietto del treno')
const prezzoKm = 0.21

// km percorsi
const inputKm = document.getElementById('km')
console.log(inputKm)

// età del passeggero
const inputAge = document.getElementById('age')
console.log(inputAge)

// bottone calcola
const buttonElement = document.getElementById('submit')
console.log(buttonElement)


// il bottone deve:
// - recuperare le variabili da html
// - calcolare lo sconto
// - ritornare lo sconto in numero
buttonElement.addEventListener('click', function () {
    let km = parseInt(inputKm.value)
    console.log(km)
    let age = parseInt(inputAge.value)
    console.log(age)
    // prezzo totale, sconto < 18 o > 65
    const prezzoBase = prezzoKm * km
    console.log(prezzoBase)
    let sconto = 0

    if (age < 18) {
        sconto = 0.2
    } else if (age > 65) {
        sconto = 0.4
    }
    const prezzoTot = prezzoBase - prezzoBase * sconto
    console.log(prezzoTot)
    // print in html del prezzo
    const priceElement = document.getElementById('price')
    priceElement.innerHTML = prezzoTot.toFixed(2) + '&euro;'
})



